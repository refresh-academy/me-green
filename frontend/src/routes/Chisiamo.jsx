import { Link } from "react-router";

const Chisiamo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-24">
      <h2 className="text-3xl font-bold text-green-700">Tu non sai chi siamo noi!</h2>
      <p className="w-96">
        Questo questionario è pensato per aiutarti a capire il tuo impatto ambientale
        e come migliorarlo. Lo abbiamo assemblato in modo da essere semplice e veloce,
        ma anche informativo e utile per il tuo percorso verso una vita più sostenibile.

        Siamo un gruppo di 4 studenti che hanno deciso di creare questo progetto per
        superare un test sperando che tu possa superare il tuo.
      </p>
      
        <Link
          to="/usuario"
          className="bg-green-600 text-white px-6 py-8 rounded-full shadow hover:bg-green-700 text-center"
        >
          Continua
        </Link>
    </div>
  );
};

export default Chisiamo;
