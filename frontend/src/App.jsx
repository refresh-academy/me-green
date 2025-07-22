import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home.jsx";
import NotFound from "./routes/NotFound.jsx";
import Sezioni from "./routes/Sezioni.jsx";
import Domanda from "./routes/Domanda.jsx";
import Layout from "./routes/Layout.jsx";
import Usuario from "./routes/Usuario.jsx";
import Chisiamo from "./routes/Chisiamo.jsx";
import ConsumiRifiuti from "./routes/ConsumiRifiuti.jsx";
import Casa from "./routes/Casa.jsx";
import { useState } from "react";

function App() {

  const [avatar, setAvatar] = useState(0);
  const [utente, setUtente] = useState("");
  const [TitoloSezione, setTitoloSezione] = useState("")
document.megreen={Titolo: (t)=>setTitoloSezione(t)}
  
  const [gradientSfondo, setGradientSfondo] = useState("from-sky-300 to-green-100");
  
    return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout iconAvatar={avatar} utente={utente} sfondo={gradientSfondo} TitoloSezione={TitoloSezione}/>}>
          <Route path="/" element={<Home changeAvatar={setAvatar}/>} />
          <Route path="chisiamo" element={<Chisiamo />} />
          {/* The 'Usuario' component is used for both 'Chisiamo' and 'Usuario' routes */}
          <Route path="usuario" element={<Usuario 
            changeAvatar={setAvatar}
            utente={utente} 
            changeUtente={setUtente}  
          />} />
          <Route path="sezioni" element={<Sezioni />} />
          <Route path="domande" element={<Domanda />} />
          <Route path="consumi" element={<ConsumiRifiuti changeTheme={setGradientSfondo}/>} />
          <Route path="casa" element={<Casa changeTheme={setGradientSfondo}/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
