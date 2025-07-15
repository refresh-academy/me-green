import * as React from 'react';
import { Link } from "react-router";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const Sezioni = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <h1>Su che cosa vuoi fare il questionario?</h1>
      <div className=" flex-col">
        <div className=" flex">
          <Checkbox
            label="Casa"
            value={checked}
            onChange={handleChange} />
        </div>
        <div className=" flex">
          <Checkbox
            label="Trasporti"
            value={checked}
            onChange={handleChange} />
        </div>
        <div className=" flex">
          <Checkbox
            label="Viaggi"
            value={checked}
            onChange={handleChange} />
        </div>
        <div className=" flex">
          <Checkbox
            label="Alimentazioni"
            value={checked}
            onChange={handleChange} />
        </div>
        <div className=" flex">
          <Checkbox
            label="Consumi/"
            value={checked}
            onChange={handleChange} />
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