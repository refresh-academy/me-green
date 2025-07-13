import { Link } from "react-router";
import Usuario from "./Usuario.jsx";
const Home = () => {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-600 mb-4">
        Quanto sei{" "}
        <span className="text-green-600 text-5xl md:text-7xl">green?</span>
      </h1>
      <p className="mb-1">Scopri il tuo impatto ambientale in pochi minuti</p>

      <img
        src="Go Green.png"
        alt="Albero centrale"
        className="h-40 md:h-64 my-6 mx-auto"
      />
      <div>
        <Link
          to="/usuario"
          className="relative z-50 flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          Inizia il quiz
        </Link>
      </div>
    </>
  );
};
export default Home;
