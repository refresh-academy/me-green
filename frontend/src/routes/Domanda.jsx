import { Link } from "react-router";
import { useState, useEffect } from 'react';

const Domanda = ({ sezioniDaFare }) => {

  console.log("Dom:", sezioniDaFare)

  const CardDomandaSlider = ({ corpo, tipo }) => {
    return (
      <>
        <h1>{corpo}</h1>
        <p>{tipo}</p>
      </>
    )
  };

   const CardDomandaRadio = ({ corpo, tipo }) => {
    return (
      <>
        <h1>{corpo}</h1>
        <p>{tipo}</p>
      </>
    )
  };

  const [rispostaSelezionata, setRispostaSelezionata] = useState(""); // Stato per tenere traccia della risposta selezionata dall'utente
  const [domandaCorrente, setDomandaCorrente] = useState({ sezione: 0, domanda: 0 });
  const [domande, setDomande] = useState([]);
  const [domandaDaMostrare, setDomandaDaMostrare] = useState(undefined);

  const searchParams = new URLSearchParams();
  // searchParams.append("questionario", 1);
  sezioniDaFare.forEach(s => searchParams.append("sezione", s));
  const url = `http://localhost:3000/api/questionario/1/inizio?${searchParams.toString()}`;
  console.log("url", url);
  useEffect(() => {
    console.log("useEffect Domanda");


    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDomande(data);
        setDomandaDaMostrare(data[domandaCorrente.sezione].question[domandaCorrente.domanda])
      })
      .catch(err => console.log("Errore: ", err))
  }, []);
  console.log("domande", domande);

  if (!domandaDaMostrare){
    return <div>
      Nessuna domanda
    </div>
  }

  if (domandaDaMostrare.tipo=="slider"){
      return <CardDomandaSlider
          key={domandaDaMostrare.id_domanda}
          corpo={domandaDaMostrare.corpo}
          tipo={domandaDaMostrare.tipo} />
  }

  return (
         <CardDomandaRadio
          key={domandaDaMostrare.id_domanda}
          corpo={domandaDaMostrare.corpo}
          tipo={domandaDaMostrare.tipo} />
  )
}

export default Domanda