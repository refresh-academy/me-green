import * as React from 'react';
import { Link } from "react-router";
import { useState } from 'react';

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const Sezioni = () => {
  const [checkedCasa, setCheckedCasa] = React.useState(false);
  const [checkedTrasporti, setCheckedTrasporti] = React.useState(false);
  const [checkedViaggi, setCheckedViaggi] = React.useState(false);
  const [checkedAlimentazione, setCheckedAlimentazione] = React.useState(false);
  const [checkedConsumi, setCheckedConsumi] = React.useState(false);
  const [checkedTutti, setCheckedTutti] = React.useState(false);
  
  const handleChangeCasa = () => {
    setCheckedCasa(!checkedCasa);
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
  const handleChangeTutti = () => {
    setCheckedTutti(!checkedTutti);
    setCheckedCasa(!checkedTutti);
    setCheckedTrasporti(!checkedTutti);
    setCheckedViaggi(!checkedTutti);
    setCheckedAlimentazione(!checkedTutti);
    setCheckedConsumi(!checkedTutti);
  };
  return (
    <>
      <h1>Su che cosa vuoi fare il questionario?</h1>
      <div className=" flex-col">
        <div className=" flex">
          <Checkbox
          className="controllo"
            label="Tutti"
            value={checkedTutti}
            onChange={handleChangeTutti} />
        </div>
        <div className=" flex">
          <Checkbox
          className="controllo"
            label="Casa"
            name="Casa"
            value={checkedCasa}
            onChange={handleChangeCasa} />
        </div>
        <div className=" flex">
          <Checkbox
          className="controllo"
            label="Trasporti"
            value={checkedTrasporti}
            onChange={handleChangeTrasporti} />
        </div>
        <div className=" flex">
          <Checkbox
          className="controllo"
            label="Viaggi"
            value={checkedViaggi}
            onChange={handleChangeViaggi} />
        </div>
        <div className=" flex">
          <Checkbox
          className="controllo"
            label="Alimentazione"
            value={checkedAlimentazione}
            onChange={handleChangeAlimentazione} />
        </div>
        <div className=" flex">
          <Checkbox
          className="controllo"
            label="Consumi"
            value={checkedConsumi}
            onChange={handleChangeConsumi} />
        </div>
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