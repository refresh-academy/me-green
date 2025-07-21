import { useState } from "react";
import ButtonAltraDomanda from "../components/ButtonAltraDomanda";

// Componente principale per la sezione "Consumi e Rifiuti"
const ConsumiRifiuti = ({ changeTheme }) => {
  changeTheme("from-green-100 to-green-200");
  const [rispostaSelezionata, setRispostaSelezionata] = useState(""); // Stato per tenere traccia della risposta selezionata dall'utente
  const [domandaCorrente, setDomandaCorrente] = useState(0); // Stato per sapere a quale domanda siamo (serve quando aggiungeremo più domande)
  //  Elenco delle domande: per ora solo la prima, tipo radio button

  const domande = {
    titolo: "Consumi e rifiuti",
    immagini: ["persona_bidone.png","persona_altra.png"],
    domande: [
    {
      tipo: "radio",
      testo:
        "Quanti vestiti nuovi acquisti al mese (per te o per la tua famiglia)?",
      immagini: [],
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
    // { altra domanda},
  ]
};

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
      {/* <div className="fixed inset-0 -z-5 bg-gradient-to-b from-green-100 to-green-300" /> */}

      {/* Contenuto centrato */}
      <div className="min-h-screen flex flex-col items-center justify-start pt-4 px-4">
        <div className="max-w-xl w-full text-center px-6 py-4"></div>
      {document.megreen.Titolo(domande.titolo)}
      <img
        src={domande.immagini[0]}
        alt="consumi"
        className="h-32 md:h-80 mb-2 ml-4 saturate-50 brightness-150
                    absolute bottom-0 left-40 z-50"
      />
   <h2 className="text-xl font-semibold text-gray-700 mb-6">
          {domande.domande[domandaCorrente].testo}
        </h2>

        <div className="flex-col flex justify-start space-y-3 mb-6">
          {domande.domande[domandaCorrente].opzioni.map((opzione, index) => (
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
              domande.domande[domandaCorrente].opzioni.find(
                (opzione) => opzione.testo === rispostaSelezionata
              ).commento
            }
          </p>
        )}

        {/* Bottoni Avanti e Indietro
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
        </div> */}
      </div>
      <ButtonAltraDomanda target="/consumi" verso="indietro" titolo="Sezione Consumi" />
      <ButtonAltraDomanda target="/" verso="avanti" titolo="Sezione Consumi" />
    </>
  );
};

export default ConsumiRifiuti;
