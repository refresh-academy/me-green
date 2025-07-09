//import greenLogo from '/green-logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router'
import Home from './routes/Home.jsx'
import NotFound from './routes/NotFound.jsx'
import Risultato from './routes/Locali.jsx'
import Domanda from './routes/Locale.jsx'

const Layout = () => {
  return (
    <>
      <div className='relative z-20 bg-white shadow-md'>
        <Link to={"/"} className='flex flex-row items-center text-just-eat text-2xl font-bold gap-2 p-2'>
          <img className="w-12 h-12" src={greenLogo} alt="Green logo" />
          Me Green
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="risultato" element={<Risultato />} />
          <Route path="check" element={<Check />} />
          <Route path="domanda/:id" element={<Domanda />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
