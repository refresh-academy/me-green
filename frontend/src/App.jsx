import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router'
import Home from './routes/Home.jsx'
import NotFound from './routes/NotFound.jsx'
import Sezioni from './routes/Sezioni.jsx'
import Domanda from './routes/Domanda.jsx'
import Layout from './routes/Layout.jsx'
import Usuario from './routes/Usuario.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="sezioni" element={<Sezioni />} />
          <Route path="domande/:id" element={<Domanda />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
