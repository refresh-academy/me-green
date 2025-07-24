
import ButtonAltraDomanda from "./ButtonAltraDomanda";

const RisposteGroup = ({risposte, id_domanda, numeroRisposte, rispostaSelezionata, punteggio, setPunteggio}) => {
  const onSliderMoved = (e)=> {
    const nuovoPunteggio = punteggio.map(domanda =>
      domanda.id == id_domanda
        ? { ...domanda, risposta: e.target.value }
        : domanda
    );
    console.log(nuovoPunteggio);
    setPunteggio(nuovoPunteggio)
  }

  return (
    <div className="flex-col flex justify-start space-y-3 mb-6 w-3/4">
      <div className="flex gap-6 items-center">
        <span className="text-xs">{risposte[0].corpo}</span>
        <input
          type="range"
          name={`domanda-${id_domanda}`}
          value={rispostaSelezionata}
          min="0"
          max={numeroRisposte}
          step="1"
          onChange={onSliderMoved}
          className="accent-green-600 w-full h-20"
        />
        <span className="text-xs">{risposte[numeroRisposte].corpo}</span>
      </div>
          <RispostaSlider 
            key={`rs-${id_domanda}-${rispostaSelezionata}`} 
            corpo={risposte[rispostaSelezionata].corpo} 
            commento={risposte[rispostaSelezionata].commento}
          />
    </div>
  );
}

const RispostaSlider = ({corpo, commento}) => {
  return (
      <div className="flex-col flex justify-start space-y-3 mb-6 rounded-lg">
        <p className="mt-4 text-yellow-700 text-2xl font-semibold">{corpo}</p>
        <p className="mt-4 text-yellow-700 text-md font-semibold">{commento}</p>
      </div>
  );
}

const Illustrazione = ({ immagine }) => {
  return (
    <img src={immagine.URL} alt={immagine.descrizione} className={`${immagine.classi} pointer-events-none`}/>
  );
};

const CardDomandaSlider = ({ sezione, domanda, avanti, indietro, punteggio, setPunteggio}) => {
    const rispostaScelta = punteggio.filter(s => domanda.id_domanda == s.id)[0].risposta

    return (
        <>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">{domanda.corpo}</h2>
      
      {sezione.immagini.map((immagine) => <Illustrazione immagine={immagine} />)}

      <RisposteGroup risposte={domanda.risposte} 
        numeroRisposte={domanda.risposte.length - 1} 
        id_domanda={domanda.id_domanda}  
        rispostaSelezionata={rispostaScelta}
        punteggio={punteggio}
        setPunteggio={setPunteggio}
        />

      <ButtonAltraDomanda verso="indietro"titolo="Sezione Consumi" target={indietro}/>
      <ButtonAltraDomanda verso="avanti" titolo="Sezione Consumi" target={avanti}/>
      </>
    )
  };
  export default CardDomandaSlider