import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="h-96 flex flex-col items-center justify-center">
      <h1 className="text-9xl text-just-eat font-bold">404</h1>
      <p className="text-xl text-just-eat font-semibold">Pagina non trovata</p>
      <Link
        to="/"
        className="bg-just-eat hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl"
      >
        Torna alla Home
      </Link>
    </div>
  )
}

export default NotFound