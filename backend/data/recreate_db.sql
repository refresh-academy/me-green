-- Drop tables if they exist to start from a clean slate
DROP TABLE IF EXISTS questionario;
DROP TABLE IF EXISTS sezione;
DROP TABLE IF EXISTS domanda;
DROP TABLE IF EXISTS risposta;

-- Create users table
-- This table stores user login information.
CREATE TABLE questionario (
  id_questionario INTEGER PRIMARY KEY AUTOINCREMENT
);

-- Create restaurants table
-- This table stores information about each restaurant, now including ratings.
CREATE TABLE restaurants (
    id_sezione INTEGER PRIMARY KEY AUTOINCREMENT,
    kitchen_type TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    is_new BOOLEAN DEFAULT 0,
    image_url TEXT,
    minimum_order REAL DEFAULT 0,
    rating_average REAL,
    rating_count INTEGER
);

-- Create food_items table
-- This table stores all the food items available from different restaurants.
CREATE TABLE food_items (
    id_food_item INTEGER PRIMARY KEY AUTOINCREMENT,
    id_restaurant INTEGER NOT NULL,
    food_type TEXT,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    is_recommended BOOLEAN DEFAULT 0,
    offer_discount REAL DEFAULT 0,
    price REAL NOT NULL,
    FOREIGN KEY (id_restaurant) REFERENCES restaurants (id_restaurant) ON DELETE CASCADE
);

-- Create orders table
-- This table stores customer orders.
CREATE TABLE orders (
    id_order INTEGER PRIMARY KEY AUTOINCREMENT,
    is_paid BOOLEAN NOT NULL DEFAULT 0,
    is_delivered BOOLEAN NOT NULL DEFAULT 0,
    total_price REAL NOT NULL,
    order_number TEXT NOT NULL UNIQUE,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create order_items table
-- This is a junction table linking orders and food_items, representing the contents of each order.
CREATE TABLE order_items (
    id_order INTEGER NOT NULL,
    id_food_item INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY (id_order, id_food_item),
    FOREIGN KEY (id_order) REFERENCES orders (id_order) ON DELETE CASCADE,
    FOREIGN KEY (id_food_item) REFERENCES food_items (id_food_item) ON DELETE CASCADE
);

-- Populate restaurants with sample data including ratings
INSERT INTO restaurants (kitchen_type, name, description, is_new, image_url, minimum_order, rating_average, rating_count) VALUES
('Italian', 'The Pizza Palace', 'Authentic Italian pizzas and pastas made with love.', 1, 'http://www.visitpizzapalace.com/wp-content/uploads/Pizza-Palace-Logo-e1523984936896.png', 15.50, 4.5, 88),
('Japanese', 'Sushi Spot', 'Fresh and delicious sushi, sashimi, and rolls.', 0, 'https://blog.mousewatcher.com/wp-content/uploads/2024/02/Shiki-Sai_1920x1080_feature-896x504.jpg', 25.00, 4.8, 95),
('Mexican', 'Taco Fiesta', 'The best tacos, burritos, and quesadillas in town.', 1, 'https://example.com/images/taco_fiesta.jpg', 10.00, 4.2, 76),
('American', 'Burger Barn', 'Classic American burgers, fries, and shakes.', 0, 'https://example.com/images/burger_barn.jpg', 12.00, 3.9, 64),
('Indian', 'The Curry House', 'Rich and aromatic Indian curries and tandoori specials.', 1, 'https://example.com/images/curry_house.jpg', 20.00, 4.6, 58),
('Thai', 'Thai Delight', 'Exquisite and authentic Thai cuisine.', 0, 'https://example.com/images/thai_delight.jpg', 18.00, 4.7, 82);

-- Populate food_items with sample data
-- Items for The Pizza Palace (id_restaurant = 1)
INSERT INTO food_items (id_restaurant, food_type, name, description, image_url, is_recommended, offer_discount, price) VALUES
(1, 'Pizza', 'Margherita', 'Classic pizza with fresh mozzarella, tomatoes, and basil.', 'https://example.com/images/margherita.jpg', 1, 0, 12.99),
(1, 'Pasta', 'Spaghetti Carbonara', 'Creamy pasta with pancetta, egg, and parmesan cheese.', 'https://example.com/images/carbonara.jpg', 1, 5, 14.50),
(1, 'Pizza', 'Pepperoni Passion', 'Loaded with spicy pepperoni and mozzarella.', 'https://example.com/images/pepperoni.jpg', 0, 0, 14.99),
(1, 'Appetizer', 'Garlic Bread', 'Toasted baguette with garlic butter and herbs.', 'https://example.com/images/garlic_bread.jpg', 0, 0, 5.50);

-- Items for Sushi Spot (id_restaurant = 2)
INSERT INTO food_items (id_restaurant, food_type, name, description, image_url, is_recommended, offer_discount, price) VALUES
(2, 'Sushi', 'California Roll', 'Crab meat, avocado, and cucumber wrapped in seaweed and rice.', 'https://example.com/images/california_roll.jpg', 1, 10, 8.50),
(2, 'Ramen', 'Tonkotsu Ramen', 'Rich and savory pork broth ramen with chashu pork.', 'https://example.com/images/ramen.jpg', 0, 0, 15.00),
(2, 'Sushi', 'Spicy Tuna Roll', 'Minced tuna with a spicy mayo sauce.', 'https://example.com/images/spicy_tuna.jpg', 1, 0, 9.50),
(2, 'Appetizer', 'Edamame', 'Steamed and salted young soybeans.', 'https://example.com/images/edamame.jpg', 0, 0, 4.75);

-- Items for Taco Fiesta (id_restaurant = 3)
INSERT INTO food_items (id_restaurant, food_type, name, description, image_url, is_recommended, offer_discount, price) VALUES
(3, 'Taco', 'Al Pastor Taco', 'Marinated pork tacos with pineapple and cilantro.', 'https://example.com/images/al_pastor.jpg', 1, 0, 3.75),
(3, 'Burrito', 'Carne Asada Burrito', 'A giant burrito filled with grilled steak, rice, beans, and salsa.', 'https://example.com/images/burrito.jpg', 0, 0, 11.25),
(3, 'Quesadilla', 'Cheese Quesadilla', 'Melted cheese in a grilled flour tortilla. Served with salsa and sour cream.', 'https://example.com/images/quesadilla.jpg', 0, 15, 8.99),
(3, 'Side', 'Guacamole & Chips', 'Freshly made guacamole with crispy tortilla chips.', 'https://example.com/images/guac.jpg', 1, 0, 7.50);

-- Items for Burger Barn (id_restaurant = 4)
INSERT INTO food_items (id_restaurant, food_type, name, description, image_url, is_recommended, offer_discount, price) VALUES
(4, 'Burger', 'Classic Cheeseburger', 'A juicy beef patty with cheddar cheese, lettuce, tomato, and onion.', 'https://example.com/images/cheeseburger.jpg', 1, 0, 9.99),
(4, 'Burger', 'Bacon BBQ Burger', 'Beef patty, crispy bacon, BBQ sauce, and an onion ring.', 'https://example.com/images/bbq_burger.jpg', 0, 0, 11.99),
(4, 'Side', 'French Fries', 'Golden and crispy French fries.', 'https://example.com/images/fries.jpg', 1, 0, 3.50),
(4, 'Drink', 'Chocolate Milkshake', 'Thick and creamy chocolate milkshake.', 'https://example.com/images/milkshake.jpg', 0, 10, 5.50);

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
