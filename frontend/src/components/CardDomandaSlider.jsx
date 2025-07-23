
import ButtonAltraDomanda from "./ButtonAltraDomanda";

const RisposteGroup = ({risposte, id_domanda, numeroRisposte, rispostaSelezionata, score}) => {
  const onRispostaChanged = (e)=> {
    let nuovoPunteggio=score.punti;
    console.log("ciaooo");
    for (let domanda of nuovoPunteggio){
      if (domanda.id == id_domanda){
        domanda.risposta=e.target.value
      }
    }
    console.log(nuovoPunteggio);
    score.update(nuovoPunteggio);
  }
  return (
    <div className="flex-col flex justify-start space-y-3 mb-6">
      <input
            type="range"
            name={`domanda-${id_domanda}`}
            value={rispostaSelezionata}
            min="0"
            max={numeroRisposte}
            step="1"
            onChange={onRispostaChanged}
            className="accent-green-600 w-150 h-20"
          />
          {risposte.filter((risposta, indice) => 
              indice==rispostaSelezionata
            ).map(risposta => <RispostaSlider corpo={risposta.corpo} commento={risposta.commento}/>)}
    </div>
  );
}

const RispostaSlider = ({corpo, commento}) => {
  
  return (
      <div className="flex-col flex justify-start space-y-3 mb-6 z-50">
          <p className="mt-4 bg-white text-yellow-700 font-semibold">
          {corpo}
        </p>
<p className="mt-4 bg-white text-yellow-700 font-semibold">
          {commento}
        </p>
        </div>
  );
}








const Illustrazione = ({ immagine }) => {
  //const classi = immagine.classi + " pointer-events-none"
  console.log("classi",immagine)
  return (

    <img src={immagine.URL} alt={immagine.descrizione} className={immagine.classi}/>
  );
};

const CardDomandaSlider = ({ sezione, domanda, avanti, indietro, score}) => {
    return (
        <>
        <h1>{domanda.corpo}</h1>
      
      {sezione.immagini.map((immagine) => <Illustrazione immagine={immagine} />)}

      <RisposteGroup risposte={domanda.risposte} numeroRisposte={domanda.risposte.length} id_domanda={domanda.id_domanda}  score={score}/>

      <ButtonAltraDomanda verso="indietro"titolo="Sezione Consumi" target={indietro}/>
      <ButtonAltraDomanda verso="avanti" titolo="Sezione Consumi" target={avanti}/>
      </>
    )
  };
  export default CardDomandaSlider