DROP TABLE IF EXISTS questionario;
DROP TABLE IF EXISTS sezione;
DROP TABLE IF EXISTS domanda;
DROP TABLE IF EXISTS risposta;

-- Create users table
-- This table stores user login information.
CREATE TABLE questionario (
  id_questionario INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(30)
);

-- Create restaurants table
-- This table stores information about each restaurant, now including ratings.
CREATE TABLE sezione (
    id_sezione INTEGER PRIMARY KEY AUTOINCREMENT,
    questionario_id INTEGER NOT NULL,
    titolo TEXT NOT NULL,
    ordine INTEGER NOT NULL,
    FOREIGN KEY (questionario_id) REFERENCES questionario (id_questionario) ON DELETE CASCADE
);

-- Create food_items table
-- This table stores all the food items available from different restaurants.
CREATE TABLE domanda (
    id_domanda INTEGER PRIMARY KEY AUTOINCREMENT,
    sezione_id INTEGER NOT NULL,
    titolo TEXT,
    corpo TEXT,
    ordine INTEGER NOT NULL,
    tipo TEXT,
    FOREIGN KEY (sezione_id) REFERENCES sezione (id_sezione) ON DELETE CASCADE

);

-- Create orders table
-- This table stores customer orders.
CREATE TABLE risposta (
    id_risposta INTEGER PRIMARY KEY AUTOINCREMENT,
    domanda_id INTEGER NOT NULL,
    ordine INTEGER NOT NULL,
    corpo TEXT,
    valore_punti INTEGER DEFAULT 0,
    valore_CO2 INtEGER DEFAULT 0,
    FOREIGN KEY (domanda_id) REFERENCES domanda (id_domanda) ON DELETE CASCADE
);