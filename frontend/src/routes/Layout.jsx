import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-sky-300 to-green-100 flex flex-col items-center justify-center text-center font-sans text-gray-800">
     
      {/* Link "Chi siamo?" */}
      <Link className="absolute left-12 top-10" to="/usuario">
        Chi siamo?
      </Link>

      {/* Outlet per mostrare le pagine */}
      <Outlet />

      {/* Albero sinistra */}
      <img
        src="Go Green - Wavy Tree.png"
        alt="Albero basso sinistra"
        className="h-32 md:h-40 mb-2 ml-4 opacity-60 absolute bottom-0 left-0 z-0"
      />

      {/* Albero destra */}
      <div className="absolute bottom-0 right-0 z-50">
        <img
          src="Go Green - Forest.png"
          alt="Albero basso destra"
          className="h-32 md:h-40 mb-0 ml-4 opacity-60"
        />
      </div>

      {/* Sfondo verde chiaro trasparente */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-green-300 to-transparent z-0 pointer-events-none"></div>

      {/* Terra */}
      <div className="bg-[url('terra.svg')] w-full h-20 absolute bottom-0 bg-cover z-25 pointer-events-none"></div>
    </div>
  );
};

export default Layout;
