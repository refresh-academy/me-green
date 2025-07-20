import { Link } from "react-router";
import { useState, useEffect } from 'react';

/*
id_sezione : 1
numero_domande : 7
titolo : "Casa"
*/
const Checkbox = ({ label, count, value, isChecked, onChange }) => {
  return (
    <label className="flex py-2 gap-2 items-center">
      <input className="sezioneSelector" type="checkbox" value={value} checked={isChecked} onChange={onChange} />
      {label} <span className="text-gray-500 text-xs">({count} domand{count==1?'a':'e'})</span>
    </label>
  );
};

const Sezioni = () => {
  const [sezioni, setSezioni] = useState ([]);
  useEffect(() => {
      fetch("http://localhost:3000/api/questionario/1/sezioni")
         .then( res => res.json())
         .then(data => {
              const sez= data.map((s) => { return {...s, isChecked:false}});
              setSezioni(sez)
          })
         .catch(err => console.log("Sezioni Presenti error:", err));
  },[]);
  
  const [checkedCasa, setCheckedCasa] = useState(false);
  const [checkedTrasporti, setCheckedTrasporti] = useState(false);
  const [checkedViaggi, setCheckedViaggi] = useState(false);
  const [checkedAlimentazione, setCheckedAlimentazione] = useState(false);
  const [checkedConsumi, setCheckedConsumi] = useState(false);
  const [checkedTutti, setCheckedTutti] = useState(false);
  
  const handleChangeSezione = (e) => {
    const sez = sezioni.map(s => s.id_sezione == e.target.value?{...s, isChecked:!s.isChecked}:s)
    setSezioni(sez);
    console.log(JSON.stringify(sez));
  };
  const handleChangeTrasporti = () => {
    setCheckedTrasporti(!checkedTrasporti);
  };
  const handleChangeViaggi = () => {
    setCheckedViaggi(!checkedViaggi);
  };
  const handleChangeAlimentazione = () => {
    setCheckedAlimentazione(!checkedAlimentazione);
  };
  const handleChangeConsumi = () => {
    setCheckedConsumi(!checkedConsumi);
  };
  const handleChangeTutti = (ev) => {
    console.log(ev.target);
    console.log(document.querySelectorAll("input.controllo[checked=true]"))
    document.querySelectorAll("input.sezioneSelector").forEach(i => !ev.target.checked);
  };

  return (
    <>
      <h1>Su che cosa vuoi fare il questionario?</h1>
      <div className=" flex-col py-8">
        <div className=" flex">
          <Checkbox
          className="controllo"
            label="Tutto il questionatio"
            value={checkedTutti}
            count={(sezioni.map(s => s.numero_domande)).reduce((a,b)=>a+b, 0)}
            onChange={handleChangeTutti}
             />
        </div>
        { sezioni.map((s) => <Checkbox
            key={"sezioni-" + s.numero_domande}
            className="controllo"
            label={s.titolo}
            name="sezione"
            value={s.id_sezione}
            count={s.numero_domande}
            checked={s.isChecked}
            onChange={handleChangeSezione} />)
        }
      </div>
      <Link
          to="/domande"
          className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 text-center"
        >
          Continua
        </Link>
    </>)
}
export default Sezioni