/* Replace with your SQL commands */

INSERT INTO questionario (nome) VALUES
("Me Green");

INSERT INTO sezione (questionario_id, titolo, ordine) VALUES
(1, "Casa", 1),
(1, "Trasporti",2),
(1, "Viaggi", 3),
(1, "Alimentazione", 4),
(1, "Consumi", 5);


INSERT INTO domanda (sezione_id, titolo, corpo, ordine, tipo) VALUES
(1,"CASA","Quanto è grande la tua casa (in metri quadrati)?",1, "slider"),
(1,"CASA","A quanti gradi tieni il riscaldamento in casa durante l’inverno?",2, "slider"),
(1,"CASA","A quanti gradi tieni il condizionatore in casa d’estate?",3, "slider"),
(1,"CASA","Quanto durano in media le tue docce?",4, "slider"),
(1,"CASA","Quali elettrodomestici hai in casa?",5, "radio"),
(1,"CASA","Usi la lavatrice sempre a pieno carico?",6, "slider"),
(1,"CASA","Che tipo di lampadine usi in casa?",7, "radio");


INSERT INTO domanda (sezione_id, titolo, corpo, ordine, tipo) VALUES
(2,"TRASPORTI","Come ti sposti abitualmente per andare al lavoro o a scuola?",1, "radio"),
(2,"TRASPORTI","Come accompagni i tuoi figli a scuola o gestisci i tragitti quotidiani dei tuoi familiari?",2, "radio"),
(2,"TRASPORTI","Come ti comporti quando devi fare commissioni brevi (entro 5 km)?",3, "radio");


-- INSERT INTO domanda (sezione_id, titolo, corpo, ordine, tipo) VALUES
-- (3,"VIAGGI","Quando viaggi occasionalmente in Italia (entro 500 km), che mezzo preferisci?",1, "radio"),
-- (3,"VIAGGI","Per viaggi internazionali (Europa), quale mezzo scegli solitamente?",2, "radio"),
-- (3,"VIAGGI","Se vai in vacanza in un’altra regione, come organizzi il trasporto?",3 "radio");


-- INSERT INTO domanda (sezione_id, titolo, corpo, ordine,tipo) VALUES
-- (3,"ALIMENTAZIONE","",1, ""),
-- (3,"ALIMENTAZIONE","",2, ""),
-- (3,"ALIMENTAZIONE","",3, "");

-- SEZIONI CONSUMI
-- INSERT INTO domanda (sezione_id, titolo, corpo, ordine) VALUES
-- (4,"CONSUMI","Quanti vestiti nuovi acquisti al mese?",1, "slider"),
-- (4,"CONSUMI","Con quale frequenza ricevi pacchi acquistati online?",2, "slider"),
-- (4,"CONSUMI","Cosa fai con i vestiti o oggetti che non usi più?",3, "radio"),
-- (4,"CONSUMI","Come consumi l’acqua potabile a casa (per bere)?",4, "radio";

INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2) VALUES
(1,1,"come stai?",0,0);
