import ButtonAltraDomanda from "./ButtonAltraDomanda";

const RisposteGroup = ({risposte, id_domanda, punteggio, setPunteggio, mostraCommento}) => {
  
  return (
    <div className="flex justify-center w-3/4">
      <div className="flex-col flex justify-start space-y-3 mb-6 w-fit">
          {risposte.map((risposta, indice) =>
              <RispostaRadio 
                key={`rr-${id_domanda}-${indice}`} 
                valore={indice}  
                risposta={risposta.corpo} 
                id_domanda={id_domanda}
                punteggio={punteggio}
                setPunteggio={setPunteggio}
                commenta={() => {console.log(risposta.commento); mostraCommento(risposta.commento)}}
              />
            )}
      </div>
    </div>
  );
}

const RispostaRadio = ({valore, risposta, id_domanda, punteggio, setPunteggio, commenta}) => {
    const onRispostaChanged = (e)=> {
    const nuovoPunteggio = punteggio.map(domanda =>
      domanda.id == id_domanda
        ? { ...domanda, risposta: e.target.value }
        : domanda
    );
    commenta();
    setPunteggio(nuovoPunteggio)
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
          
          onChange={onRispostaChanged}
          className="accent-green-600 w-5 h-5"
        /><span>{risposta}</span>
      </label>
  );
}

const Commento = ({ testo }) => {
  return (
      <div className="flex-col flex justify-start space-y-3 mb-6 rounded-lg min-h-4">
        <p className="mt-4 text-yellow-700 text-md font-semibold min-h-4">{testo}</p>
      </div>
  );
}

const Illustrazione = ({ immagine }) => {
  //const classi = immagine.classi + " pointer-events-none"
  return (
    <img src={immagine.URL} alt={immagine.descrizione} className={immagine.classi}/>
  );
};

const CardDomandaRadio = ({ sezione, domanda, avanti, indietro, punteggio, setPunteggio, mostraCommento, commento}) => {
    return (
      <>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">{domanda.corpo}</h2>
      
      {sezione.immagini.map((immagine) => <Illustrazione immagine={immagine} />)}

      <RisposteGroup 
        risposte={domanda.risposte} 
        id_domanda={domanda.id_domanda} 
        punteggio={punteggio} 
        setPunteggio={setPunteggio}
        mostraCommento={mostraCommento}
      />
      <Commento testo={commento} />

      <ButtonAltraDomanda verso="indietro"titolo="Sezione Consumi" target={indietro}/>
      <ButtonAltraDomanda verso="avanti" titolo="Sezione Consumi" target={avanti}/>
      </>
    )
  };
  export default CardDomandaRadio