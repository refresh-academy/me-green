-- SEZIONI CONSUMI
INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (11, 5,"CONSUMI","Quanti vestiti nuovi acquisti al mese? (per te o per la tua famiglia)",1, "slider");
-- risposte (id_domanda 11)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (11, 1, "Nessuno", 5, 50, "Ottima scelta! Meno acquisti = meno produzione = meno CO₂"),
   (11, 2, "1-2 capi", 4, 100, "Bravo! Acquistare poco aiuta a ridurre l’impatto ambientale"),
   (11, 3, "3-4 capi", 3, 200, "Attenzione: consumare moderatamente è meglio del consumo eccessivo"),
   (11, 4, "5-6 capi", 2, 300, "Più acquisti = più CO₂: valuta se puoi ridurre"),
   (11, 5, "Più di 6 capi", 1, 500, "La moda veloce inquina molto: prova a limitarla");

INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (12, 5,"CONSUMI","Che tipo di vestiti acquisti più spesso?",1, "radio");
-- risposte (id_domanda 12)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (12, 1, "Seconda mano o vintage", 5, 100, "Ottimo! Riutilizzare è una forma di rispetto per il pianeta"),
   (12, 2, "Materiali sostenibili", 4, 150, "Scelta consapevole! I materiali naturali hanno meno impatto"),
   (12, 3, "Di qualità che durano nel tempo", 3, 250, "Acquistare meno e meglio è già un passo avanti"),
   (12, 4, "Vestiti economici (fast fashion)", 2, 350, "Questa scelta ha un impatto elevato: valuta alternative più sostenibili"),
   (12, 5, "Fast fashion, cambio frequente", 1, 500, "Il consumo eccessivo genera molto spreco e inquinamento");

INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (13, 5,"CONSUMI","Con quale frequenza ricevi pacchi acquistati online?", 1, "radio");
-- risposte (id_domanda 13)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (13, 1, "Mai, preferisco negozi locali", 5, 0, "Fantastico! Eviti trasporti e imballaggi inutili"),
   (13, 2, "1–2 volte al mese", 4, 80, "Buon equilibrio tra comodità e sostenibilità"),
   (13, 3, "3–4 volte al mese", 3, 150, "Un po’ troppi pacchi: prova a raggruppare gli acquisti"),
   (13, 4, "1–2 volte a settimana", 2, 250, "Acquisti frequenti aumentano molto le emissioni"),
   (13, 5, "Più di 2 volte a settimana", 1, 350, "Valuta se puoi ridurre: ogni consegna pesa sul clima");


INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (14, 5,"CONSUMI","Cosa fai con i vestiti o oggetti che non usi più?", 1, "radio");
-- risposte (id_domanda 14)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (14, 1, "Li dono o li rivendo", 5, 20, "Benissimo! Allunghi la vita degli oggetti e riduci i rifiuti"),
   (14, 2, "Li porto nei centri raccolta", 4, 50, "Buona scelta: gli oggetti vengono gestiti correttamente"),
   (14, 3, "Li riutilizzo in casa", 3, 80, "Creativo e utile! Anche se non sempre è la soluzione ottimale"),
   (14, 4, "Li butto nell’indifferenziata", 2, 150, "Spreco e inquinamento: cerca alternative più verdi"),
   (14, 5, "Li accumulo o butto via senza pensarci", 1, 200, "Attenzione: ignorare i rifiuti genera spreco e CO₂ inutile");


INSERT INTO domanda (id_domanda, sezione_id, titolo, corpo, ordine, tipo) 
VALUES (15, 5,"CONSUMI","Come consumi l’acqua potabile a casa (per bere)?", 1, "radio");
-- risposte (id_domanda 15)
INSERT INTO risposta (domanda_id, ordine, corpo, valore_punti, valore_CO2, commento) 
VALUES
   (15, 1, "Rubinetto con borraccia", 5, 5, "Scelta eccezionale! Zero rifiuti e zero trasporto"),
   (15, 2, "Rubinetto con filtro", 4, 20, "Ottima alternativa, sostenibile e sicura"),
   (15, 3, "Bottiglie di vetro", 3, 60, "Meglio della plastica, ma fai attenzione al trasporto"),
   (15, 4, "Bottiglie di plastica da 2L", 2, 100, "Tanta plastica e trasporto: prova a migliorare"),
   (15, 5, "Bottiglie piccole da 0,5L", 1, 200, "Plastica monouso e trasporto pesano sull’ambiente: meglio alternative più durature");

-- INSERIAMO le immagini, e la loro posizione sulla pagina, nella tabella immagine_sezione

INSERT INTO immagine_sezione (sezione_id,URL,descrizione,classi) VALUES
   (5,'persona_bidone.png','consumi','h-32 md:h-46 mb-2 ml-4 brightness-100 absolute bottom-0 left-30 z-50'),
   (5,'scambio_vestiti.png','vestiti','absolute bottom-1 left-2/3 transform -translate-x-1/2 -translate-y-20 md:h-40 z-40'),
   (5,'persona_spesa.png','spesa','h-32 md:h-46 mb-4 mr-4 brightness-100 absolute bottom-0 right-40 z-40'),
   (5,'oggetti_reciclare.png','spesa','h-32 md:h-46 mb-4 mr-4 brightness-100 absolute bottom-0 left-80 z-40');

