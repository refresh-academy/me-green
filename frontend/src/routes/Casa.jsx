import { useState } from "react";
import ButtonAltraDomanda from "../components/ButtonAltraDomanda";

// Componente principale per la sezione "Casa ed Energia"
const CasaEnergia = ({ changeTheme }) => {
  changeTheme("from-yellow-100 to-yellow-200");

  const [rispostaSelezionata, setRispostaSelezionata] = useState(0); // Stato per tenere traccia della risposta selezionata dall'utente
  const [domandaCorrente, setDomandaCorrente] = useState(0); // Stato per sapere a quale domanda siamo (serve quando aggiungeremo più domande)
  //  Elenco delle domande: per ora solo la prima, tipo radio button

  const domande = {
    titolo: "Casa ed Energia",
    immagini: ["casa_panelli.png", "edificio_led.png", "turbine_casa.png"],
    domande: [
      {
        tipo: "radio",
        testo: "Quanto è grande la tua casa (in metri quadrati)?",
        immagini: [],
        opzioni: [
          {
            testo: "Meno di 50 m²",
            punteggio: 5,
            commento:
              "Ottima scelta! Una casa più piccola consuma meno energia per scaldarsi e raffreddarsi.",
          },
          {
            testo: "Tra 50 e 80 m²",
            punteggio: 4,
            commento:
              "Bravo! Spazi contenuti aiutano a ridurre i consumi energetici.",
          },
          {
            testo: "Tra 81 e 120 m²",
            punteggio: 3,
            commento: "Attenzione: cerca di ridurre un po’.",
          },
          {
            testo: "Tra 121 e 150 m²",
            punteggio: 2,
            commento: "Consumi alti: valuta di acquistare meno.",
          },
          {
            testo: "Più di 200 mq",
            punteggio: 1,
            commento: "La moda veloce inquina: cerca alternative.",
          },
        ],
      },
    ],
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
      {/* Sfondo giallo solo per questa pagina */}
      {/* <div className="fixed inset-0 -z-5 bg-gradient-to-b from-green-100 to-green-300" /> */}

      {/* Contenuto centrato */}

      <h2 className="text-3xl font-bold text-yellow-800 text-center mt-24 mb-4">
        {domande.titolo}
      </h2>

      <div className="min-h-screen flex flex-col items-center justify-start pt-2 px-4">
        <div className="max-w-xl w-full text-center px-6 py-4"></div>

        <img
          src={domande.immagini[0]}
          alt="casa"
          className="h-44 md:h-58 mb-2 ml-4 brightness-100 absolute bottom-0 right-40 z-50"
        />

        <img
          src={domande.immagini[1]}
          alt="edificio"
          className="h-42 md:h-60 mb-6 mr-4 brightness-100 absolute bottom-0 left-50 z-40"
        />

        <img
          src={domande.immagini[2]}
          alt="turbine"
          className="absolute bottom-0 left-7/8 transform -translate-x-1/2 -translate-y-20 md:h-46 z-40"
        />

        <div className="flex-col flex justify-start space-y-3 mb-6">
          <label
            htmlFor={`domanda-${domandaCorrente}`}
            className="flex items-center justify-start gap-2 text-lg"
          >
            {domande.domande[0].testo}
          </label>
          <input
            type="range"
            name={`domanda-${domandaCorrente}`}
            value={rispostaSelezionata}
            min="0"
            max="4"
            step="1"
            onChange={(e) => {
              console.log(e.target.value);
              setRispostaSelezionata(e.target.value);
            }}
            className="accent-yellow-600 w-full h-5"
          />
        </div>

        {/*

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
                className="accent-yellow-600 w-5 h-5"
              />
              {opzione.testo}
            </label>
          ))}
        </div>
*/}
        <p className="mt-4 text-yellow-700 font-semibold">
          {domande.domande[domandaCorrente].opzioni[rispostaSelezionata].testo}
        </p>
      </div>
      <ButtonAltraDomanda
        target="/consumi"
        verso="indietro"
        titolo="Sezione Consumi"
      />
      <ButtonAltraDomanda target="/" verso="avanti" titolo="Sezione Consumi" />
    </>
  );
};

export default CasaEnergia;
