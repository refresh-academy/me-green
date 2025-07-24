-- SEZIONI CASA
INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (1, 1,"CASA","Quanto è grande la tua casa (in metri quadrati)?",1, "slider");
-- risposte (id_domanda 1)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (1, 1, "Meno di 50 m²",   5, 400, "Ottima scelta! Una casa più piccola consuma meno energia per scaldarsi e raffreddarsi"),
   (1, 2, "Tra 50 e 80 m²",  4, 700, "Bravo! Spazi contenuti aiutano a ridurre i CASA energetici"),
   (1, 3, "Tra 81 e 120 m²", 3, 1000, "Spazio medio: valuta strategie per risparmiare energia"),
   (1, 4, "Tra 121 e 150 m²",2, 1300, "Case grandi consumano di più: l’efficienza energetica è fondamentale"),
   (1, 5, "Più di 150 m²",   1, 1800, "Case molto grandi hanno un impatto maggiore: cerca di compensare con buone abitudini");

INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (2, 1,"CASA","Quanti siete in famiglia?",2, "radio");
-- risposte (id_domanda 2)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (2, 1, "5 o più persone", 5, 700, "Ottimo! Condividere gli spazi riduce l’impatto per persona"),
   (2, 2, "4 persone", 4, 800, "Buona condivisione: continua così!"),
   (2, 3, "3 persone", 3, 900, "La condivisione è utile per limitare i consumi"),
   (2, 4, "2 persone", 2, 1100, "Piccole famiglie: cerca di ottimizzare gli spazi e i consumi"),
   (2, 5, "1 persona", 1, 1400, "Vivere da soli ha un impatto maggiore per persona: cerca di risparmiare dove puoi");

INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (3, 1,"CASA","A quanti gradi tieni il riscaldamento in casa durante l’inverno?", 3, "radio");
-- risposte (id_domanda 13)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (3, 1, "18°C o meno", 5, 500, "Complimenti! Mantieni una temperatura sostenibile"),
   (3, 2, "19°C", 4, 700, "Ottima scelta, pochi gradi fanno molta differenza"),
   (3, 3, "20°C", 3, 900, "Nella media: puoi valutare di abbassarlo un po’"),
   (3, 4, "21°C", 2, 1100, "Ogni grado in più aumenta i consumi"),
   (3, 5, "2°C o più", 1, 1350, "Tienilo sotto controllo: riscaldare troppo fa salire la CO₂");


INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (4, 1,"CASA","A quanti gradi tieni il condizionatore in casa d’estate?", 4, "radio");
-- risposte (id_domanda 14)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (4, 1, "Uso il ventilatore", 5, 300, "Ottimo! Ti rinfreschi in modo responsabile"),
   (4, 2, "26°C o più", 4, 400, "Bravo! Hai scelto una temperatura sostenibile"),
   (4, 3, "24°C/25°C", 3, 500, "Buona media: valuta se puoi alzarlo un po’"),
   (4, 4, "22°C/23°C", 2, 600, "Ogni grado in meno consuma di più"),
   (4, 5, "20°C o meno", 1, 800, "Attenzione! Raffreddare troppo fa male all’ambiente e alla salute");


INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (5, 1,"CASA","Quanto durano in media le tue docce?", 5, "radio");
-- risposte (id_domanda 15)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (5, 1, "Meno di 5 minuti", 5, 100, "Ottimo! Docce brevi risparmiano acqua e gas"),
   (5, 2, "da 5 a 7 minuti", 4, 150, "Bravo! Sei già molto attento"),
   (5, 3, "8 - 10 minuti", 3, 250, "Buona media, ma si può migliorare"),
   (5, 4, "da 10 a 15 minuti", 2, 400, "Docce lunghe consumano molta energia"),
   (5, 5, "più id un quarto d''ora", 1, 600, "Troppo tempo! Riduci per aiutare il pianeta");

INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (6, 1,"CASA","Usi energia da fonti rinnovabili in casa?", 6, "radio");
-- risposte (id_domanda 14)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (6, 1, "Sì, solo energia rinnovabile", 5, 0, "Perfetto! L’energia rinnovabile è la più sostenibile"),
   (6, 2, "Sì, in parte", 4, 200, "Ottima scelta! Ridurre i combustibili fossili è fondamentale"),
   (6, 3, "Non so", 3, 500, "Informarsi è il primo passo verso il cambiamento"),
   (6, 4, "No, ma vorrei", 2, 700, "Bravo per l’intenzione! Informati sul tuo fornitore"),
   (6, 5, "No, uso energia tradizionale", 1, 900, "L’energia fossile ha un impatto elevato: cerca alternative");


INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (7, 1,"CASA","Quali elettrodomestici hai in casa?", 7, "radio");
-- risposte (id_domanda 15)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (7, 1, "Solo quelli essenziali (classe A e superiori)", 5, 300, "Scelta eccezionale! Zero rifiuti e zero trasporto"),
   (7, 2, "Essenziali + 1–2 extra (es. microonde)", 4, 500, "Ottima alternativa, sostenibile e sicura"),
   (7, 3, "Quasi tutti gli elettrodomestici", 3, 700, "Meglio della plastica, ma fai attenzione al trasporto"),
   (7, 4, "Tutti gli elettrodomestici e dispositivi", 2, 900, "Tanta plastica e trasporto: prova a migliorare"),
   (7, 5, "Tanti elettrodomestici vecchi", 1, 1200, "Plastica monouso e trasporto pesano sull’ambiente: meglio alternative più durature");

INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (16, 1,"CASA","Usi la lavatrice sempre a pieno carico?", 8, "radio");
-- risposte (id_domanda 15)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (16, 1, "Sempre a pieno carico", 5, 100, "Perfetto! Così risparmi acqua ed energia"),
   (16, 2, "Quasi sempre a pieno carico", 4, 150, "Ottimo, continua così!"),
   (16, 3, "A metà carico qualche volta", 3, 200, "Va bene, ma si può migliorare"),
   (16, 4, "Spesso a metà carico", 2, 300, "Prova a organizzare meglio i lavaggi"),
   (16, 5, "Quasi sempre a carico ridotto", 1, 400, "Lavare con poca biancheria spreca molte risorse");

INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (17, 1,"CASA","Che tipo di lampadine usi in casa?", 9, "radio");
-- risposte (id_domanda 15)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (17, 1, "Solo LED", 5, 50, "Ottimo! Le lampadine LED consumano pochissimo"),
   (17, 2, "LED + alcune a risparmio energetico", 4, 100, "Molto bene, quasi perfetto!"),
   (17, 3, "Prevalentemente a risparmio", 3, 150, "Buona scelta, ma prova a passare al LED"),
   (17, 4, "Miste, anche alcune alogene", 2, 250, "Sostituisci le lampadine vecchie gradualmente"),
   (17, 5, "Solo alogene o a incandescenza", 1, 400, "Consumo molto alto: meglio passare al LED");
   