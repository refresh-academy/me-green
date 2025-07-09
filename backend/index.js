const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

const dbPath = path.resolve(__dirname, 'data/mangia-e-basta-db.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Enable foreign key support
    db.run('PRAGMA foreign_keys = ON;');
  }
});

const dbAll = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const dbRun = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID, changes: this.changes });
      }
    });
  });
};

app.get('/api/questionario', async (req, res) => {
  try {
    // FIXME: do NOT use SELECT *
    const questionario = await dbAll('SELECT * FROM questionario');
    res.json(questionario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/questionario/:id', async (req, res) => {
  try {
    // FIXME: do NOT use SELECT *
    const questionario = await dbAll('SELECT * FROM restaurants WHERE id_questionario = ?', [req.params.id]);
    if (questionario.length === 0) {
      return res.status(404).json({ error: 'Questionario non trovato' });
    }
    res.json(questionario[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/food-items', async (req, res) => {
  try {
    // FIXME: do NOT use SELECT *
    const foodItems = await dbAll('SELECT * FROM food_items');
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/restaurants/:id/food-items', async (req, res) => {
  try {
    // FIXME: do NOT use SELECT *
    const foodItems = await dbAll('SELECT * FROM food_items WHERE id_restaurant = ?', [req.params.id]);
    if (foodItems.length === 0) {
      return res.status(404).json({ error: 'No food items found for this restaurant' });
    }
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const query = `
            SELECT o.id_order, o.order_number, o.total_price,
                   o.is_paid, o.is_delivered, o.order_date
            FROM orders o
        `;
    const orders = await dbAll(query);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/orders/:id', async (req, res) => {
  try {
    // Get order details
    const orderQuery = `SELECT *
                            FROM orders WHERE id_order = ?`;
    const order = await dbAll(orderQuery, [req.params.id]);

    if (order.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const itemsQuery = `
            SELECT fi.name, fi.price, oi.quantity
            FROM order_items oi
            JOIN food_items fi ON oi.id_food_item = fi.id_food_item
            WHERE oi.id_order = ?
        `;
    const items = await dbAll(itemsQuery, [req.params.id]);
    res.json({ ...order[0], items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/orders', async (req, res) => {
  const { items } = req.body; // Expecting {items: [{ id_food_item: 1, quantity: 2 }, ...]}
  
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Order must include at least one item.' });
  }

  try {
    // Calculate total price from the database to prevent client-side tampering
    let totalPrice = 0;
    for (const item of items) {
      const foodItem = await dbAll(`SELECT price
                                          FROM food_items
                                          WHERE id_food_item = ?`,
        [item.id_food_item]);
      if (foodItem.length > 0) {
        totalPrice += foodItem[0].price * item.quantity;
      } else {
        return res.status(400).json({ error: `Food item with id ${item.id_food_item} not found.` });
      }
    }
    const orderNumber = `ORD-${Date.now()}`; // NOT SAFE! WHY?
    const orderResult = await dbRun(
      `INSERT INTO orders
            (total_price, order_number, is_paid, is_delivered)
            VALUES (?, ?, 0, 0)`,
      [totalPrice, orderNumber]
    );
    const orderId = orderResult.id;

    for (const item of items) {
      await dbRun(
        `INSERT INTO order_items
                 (id_order, id_food_item, quantity)
                 VALUES (?, ?, ?)`,
        [orderId, item.id_food_item, item.quantity]
      );
    }
    res.status(201).json({ message: 'Order created successfully', orderId, orderNumber, totalPrice });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order', details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
    process.exit(0);
  });
});