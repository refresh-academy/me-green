import { Link } from "react-router";
// import { createContext } from "react";
import { useState, useEffect } from 'react';
import CardDomandaRadio from "../components/CardDomandaRadio";
import CardDomandaSlider from "../components/CardDomandaSlider";

// const Punteggi =createContext("CIAO")


const Domanda = ({ sezioniDaFare , punteggio, setPunteggio, domande, setDomande}) => {

  const vaiAvanti = () => {
    let d = domandaCorrente;
    if (domandaCorrente.domanda < domande[domandaCorrente.sezione].question.length-1) {
      d.domanda+=1;
      setDomandaCorrente(d);
      setRispostaSelezionata("");
      setDomandaDaMostrare(domande[d.sezione].question[d.domanda]);
      setCommentoVisibile("");
      return 
    }
    if (domandaCorrente.sezione < domande.length-1) {
      d.sezione += 1;
      d.domanda = 0;
      setDomandaCorrente(d);
      setRispostaSelezionata("");
      setDomandaDaMostrare(domande[d.sezione].question[d.domanda])
      setCommentoVisibile("");
      return 
    } 
  };

  const vaiIndietro = () => {
    let d = domandaCorrente;
    if (domandaCorrente.domanda > 0) {
      d.domanda -= 1;
      setDomandaCorrente(d);
      setRispostaSelezionata("");
      setDomandaDaMostrare(domande[d.sezione].question[d.domanda])
      setCommentoVisibile("");
      return 
    }
    // Se siamo qui siamo alla prima domanda della sezione corrente.
    // Dobbiamo andare all'ultima domanda della sezione precente
    // se esiste una sezione precedente
    if (domandaCorrente.sezione > 0) {
      // andiamo all'ultima domanda della sezione precendente
      d.sezione -= 1;
      d.domanda = domande[d.sezione].question.length - 1
      setDomandaCorrente(d);
      setRispostaSelezionata("");
      setDomandaDaMostrare(domande[d.sezione].question[d.domanda])
      setCommentoVisibile("");
    }
  };
const lavagnaPunteggi = (domande) => {
	if(!domande){
    return;
  }
  let board = []
	for (let s of domande) {
		for (let d of s.question) {
			board.push({
				sezione: s.id_sezione,
				id: d.id_domanda,
				tipo: d.tipo,
				risposta: d.rispostaScelta
			})
		}
	}
	return board;
}
   

  const [rispostaSelezionata, setRispostaSelezionata] = useState(""); // Stato per tenere traccia della risposta selezionata dall'utente
  const [domandaCorrente, setDomandaCorrente] = useState({ sezione: 0, domanda: 0 });
  const [domandaDaMostrare, setDomandaDaMostrare] = useState(undefined);
  const [commentoVisibile, setCommentoVisibile] = useState("");

  const searchParams = new URLSearchParams();
  // searchParams.append("questionario", 1);
  sezioniDaFare.forEach(s => searchParams.append("sezione", s));
  const url = `http://localhost:3000/api/questionario/1/inizio?${searchParams.toString()}`;
  useEffect(() => {
    console.log("useEffect Domanda");
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDomande(data);
        setPunteggio(lavagnaPunteggi(data));
        setDomandaDaMostrare(data[domandaCorrente.sezione].question[domandaCorrente.domanda]);
      })
      .catch(err => console.log("Errore: ", err))
  }, []);

  if (!domandaDaMostrare){
    return <div>
      <h1 className="text-xl text-center w-full text-amber-800">Loading...</h1>
      { domande.length && domandaCorrente.sezione && domande[domandaCorrente.sezione].immagini.map((immagine) => <img src={immagine.URL} alt={immagine.descrizione} className={immagine.classi}/>) }
    </div>
  }

  if (domandaDaMostrare.tipo=="slider"){
      return (
        <CardDomandaSlider
          key={["q", domandaCorrente.sezione, domandaDaMostrare.id_domanda].join("-")}
          sezione={domande[domandaCorrente.sezione]}
          domanda={domandaDaMostrare}
          avanti={vaiAvanti}
          indietro={vaiIndietro}
          punteggio={punteggio}
          setPunteggio={setPunteggio}
        />
      )
  }

  return (
        <CardDomandaRadio
          key={["q", domandaCorrente.sezione, domandaDaMostrare.id_domanda].join("-")}
          sezione={domande[domandaCorrente.sezione]}
          domanda={domandaDaMostrare}
          avanti={vaiAvanti}
          indietro={vaiIndietro}
          punteggio={punteggio}
          setPunteggio={setPunteggio}
          mostraCommento={setCommentoVisibile}
          commento={commentoVisibile}
        />
  )
}

export default Domanda;