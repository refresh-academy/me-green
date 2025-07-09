import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ciboImage from '../assets/cibo.jpg'

const CardLocale = ({ id, cover, name, ratingAvg, ratingCount, category, orderMinimum }) => {
  return (
    <Link
      className="flex flex-row m-20 rounded-lg overflow-hidden shadow-lg"
      to={`/locali/${id}`}
    >
      <img
        className='w-36 object-cover'
        src={cover || ciboImage}
        onError={(e) => {
          e.target.src = ciboImage;
        }} />
      <div className="w-3/4 p-4">
        <h2 className='text-2xl font-semibold'>{name}</h2>
        <p>{ratingAvg} ({ratingCount})</p>
        <p>{category}</p>
        <p>{orderMinimum
          ? `Minimo d'ordine: ${orderMinimum.toFixed(2)}€`
          : "Nessun minimo d'ordine"}</p>
      </div>
    </Link>
  )
}

const Locali = () => {
  const [ristoranti, setRistoranti] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/restaurants')
      .then(res => res.json())
      .then(data => setRistoranti(data))
      .catch(err => console.log("Errore: ", err))
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-semibold ml-20 mt-10'>Locali</h1>
      {ristoranti.map(locale => <CardLocale
        key={locale.id_restaurant}
        id={locale.id_restaurant}
        cover={locale.image_url}
        name={locale.name}
        ratingAvg={locale.rating_average}
        ratingCount={locale.rating_count}
        category={locale.kitchen_type}
        orderMinimum={locale.minimum_order} />)}
    </div>
  )
}

export default Locali