-- Drop tables if they exist to start from a clean slate
DROP TABLE IF EXISTS questionario;
DROP TABLE IF EXISTS sezione;
DROP TABLE IF EXISTS domande;
DROP TABLE IF EXISTS risposta;
DROP TABLE IF EXISTS risultato;

-- Create users table
-- This table stores user login information.
CREATE TABLE questionario (
  id_questionario INTEGER PRIMARY KEY AUTOINCREMENT,
  titolo TEXT NOT NULL,
  descrizione TEXT NOT NULL,
  logo TEXT
);

-- Create restaurants table
-- This table stores information about each restaurant, now including ratings.
CREATE TABLE sezione (
    id_sezione INTEGER PRIMARY KEY AUTOINCREMENT,
    questionario_id INTEGER NOT NULL,
    titolo TEXT NOT NULL,
    descrizione TEXT NOT NULL,
    ordine INTEGER,
    FOREIGN KEY (questionario_id) REFERENCES questionario (id_questionario) ON DELETE CASCADE
);

-- Create food_items table
-- This table stores all the food items available from different restaurants.
CREATE TABLE domanda (
    id_domanda INTEGER PRIMARY KEY AUTOINCREMENT,
    sezione_id INTEGER NOT NULL,
    testo TEXT NOT NULL,
    descrizione TEXT,
    image_url TEXT,
    punteggio_massimo INTEGER,
    ordine INTEGER,
    FOREIGN KEY (sezione_id) REFERENCES sezione (id_sezione) ON DELETE CASCADE
);

-- Create orders table
-- This table stores customer orders.
CREATE TABLE risposta (
    id_risposta INTEGER PRIMARY KEY AUTOINCREMENT,
    domanda_id INTEGER NOT NULL,
    testo TEXT NOT NULL,
    punteggio INTEGER,
    ordine INTEGER,
    FOREIGN KEY (domanda_id) REFERENCES domanda (id_domanda) ON DELETE CASCADE
);

-- Create order_items table
-- This is a junction table linking orders and food_items, representing the contents of each order.
CREATE TABLE risultato (
    id_risultato INTEGER NOT NULL,
    nome TEXT NOT NULL,
    punteggio INTEGER DEFAULT 0,
    giorno TEXT
);

CREATE TABLE sezione_risultato (
    risultato_id INTEGER NOT NULL,
    sezione_id INTEGER NOT NULL,
    FOREIGN KEY (risultato_id) REFERENCES risultato (id_risultato) ON DELETE CASCADE,
    FOREIGN KEY (sezione_id) REFERENCES sezione (id_sezione) ON DELETE CASCADE
);
-- Populate restaurants with sample data including ratings
INSERT INTO questionario (titolo, descrizione, logo, id_questionario) VALUES
("Quanto sei green?", "Questionario che calcola quanto sei ecologico, in modo Refresh", "/logogreen.png",1);

-- Populate food_items with sample data
-- Items for The Pizza Palace (id_restaurant = 1)
INSERT INTO sezione (questionario_id ,titolo, descrizione, id_sezione, ordine) VALUES
(1,"Casa / Energia","",1,1),
(1,"Trasporti","",2,2),
(1,"Viaggi","",3,3),
(1,"Alimentazione","",4,4),
(1,"Consumi","",5,5);

-- Items for Sushi Spot (id_restaurant = 2)
INSERT INTO domanda (sezione_id, testo, descrizione,image_url, punteggio_massimo, id_domanda, ordine) VALUES
(1,"Come riscaldi la casa in inverno?","","",,1,1),
(1,"Che lampadine usi?", "", "", 2, 2,2),
(1,"Spegni le luci quando esci da una stanza?", "", "", 2, 3,3),
(1,"Che elettrodomestici usi?", "", "", 2, 4,4),
(2,"","","",,5)
(2,"","","",,6)
(2,"","","",,7)
(3,"","","",,8)
(3,"","","",,9)
(3,"","","",,10)
(3,"","","",,11)
(4,"","","",,12)
(4,"","","",,13)
(4,"","","",,14)
(4,"","","",,15);

-- Items for Taco Fiesta (id_restaurant = 3)
INSERT INTO risposta (domanda_id, testo, punteggio, ordine) VALUES
(1,"Uso pompe di calore o pannelli solari",0,1),
(1,"Uso una caldaia moderna a gas",1,2),
(1,"Uso una vecchia caldaia o termosifoni elettrici",3,3),
(2, "Solo LED a basso consumo", 0, 1),
(2, "Un mix tra LED e vecchie lampadine", 1, 2),
(2, "Solo lampadine vecchie (alogene o incandescenza)", 2, 3),
(3, "Sempre", 0, 1),
(3, "A volte mi dimentico", 1, 2),
(3, "Lascio spesso le luci accese", 2, 3);

-- Items for Burger Barn (id_restaurant = 4)
INSERT INTO risultato (nome, punteggio, giorno) VALUES
();

-- Items for The Curry House (id_restaurant = 5)
INSERT INTO food_items (id_restaurant, food_type, name, description, image_url, is_recommended, offer_discount, price) VALUES
(5, 'Curry', 'Chicken Tikka Masala', 'Grilled chicken chunks in a spiced, creamy curry sauce.', 'https://example.com/images/tikka_masala.jpg', 1, 0, 16.00),
(5, 'Curry', 'Lamb Vindaloo', 'A fiery and tangy lamb curry from Goa.', 'https://example.com/images/vindaloo.jpg', 0, 0, 17.50),
(5, 'Appetizer', 'Vegetable Samosas', 'Crispy pastry filled with spiced potatoes and peas.', 'https://example.com/images/samosa.jpg', 1, 5, 6.00),
(5, 'Bread', 'Garlic Naan', 'Soft Indian flatbread with garlic and butter.', 'https://example.com/images/naan.jpg', 0, 0, 3.75);

-- Items for Thai Delight (id_restaurant = 6)
INSERT INTO food_items (id_restaurant, food_type, name, description, image_url, is_recommended, offer_discount, price) VALUES
(6, 'Noodles', 'Pad Thai', 'Stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts.', 'https://example.com/images/pad_thai.jpg', 1, 0, 14.50),
(6, 'Curry', 'Green Curry with Chicken', 'Spicy green curry with chicken, bamboo shoots, and basil.', 'https://example.com/images/green_curry.jpg', 0, 10, 15.50),
(6, 'Soup', 'Tom Yum Goong', 'Hot and sour soup with shrimp, mushrooms, and lemongrass.', 'https://example.com/images/tom_yum.jpg', 1, 0, 7.00),
(6, 'Appetizer', 'Spring Rolls', 'Crispy fried rolls filled with vegetables and glass noodles.', 'https://example.com/images/spring_rolls.jpg', 0, 0, 6.50);

-- Populate orders with sample data
INSERT INTO orders (is_paid, is_delivered, total_price, order_number) VALUES
(1, 1, 27.49, 'ORD-' || substr(hex(randomblob(4)), 1, 8)),
(0, 0, 23.50, 'ORD-' || substr(hex(randomblob(4)), 1, 8)),
(1, 0, 42.96, 'ORD-' || substr(hex(randomblob(4)), 1, 8));

-- Populate order_items with sample data
-- Order 1 (ID: 1) contains one Margherita Pizza and one Spaghetti Carbonara
INSERT INTO order_items (id_order, id_food_item, quantity) VALUES
(1, 1, 1),
(1, 2, 1);

-- Order 2 (ID: 2) contains one California Roll and one Tonkotsu Ramen
INSERT INTO order_items (id_order, id_food_item, quantity) VALUES
(2, 5, 1), -- California Roll has id_food_item 5 in the new script
(2, 6, 1); -- Tonkotsu Ramen has id_food_item 6

-- Order 3 (ID: 3) contains two Cheeseburgers, two fries, and one Tikka Masala
INSERT INTO order_items (id_order, id_food_item, quantity) VALUES
(3, 13, 2), -- Classic Cheeseburger
(3, 15, 2), -- French Fries
(3, 17, 1); -- Chicken Tikka Masala
