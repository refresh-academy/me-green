const Usuario = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
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
            required
          />

          <p className="text-gray-600 mb-6">
            Scegli l’avatar che ti rappresenta di più!
          </p>

          <div className="flex justify-center gap-4 mt-4">
            {/* Avatar finti */}
            <div className="w-12 h-12 bg-green-200 rounded-full cursor-pointer hover:ring-2 hover:ring-green-500"></div>
            <div className="w-12 h-12 bg-green-300 rounded-full cursor-pointer hover:ring-2 hover:ring-green-500"></div>
            <div className="w-12 h-12 bg-green-400 rounded-full cursor-pointer hover:ring-2 hover:ring-green-500"></div>
            <div className="w-12 h-12 bg-green-500 rounded-full cursor-pointer hover:ring-2 hover:ring-green-500"></div>
            <div className="w-12 h-12 bg-green-600 rounded-full cursor-pointer hover:ring-2 hover:ring-green-500"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usuario;
