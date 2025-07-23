import ButtonAltraDomanda from "./ButtonAltraDomanda";

const RisposteGroup = ({risposte, aggiornaPunteggio}) => {
  
  return (
    <div className="flex-col flex justify-start space-y-3 mb-6">
          {risposte.opzioni.map((opzione, index) => (
            const scegli = () => {aggiornaPunteggio(``)}
              <RispostaRadio valore={} isSelezionata={} risposta={} aggiornaPunteggio={scegli}/>
            
    </div>
  );
}

const RispostaRadio = ({risposta, index, aggiornaPunteggio}) => {
  return (
      <label 
        className="flex items-center justify-start gap-2 text-lg" 
        key={["r", risposta.id_risposta, index].join("-")} >
        <input
          type="radio"
          name={`domanda-${index}`}
          value={index}
          checked={rispostaSelezionata === index}
          onChange={() => aggiornaPunteggio(index)}
          className="accent-green-600 w-5 h-5"
        /><span>{risposta.corpo}</span>
      </label>
  );
}

const Illustrazione = ({ immagine }) => {
  const classi = immagine.classi + " pointe-events-none"
  return (
    <img src={immagine.URL} alt={immagine.descrizione} className={classi}/>
  );
};

const CardDomandaRadio = ({ sezione, domanda, avanti, indietro }) => {
    return (
      <>
        <h1>{domanda.corpo}</h1>
        <p>{domanda.tipo}</p>
      
      {sezione.immagini.map(immagine => <Illustrazione risposta={immagine} />)}

      <RisposteGroup risposte={domanda.risposte} />

      <ButtonAltraDomanda verso="indietro"titolo="Sezione Consumi" target={indietro}/>
      <ButtonAltraDomanda verso="avanti" titolo="Sezione Consumi" target={avanti}/>
      </>
    )
  };
  export default CardDomandaRadio