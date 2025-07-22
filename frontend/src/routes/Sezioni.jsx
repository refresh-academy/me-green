import { Link } from "react-router";
import { useState, useEffect } from 'react';

/*
id_sezione : 1
numero_domande : 7
titolo : "Casa"
*/
const Checkbox = ({ label, count, isChecked, onChange }) => {
  return (
    <label className="flex py-2 gap-2 items-center">
      <input className="sezioneSelector" type="checkbox" checked={isChecked} onChange={onChange} />
      {label} <span className="text-gray-500 text-xs">({count} domand{count == 1 ? 'a' : 'e'})</span>
    </label>
  );
};

const SelezioneSezioniDaFare = (sezioni) => {
  console.log(sezioni.filter(s => s.isChecked).map(s => s.id_sezione))

  return sezioni.filter(s => s.isChecked).map(s => s.id_sezione)
}


const Sezioni = ({sezioniDaFare}) => {
  const [sezioni, setSezioni] = useState([]);
  const [checkTotale, setTotale] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/questionario/1/sezioni")
      .then(res => res.json())
      .then(data => {
        const sez = data.map((s) => { return { ...s, isChecked: false } });
        setSezioni(sez)
      })
      .catch(err => console.log("Sezioni Presenti error:", err));
  }, []);

  const checkTutti = () => {
    const nuovoCheckTotale = !checkTotale;
    const sezioniAggiornate = sezioni.map(s => {
      return {
        ...s,
        isChecked: nuovoCheckTotale
      }
    });
    setTotale(nuovoCheckTotale);
    setSezioni(sezioniAggiornate);
  }

  const checkSezione = (id_sezione) => {
    const sezioniAggiornate = sezioni.map(s => {
      if (s.id_sezione == id_sezione) {
        return {
          ...s,
          isChecked: !s.isChecked
        }
      } else {
        return s
      }
    });
    setSezioni(sezioniAggiornate);
  }

  console.log("NUOVO RENDER - Sez", sezioni)
  console.log("NUOVO RENDER - Tot", checkTotale)

  return (
    <>
      <h1>Su che cosa vuoi fare il questionario?</h1>
      <div className=" flex-col py-8">
        <div className=" flex">
          <Checkbox
            className="controllo"
            label="Tutto il questionatio"
            count={(sezioni.map(s => s.numero_domande)).reduce((a, b) => a + b, 0)}
            checked={checkTotale}
            onChange={checkTutti}
          />
        </div>
        {sezioni.map((s) => <Checkbox
          key={"sezioni-" + s.id_sezione}
          className="controllo"
          label={s.titolo}
          name="sezione"
          count={s.numero_domande}
          isChecked={s.isChecked}
          onChange={() => checkSezione(s.id_sezione)} />)
        }
      </div>

      <Link
        to="/domande"
        className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 text-center"
        onClick={() => sezioniDaFare(SelezioneSezioniDaFare(sezioni))}
      >
        Continua
      </Link>
    </>)
}
export default Sezioni