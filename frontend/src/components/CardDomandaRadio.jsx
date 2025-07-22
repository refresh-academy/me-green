import ButtonAltraDomanda from "./ButtonAltraDomanda";


const CardDomandaRadio = ({ corpo, tipo, avanti, indietro }) => {
    return (
      <>
        <h1>{corpo}</h1>
        <p>{tipo}</p>

      <ButtonAltraDomanda verso="indietro"titolo="Sezione Consumi" target={indietro}/>
      <ButtonAltraDomanda verso="avanti" titolo="Sezione Consumi" target={avanti}/>
      </>
    )
  };
  export default CardDomandaRadio