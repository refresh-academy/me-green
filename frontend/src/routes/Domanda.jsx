import { Link } from "react-router";
import { useState, useEffect } from 'react';

const Domanda = ({sezioniDaFare}) => {

  console.log("Dom:",sezioniDaFare)
  const CardDomanda =({id, corpo, tipo}) => {

    return (
<>
</>
    )
  };

  const [domande, setDomande] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/questionario/1/sezione/1/domande')
      .then(res => res.json())
      .then(data => setDomande(data))
      .catch(err => console.log("Errore: ", err))
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-semibold ml-20 mt-10'>Domande</h1>
      {domande.map(domanda => <CardDomanda
        key={domanda.id_domanda}
        id={domanda.id_domanda}
        corpo={domanda.corpo}
        tipo={domanda.tipo}

        />)}
    </div>
  )
}

export default Domanda