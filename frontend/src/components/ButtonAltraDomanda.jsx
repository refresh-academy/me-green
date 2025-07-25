import { Link } from "react-router";

const ButtonAltraDomanda = ({ target,  titolo, verso="avanti"}) => {
    const pulsante = {
        avanti: {
            css: "flex-row-reverse hover:pl-5",
            titolo: "»",
            ccss: "right-12"
        },
        indietro: {
            css: "flex-row hover:pr-5",
            titolo: "«",
            ccss: "left-12"
        }
    }
    const buttonClass = `group flex gap-4 items-center justify-center
                       top-10 bg-white/25 bg-opacity-90 
                       rounded-full ${pulsante[verso].css}`; 
    const containerClass = `absolute top-0 z-100 flex items-center h-full ${pulsante[verso].ccss}`;
    return (
        <div className={containerClass}>
            <Link className={buttonClass} to={target} alt={verso}>
                <div className="size-12 hover:font-extrabold rounded-full ring-2 ring-white 
                            bg-green-200 flex items-center justify-center text-3xl
                                duration-300 ease-in"
                >{pulsante[verso].titolo}</div>
                {<p className="text-xl w-0 not-group-hover:hidden group-hover:w-fit overflow-hidden">{titolo}</p>}
            </Link>
        </div>
    );
}

export default ButtonAltraDomanda;