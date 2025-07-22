import { Link } from "react-router";
import { useState, useEffect } from 'react';
import CardDomandaRadio from "../components/CardDomandaRadio";
import CardDomandaSlider from "../components/CardDomandaSlider";

const Domanda = ({ sezioniDaFare }) => {

  const vaiAvanti = () => {
    console.log("avanti!!!",domandaCorrente );
    if (domandaCorrente.domanda < domande[domandaCorrente.sezione].question.length-1) {
      console.log("avanti!!!", );
      let d = domandaCorrente;
      d.domanda+=1;
      setDomandaCorrente(d);
      setRispostaSelezionata("");
      setDomandaDaMostrare(domande[d.sezione].question[d.domanda])
      return 
    }
    if (domandaCorrente.sezione < domande.length-1) {
      let d = domandaCorrente;
      d.sezione+=1;
      d.domanda=0;
      setDomandaCorrente(d);
      setRispostaSelezionata("");
      setDomandaDaMostrare(domande[d.sezione].question[d.domanda])
      return 
    } 
  };

  const vaiIndietro = () => {
    if (domandaCorrente.sezione > 0) {
      setDomandaCorrente(domandaCorrente - 1);
      setRispostaSelezionata("");
      setDomandaDaMostrare(data[domandaCorrente.sezione].question[domandaCorrente.domanda])
    }
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
          tipo={domandaDaMostrare.tipo} 
          avanti={vaiAvanti}
          indietro={vaiIndietro}/>

  }

  return (
         <CardDomandaRadio
          key={domandaDaMostrare.id_domanda}
          corpo={domandaDaMostrare.corpo}
          tipo={domandaDaMostrare.tipo}
          avanti={vaiAvanti}
          indietro={vaiIndietro} />
  )
}

export default Domanda