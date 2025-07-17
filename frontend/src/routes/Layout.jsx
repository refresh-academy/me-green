import { Link, Outlet } from "react-router";

/* 

  React component per mostrare un avatar a partire dal suo indice 
  contenuto nello stato iconAvatar
  
*/

const AvatarDisplay = ({iconAvatar, utente}) => {
  let avatarSrc = '';
  let avatarAlt = '';
  console.log('Avatar ID:', iconAvatar);

  if (iconAvatar == 1){
    avatarSrc="avatar-senior.png";
    avatarAlt="Avatar senior"
  }
  if (iconAvatar == 2){
    avatarSrc="avatar-adulta.png";
    avatarAlt="Avatar adulta"
  }
  if (iconAvatar == 3){
    avatarSrc="avatar-giovane.png";
    avatarAlt="Avatar giovane"
  }
  if (iconAvatar == 4){
    avatarSrc="avatar-neutral.png";
    avatarAlt="Avatar neutral"
  }
  if (iconAvatar == 5){
    avatarSrc="avatar-eco.png";
    avatarAlt="Avatar eco"
  }
  
  const avatarImage = avatarSrc !== '' && (
    <img className="inline-block size-12 rounded-full ring-2 
                  ring-white bg-green-200 "
         src={avatarSrc}
        alt={avatarAlt}
    />
  );

 return (
  <div className="flex flex-row-reverse gap-4 items-center justify-center
                  absolute right-12 top-10 pl-5
                  bg-white/25 bg-opacity-90 rounded-full ">
  {avatarImage}
  <p className="text-xl">{utente}</p>
  </div>
  );  
}




const Layout = ({iconAvatar, utente}) => {


  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-b from-sky-300 to-green-100 flex flex-col items-center justify-center text-center font-sans text-gray-800">
     
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
