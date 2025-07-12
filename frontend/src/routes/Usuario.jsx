import { Link } from "react-router-dom";

const Usuario = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <h2 className="text-3xl font-bold text-green-700">Dicci qualcosa di te</h2>

      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Nome"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Nome utente"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <Link
          to="/sezioni"
          className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 text-center"
        >
          Vai al quiz
        </Link>
      </form>
    </div>
  );
};

export default Usuario;
