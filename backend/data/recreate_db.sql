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

-- Populate restaurants with sample data including ratings
INSERT INTO questionario (nome) VALUES
("Me Green");

-- Populate food_items with sample data
-- Items for The Pizza Palace (id_restaurant = 1)
INSERT INTO sezione (questionario_id, titolo, ordine) VALUES
(1, "Casa", 1),
(1, "Trasporti",2),
(1, "Viaggi", 3),
(1, "Alimentazione", 4),
(1, "Consumi", 5);

-- Items for Sushi Spot (id_restaurant = 2)
INSERT INTO domanda (id_sezione, titolo, corpo, ordine, tipo) VALUES
(1,"CASA","Quanto è grande la tua casa (in metri quadrati)?",1, "slider"),
(1,"CASA","A quanti gradi tieni il riscaldamento in casa durante l’inverno?",2, "slider"),
(1,"CASA","A quanti gradi tieni il condizionatore in casa d’estate?",3, "slider"),
(1,"CASA","Quanto durano in media le tue docce?",4, "slider"),
(1,"CASA","Quali elettrodomestici hai in casa?",5, "normale"),
(1,"CASA","Usi la lavatrice sempre a pieno carico?",6, "slider"),
(1,"CASA","Che tipo di lampadine usi in casa?",7, "normale");

-- Items for Taco Fiesta (id_restaurant = 3)
INSERT INTO domanda (id_sezione, titolo, corpo, ordine, tipo) VALUES
(2,"TRASPORTI","Come ti sposti abitualmente per andare al lavoro o a scuola?",1, "normale"),
(2,"TRASPORTI","Come accompagni i tuoi figli a scuola o gestisci i tragitti quotidiani dei tuoi familiari?",2, "normale"),
(2,"TRASPORTI","Come ti comporti quando devi fare commissioni brevi (entro 5 km)?",3, "normale");

-- Items for Burger Barn (id_restaurant = 4)
INSERT INTO domanda (id_sezione, titolo, corpo, ordine, tipo) VALUES
(3,"VIAGGI","Quando viaggi occasionalmente in Italia (entro 500 km), che mezzo preferisci?",1, "normale"),
(3,"VIAGGI","Per viaggi internazionali (Europa), quale mezzo scegli solitamente?",2, "normale"),
(3,"VIAGGI","Se vai in vacanza in un’altra regione, come organizzi il trasporto?",3 "normale");

-- Items for The Curry House (id_restaurant = 5)
INSERT INTO domanda (id_sezione, titolo, corpo, ordine,tipo) VALUES
(3,"ALIMENTAZIONE","",1, ""),
(3,"ALIMENTAZIONE","",2, ""),
(3,"ALIMENTAZIONE","",3, "");

-- Items for Thai Delight (id_restaurant = 6)
INSERT INTO domanda (id_sezione, titolo, corpo, ordine) VALUES
(4,"CONSUMI","Quanti vestiti nuovi acquisti al mese?",1, "slider"),
(4,"CONSUMI","Con quale frequenza ricevi pacchi acquistati online?",2, "slider"),
(4,"CONSUMI","Cosa fai con i vestiti o oggetti che non usi più?",3, "normale"),
(4,"CONSUMI","Come consumi l’acqua potabile a casa (per bere)?",4, "normale");

INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2) VALUES
(1,1,);
