-- Cancelliamo le risposte alle domande della sezione consumi
DELETE FROM risposta
WHERE domanda_id IN ( SELECT id_domanda FROM domanda WHERE sezione_id=5);

-- Cancelliamo le domande della sezione consumi
DELETE FROM domanda WHERE sezione_id=5;

-- Cancelliamo le immagini della sezione
DELETE FROM immagine_sezione WHERE sezione_id=5;
