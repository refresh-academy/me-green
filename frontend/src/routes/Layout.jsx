import { Link, Outlet } from "react-router";
import AvatarDisplay from "../components/AvatarDisplay";

const Layout = ({iconAvatar, utente, sfondo="green"}) => {
  const cssSfondo = `min-h-screen w-screen overflow-hidden bg-gradient-to-b ${sfondo} flex flex-col items-center justify-center text-center font-sans text-gray-800`;
  return (
    <div className={cssSfondo}>
     
      {/* Link "Chi siamo?" */}
      <Link className="absolute left-12 top-10" to="/Chisiamo">
        Chi siamo?
      </Link>
      <AvatarDisplay iconAvatar={iconAvatar} utente={utente} className="absolute right-12 top-10" />
      
      {/* Outlet per mostrare le pagine */}
      <Outlet />

        {/* Albero sinistra */}
        <img
          src="Go Green - Wavy Tree.png"
          alt="Albero basso sinistra"
          className="h-32 md:h-40 mb-2 ml-4 saturate-50 brightness-150
                    absolute bottom-0 left-0 z-25"
        />

        {/* Albero destra */}
          <img
            src="Go Green - Forest.png"
            alt="Albero basso destra"
            className="h-32 mb-0 ml-4 saturate-50 brightness-150 
                      absolute bottom-0 right-0 z-50"
          />



        {/* Terra */}
        <div 
          className="bg-[url('terra.svg')] w-full md:h-40 h-20
                    absolute bottom-0 bg-cover z-0 
                    pointer-events-none">
        </div>
            {/* Sfondo verde chiaro trasparente */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 
                   bg-gradient-to-t from-green-300 
                   to-transparent z-30 pointer-events-none">
      </div>
    </div>
  );
};

export default Layout;
