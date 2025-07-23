import ButtonAltraDomanda from "./ButtonAltraDomanda";

const RisposteGroup = ({risposte, id_domanda}) => {
  
  return (
    <div className="flex-col flex justify-start space-y-3 mb-6">
          {risposte.map((risposta, indice) =>
              <RispostaRadio key={indice} indice={indice} valore={risposta.valore_CO2}  risposta={risposta.corpo} id_domanda={id_domanda}/>
            )}
    </div>
  );
}

const RispostaRadio = ({indice, valore,  risposta, id_domanda}) => {
  const onRispostaChanged = ()=> {
    let nuovoPunteggio=punteggi;
    console.log("ciaooo");
    for (domanda of nuovoPunteggio){
      if (domanda.id == id_domanda){
        domanda.risposta=valore
      }
    }
    console.log(nuovoPunteggio);
    setPunteggio(nuovoPunteggio);
  }
  return (
      <label 
        className="flex items-center justify-start gap-2 text-lg" 
        // key={["r", risposta.id_risposta, indice].join("-")} 
        >
        <input
          type="radio"
          name={id_domanda}
          value={valore}
          
          onChange={()=>onRispostaChanged()}
          className="accent-green-600 w-5 h-5"
        /><span>{risposta}</span>
      </label>
  );
}

const Illustrazione = ({ immagine }) => {
  //const classi = immagine.classi + " pointer-events-none"
  console.log("classi",immagine)
  return (

    <img src={immagine.URL} alt={immagine.descrizione} className={immagine.classi}/>
  );
};

const CardDomandaRadio = ({ sezione, domanda, avanti, indietro, score}) => {
    return (
      <>
        <h1>{domanda.corpo}</h1>
      
      {sezione.immagini.map((immagine) => <Illustrazione immagine={immagine} />)}

      <RisposteGroup risposte={domanda.risposte} id_domanda={domanda.id_domanda} />

      <ButtonAltraDomanda verso="indietro"titolo="Sezione Consumi" target={indietro}/>
      <ButtonAltraDomanda verso="avanti" titolo="Sezione Consumi" target={avanti}/>
      </>
    )
  };
  export default CardDomandaRadio