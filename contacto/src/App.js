import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Editarcontacto from "./components/editarcontacto";
import AgregarContacto from "./components/form";
import ListaContacto from "./components/listadecontactos";
import Perfildelcontacto from "./components/perfildelcontacto";
import Formulario from "./components/formprueba";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ListaContacto />}></Route>
        <Route path="/EditarContacto/:id" element={<Editarcontacto />} />
        <Route path="/AgregarContacto/" element={<AgregarContacto />} />
        <Route path=":id" element={<Perfildelcontacto />} />
        <Route path="/Formulario" element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default App;
