/* 

  React component per mostrare un avatar a partire dal suo indice 
  contenuto nello stato iconAvatar
  
*/

import { useLocation } from 'react-router'

const AvatarDisplay = ({iconAvatar, utente}) => {
  let avatarSrc = '';
  let avatarAlt = '';
  let extraCss = '';
  
  const location = useLocation();

  if (iconAvatar == 0){
    avatarSrc = "avatar-anonimo.png";
    avatarAlt = "Utente anonimo";
    extraCss = location.pathname == "/usuario"
               ? "border-2 border-dashed border-white bg-white/15" 
               : "ring-2 ring-white bg-green-200"; 
  }

  if (iconAvatar == 1){
    avatarSrc = "avatar-senior.png";
    avatarAlt = "Avatar senior";
    extraCss = "ring-2 ring-white bg-green-100"; 
  }
  if (iconAvatar == 2){
    avatarSrc = "avatar-adulta.png";
    avatarAlt = "Avatar adulta";
    extraCss = "ring-2 ring-white bg-green-300"; 
  }
  if (iconAvatar == 3){
    avatarSrc = "avatar-giovane.png";
    avatarAlt = "Avatar giovane";
    extraCss = "ring-2 ring-white bg-green-500"; 
  }
  if (iconAvatar == 4){
    avatarSrc = "avatar-neutral.png";
    avatarAlt = "Avatar neutral";
    extraCss = "ring-2 ring-white bg-green-700"; 
  }
  if (iconAvatar == 5){
    avatarSrc = "avatar-eco.png";
    avatarAlt = "Avatar eco";
    extraCss = "ring-2 ring-white bg-green-900"; 
  }
  
  const avatarImage = avatarSrc !== '' && (
    <img className={`inline-block size-12 rounded-full
                 ${extraCss} `}
         src={avatarSrc}
        alt={avatarAlt}
    />
  );

 return (
  <>
 {(location.pathname != '/') &&
  <div className="flex flex-row-reverse gap-4 items-center justify-center
                  absolute right-12 top-10 
                  bg-white/25 bg-opacity-90 rounded-full ">
  {avatarImage}
  <p className="text-xl pl-5 empty:hidden">{utente}</p>
  </div>
  }
  </>
  );  
}

export default AvatarDisplay;