import { Link } from "react-router";
const Risultati = ({ sezioniDaFare, domande, punteggio, avatar, utente }) => {
  console.log("res p: ",punteggio)
  console.log("res d: ",domande)
  return (
    <>
    <div className="flex gap-4 w-full justify-center w-3/4 p-4">
      <div className="flex flex-col items-center justify-center  grow bg-white/50 rounded-xl min-h-36
      h-fit p-4">
        {/* div statistiche */}
        <p>calculating</p>
      </div>
      <div className="flex flex-col justify-start items-center w-fit grow bg-white/50 rounded-xl min-h-36 h-full p-4">
        {/* div utente */}
          <p>Giacomo</p>
          <p>{(new Date(Date.now())).toLocaleDateString('it-IT')}</p>
      </div>
      </div>
    </>
  );
};
export default Risultati;
