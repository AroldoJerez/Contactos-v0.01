import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Editarcontacto from "./components/editarcontacto";
import AgregarContacto from "./components/form";
import ListaContacto from "./components/listadecontactos";
import Perfildelcontacto from "./components/perfildelcontacto";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ListaContacto />}></Route>
        <Route path="/EditarContacto/:id" element={<Editarcontacto />} />
        <Route path="/AgregarContacto/" element={<AgregarContacto />} />
        <Route path=":id" element={<Perfildelcontacto />} />
      </Routes>
    </div>
  );
}

export default App;
