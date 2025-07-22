-- Creata una tabella per contenere le immagini delle sezioni
-- Nella colonna url ci va l'url dell'immagine
-- Nella colonna descrizione ci va il testo da inserire nell'ALT del nodo img
-- Nella colonna classi ci vanno le classi tailwind per posizionarla al suo posto

CREATE TABLE immagine_sezione (
	id_immagine INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	sessione_id INTEGER,
	URL TEXT NOT NULL,
	descrizione TEXT,
	classi TEXT
);
