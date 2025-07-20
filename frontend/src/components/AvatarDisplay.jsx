/* 

  React component per mostrare un avatar a partire dal suo indice 
  contenuto nello stato iconAvatar
  
*/

const AvatarDisplay = ({iconAvatar, utente}) => {
  let avatarSrc = '';
  let avatarAlt = '';
  console.log('Avatar ID:', iconAvatar, utente);

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

export default AvatarDisplay;