import pizzaLogo from '/pizza-logo.svg'
import backgroundImage from '../assets/foodBackground.jpg'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
      <div
        className="relative h-[80vh] z-0"
      >
        <img
          src={backgroundImage}
          className="absolute h-full w-full object-cover opacity-40 z-0"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <img className="w-20 h-20 rounded-full bg-white text-white border-4" src={pizzaLogo} alt="Pizza logo" />
          <h1 className="text-5xl font-bold mb-4">
            Mangia e basta
          </h1>
          <p className="text-xl mb-6">
            Quanto sei green?
          </p>
          <Link
            to="/locali"
            className="bg-just-eat hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl"
          >
            Vai ai locali
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home