const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const dbPath = path.resolve(__dirname, 'data/megreen-survey.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Enable foreign key support
        db.run('PRAGMA foreign_keys = ON;');
    }
});

const dbAll = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

const dbRun = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.run(query, params, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: this.lastID, changes: this.changes });
            }
        });
    });
};

app.get("/api/questionario/:questionario_id/sezioni", async (req, res) => {
    const SQL = `SELECT id_sezione, s.titolo, count() AS numero_domande
    FROM sezione s
    JOIN domanda ON (id_sezione = sezione_id)
    WHERE questionario_id = ?
    GROUP BY sezione_id
    ORDER BY s.ordine`;
    const sezioni =await dbAll(SQL, [req.params.questionario_id] );
    if (sezioni.length===0){
        return res.status(404).json({error: "questionario non trovato"});
    }else{
        res.json(sezioni);
    }
});

app.get("/api/questionario/:questionario_id/sezione/:sezione_id/domande", async (req, res) => {
    const SQL = `SELECT id_domanda, d.corpo, d.tipo
    FROM domanda d
    WHERE sezione_id = ?
    ORDER BY d.ordine`;
    const domande =await dbAll(SQL, [req.params.sezione_id] );
    if (domande.length===0){
        return res.status(404).json({error: "questionario non trovato"});
    }else{
        res.json(domande);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed the database connection.');
        process.exit(0);
    });
});