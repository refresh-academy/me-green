const CardCarrello = ({ nome, prezzo, sconto }) => {
    const prezzofinale = prezzo - prezzo * sconto / 100

    return (
        <div className="grow flex flex-row ">
            <p className="grow ">{nome}</p>
            <p>{prezzofinale.toFixed(2)} €</p>
        </div>
    )
}




const Carrello = ({ cibiSelezionati, statoCarrello }) => {


    return (
        <div className="grow">
            <h1 className='text-3xl font-semibold mx-4 mt-10'>Carrello</h1>
            {cibiSelezionati.map(c => <CardCarrello
                key={c.id_food_item}
                nome={c.name}
                prezzo={c.price}
                sconto={c.offer_discount}
            />)}
        </div>);
}
export default Carrello;