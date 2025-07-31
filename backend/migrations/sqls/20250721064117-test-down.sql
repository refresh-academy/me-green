/* Replace with your SQL commands */
-- AGGIUNGIAMO LA COLONNA ATTIVO PER IL QUESTIONARIO
-- Questa colonna indica se il questionario è attivo o meno
-- Se il valore è 1, il questionario è attivo; se è 0, non lo è.
-- All'inizio il questionario non sarà attivo e andrà attivato manualmente
-- dopo la creazione di almeno una sezione. (ci serve per provare nuovi
-- questionari senza renderli subito visibili agli utenti)

ALTER TABLE questionario DROP Attivo;
