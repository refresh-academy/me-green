import { Link } from "react-router";
import ButtonAltraDomanda from "../components/ButtonAltraDomanda";

const Usuario = ({changeAvatar, changeUtente, utente}) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 max-w-md w-full text-center z-50">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-green-800">
          Facciamo conoscenza!
        </h1>
        <p className="text-gray-600 mb-6">
          Dicci come vuoi essere chiamato e iniziamo il tuo percorso green.
        </p>

        <form className="w-full max-w-sm space-y-4 mx-auto">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="w-full border gray-300 rounded px-4 py-2"
            value={utente}
            onChange={(e) => changeUtente(e.target.value)}
            required
          />

          <p className="text-gray-600 mb-6">
            Scegli l’avatar che ti rappresenta di più!
          </p>
 
          <div className="flex justify-center items-center gap-4 mt-4 h-20">
            {/* Avatar predefinito */}      
            <input type="radio" name="avatar" className="hidden" value={0} readOnly checked/>
            {/* Avatar personalizzati */}
            <label className="size-12 hover:size-16 cursor-pointer has-[:checked]:border-4 has-[:checked]:border-red">
              <img className="inline-block w-full h-full rounded-full ring-2 ring-white bg-green-200" src="avatar-senior.png" alt="Avatar senior"/>
            <input type="radio" name="avatar" className="hidden" value={1} onChange={(e)=>changeAvatar(e.target.value)} /></label>
            <label className="size-12 hover:size-16 cursor-pointer has-[:checked]:border-4 has-[:checked]:border-red">
              <img className="inline-block w-full h-full rounded-full ring-2 ring-white bg-green-400 cursor-pointer" src="avatar-adulta.png" alt="Avatar adulta"/>
           <input type="radio" name="avatar" className="hidden" value={2} onChange={(e)=>changeAvatar(e.target.value)}/></label>
           <label className="size-12 hover:size-16 cursor-pointer has-[:checked]:border-4 has-[:checked]:border-red">
              <img className="inline-block w-full h-full rounded-full ring-2 ring-white bg-green-600 cursor-pointer" src="avatar-giovane.png" alt="Avatar giovane"/>
           <input type="radio" name="avatar" className="hidden" value={3} onChange={(e)=>changeAvatar(e.target.value)}/></label>
           <label className="size-12 hover:size-16 cursor-pointer has-[:checked]:border-4 has-[:checked]:border-red">
              <img className="inline-block w-full h-full rounded-full ring-2 ring-white bg-green-800 cursor-pointer" src="avatar-neutral.png" alt="Avatar neutral"/>
          <input type="radio" name="avatar" className="hidden" value={4} onChange={(e)=>changeAvatar(e.target.value)}/></label>
          <label className="size-12 hover:size-16 cursor-pointer has-[:checked]:border-4 has-[:checked]:border-red">
              <img className="inline-block w-full h-full rounded-full ring-2 ring-white bg-green-900 cursor-pointer" src="avatar-eco.png" alt="Avatar eco"/>
          <input type="radio" name="avatar" className="hidden" value={5} onChange={(e)=>changeAvatar(e.target.value)} /></label>
          </div>

           <Link to="/sezioni"
            className="block mx-auto bg-green-600 text-white px-6 py-3 mt-10 rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 
                       focus:ring-offset-2 transition duration-200 ease-in-out">Continua</Link>
        </form>
      </div>
    </div>
  );
};

export default Usuario;