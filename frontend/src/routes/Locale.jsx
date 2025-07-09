
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Carrello from "../components/Carrello";

const CardCibo = ({
  name,
  price,
  offerDiscount,
  description,
  onClick,
  quantity,
}) => {
  const currentPrice = price - (price * offerDiscount) / 100;

  return (
    <div className="rounded-lg shadow-lg p-4 m-4">
      <div className="flex">
        <h2 className="grow text-xl font-bold">{name}</h2>
        <button
          className="flex-none flex justify-center items-center border border-gray-200 hover:bg-gray-100 rounded-full w-8 h-8"
          onClick={onClick}
        >
          {quantity ? quantity : "+"}
        </button>
      </div>
      {offerDiscount ? (
        <p className="text-just-eat">
          <span className="text-black line-through pr-2">
            {price.toFixed(2)} €
          </span>
          <span className="font-black pr-2">{currentPrice.toFixed(2)} €</span>(
          {offerDiscount}% di sconto)
        </p>
      ) : (
        <p className="font-bold">{price.toFixed(2)} €</p>
      )}
      <p>{description}</p>
    </div>
  );
};

const Locale = () => {
  let { id } = useParams();
  const [locale, setLocale] = useState({});
  const [cibi, setCibi] = useState([]);
  const [carrello, setCarrello] = useState({});
  const [ordineCompletato, setOrdineCompletato] = useState(false);

  const aggiungiAlCarrello = (foodId) => {
    setCarrello({
      ...carrello,
      [foodId]: carrello[foodId] ? carrello[foodId] + 1 : 1,
    });
  };

  const sottraiDalCarrello = (foodId) => {
    const { [foodId]: foodIdQuantity, ...rest } = carrello;
    if (foodIdQuantity === 1) {
      setCarrello(rest);
    } else {
      setCarrello({
        ...rest,
        [foodId]: foodIdQuantity - 1,
      });
    }
  };

  console.log("Carrello", carrello);

  useEffect(() => {
    fetch(`http://localhost:3000/api/restaurants/${id}`)
      .then((res) => res.json())
      .then((locale) => setLocale(locale))
      .catch((err) => console.log(err));

    fetch(`http://localhost:3000/api/restaurants/${id}/food-items`)
      .then((res) => res.json())
      .then((cibi) => setCibi(cibi))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="flex flex-row">
      {!ordineCompletato && 
        <>
          <div className="w-2/3">
            <h1 className="text-3xl font-semibold mx-4 mt-10">{locale.name}</h1>
            {cibi.map((cibo) => (
              <CardCibo
                key={cibo.id_food_item}
                name={cibo.name}
                price={cibo.price}
                offerDiscount={cibo.offer_discount}
                description={cibo.description}
                quantity={carrello[cibo.id_food_item]}
                onClick={() => aggiungiAlCarrello(cibo.id_food_item)}
              />
            ))}
          </div>
          <div className="w-1/3">
            <Carrello
              cibiSelezionati={cibi.filter((cibo) =>
                Object.keys(carrello).includes(cibo.id_food_item.toString())
              )}
              statoCarrello={carrello}
              aggiungiAlCarrello={aggiungiAlCarrello}
              sottraiDalCarrello={sottraiDalCarrello}
            />
          </div>
        </>
      }
    </div>
  );
};

export default Locale;