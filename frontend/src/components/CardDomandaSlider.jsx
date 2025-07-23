
import ButtonAltraDomanda from "./ButtonAltraDomanda";

const CardDomandaSlider = ({ sezione, domanda, avanti, indietro }) => {
    return (
      <>
        <h1>{domanda.corpo}</h1>
        <p>{domanda.tipo}</p>


      <ButtonAltraDomanda verso="indietro"titolo="Sezione Consumi" target={indietro}/>
      <ButtonAltraDomanda verso="avanti" titolo="Sezione Consumi" target={avanti}/>
      </>
    )
  };
  export default CardDomandaSlider