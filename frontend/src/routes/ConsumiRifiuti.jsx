import { useState } from "react";

// Componente principale per la sezione "Consumi e Rifiuti"
const ConsumiRifiuti = () => {
  const [rispostaSelezionata, setRispostaSelezionata] = useState(""); // Stato per tenere traccia della risposta selezionata dall'utente
  const [domandaCorrente, setDomandaCorrente] = useState(0); // Stato per sapere a quale domanda siamo (serve quando aggiungeremo più domande)
  //  Elenco delle domande: per ora solo la prima, tipo radio button

  const domande = [
    {
      tipo: "radio",
      testo:
        "Quanti vestiti nuovi acquisti al mese (per te o per la tua famiglia)?",
      opzioni: [
        { testo: "Nessuno", punteggio: 5, commento: "Ottima scelta!" },
        {
          testo: "1-2 capi",
          punteggio: 4,
          commento: "Bravo! Aiuti a ridurre l’impatto ambientale.",
        },
        {
          testo: "3-4 capi",
          punteggio: 3,
          commento: "Attenzione: cerca di ridurre un po’.",
        },
        {
          testo: "5-6 capi",
          punteggio: 2,
          commento: "Consumi alti: valuta di acquistare meno.",
        },
        {
          testo: "Più di 6 capi",
          punteggio: 1,
          commento: "La moda veloce inquina: cerca alternative.",
        },
      ],
    },
  ];

  const vaiAvanti = () => {
    if (domandaCorrente < domande.length - 1) {
      setDomandaCorrente(domandaCorrente + 1);
      setRispostaSelezionata("");
    }
  };

  const vaiIndietro = () => {
    if (domandaCorrente > 0) {
      setDomandaCorrente(domandaCorrente - 1);
      setRispostaSelezionata("");
    }
  };

  return (
    <>
      {/* Sfondo verde solo per questa pagina */}
      <div className="fixed inset-0 -z-5 bg-gradient-to-b from-green-100 to-green-200" />

      {/* Contenuto centrato */}
      <div className="min-h-screen flex-col flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center px-6 py-10"></div>
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          Consumi e Rifiuti
        </h1>

        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          {domande[domandaCorrente].testo}
        </h2>

        <div className="flex-col flex justify-start space-y-3 mb-6">
          {domande[domandaCorrente].opzioni.map((opzione, index) => (
            <label
              key={index}
              className="flex items-center justify-start gap-2 text-lg"
            >
              <input
                type="radio"
                name={`domanda-${domandaCorrente}`}
                value={opzione.testo}
                checked={rispostaSelezionata === opzione.testo}
                onChange={() => setRispostaSelezionata(opzione.testo)}
                className="accent-green-600 w-5 h-5"
              />
              {opzione.testo}
            </label>
          ))}
        </div>

        {rispostaSelezionata && (
          <p className="mt-4 text-green-700 font-semibold">
            {
              domande[domandaCorrente].opzioni.find(
                (opzione) => opzione.testo === rispostaSelezionata
              ).commento
            }
          </p>
        )}

        {/* Bottoni Avanti e Indietro*/}
        <div className="flex justify-between mt-8 w-40 mx-auto">
          <button
            onClick={vaiIndietro}
            disabled={domandaCorrente === 0}
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 text-xl font-bold
        ${
          domandaCorrente === 0
            ? "border-gray-300 text-gray-300 cursor-not-allowed"
            : "border-green-600 text-green-600 hover:bg-green-100 transition"
        }`}
            aria-label="Indietro"
          >
            ←
          </button>

          <button
            onClick={vaiAvanti}
            disabled={domandaCorrente === domande.length - 1}
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 text-xl font-bold
    ${
      domandaCorrente === domande.length - 1
        ? "border-gray-300 text-gray-300 cursor-not-allowed"
        : "border-green-600 text-green-600 hover:bg-green-100 transition"
    }`}
            aria-label="Avanti"
          >
            →
          </button>
        </div>
      </div>
    </>
  );
};

export default ConsumiRifiuti;
