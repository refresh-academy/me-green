import { Link } from "react-router";

const Usuario = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-24">
      <h2 className="text-3xl font-bold text-green-700">Dicci qualcosa di te</h2>
      <p className="w-96">
        Abbiamo pensato di chiederti come vuoi essere chiamato per personalizzare il tuo sondaggio e il 
        report che riceverai alla fine del quiz.
      </p>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Nome"
          className="w-112 my-6 p-3 text-center rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {/* <input
          type="email"
          placeholder="Email"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Nome utente"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        /> */}

          <p className="mb-8">
            Conserveremo i tuoi risultati, per le nostre statistiche e per mostrare il tuo profilo green. 
          </p>
        <Link
          to="/sezioni"
          className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 text-center"
        >
          Continua
        </Link>
      </form>
    </div>
  );
};

export default Usuario;
