import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home.jsx";
import NotFound from "./routes/NotFound.jsx";
import Sezioni from "./routes/Sezioni.jsx";
import Domanda from "./routes/Domanda.jsx";
import Layout from "./routes/Layout.jsx";
import Usuario from "./routes/Usuario.jsx";
import Chisiamo from "./routes/Chisiamo.jsx";
import { useState } from "react";

function App() {

  const [avatar, setAvatar] = useState(0);
  const [utente, setUtente] = useState("");
  
    return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout iconAvatar={avatar} utente={utente} />}>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
