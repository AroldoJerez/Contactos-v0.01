import "./css/App.css";
import { Routes, Route} from "react-router-dom";
import Editarcontacto from "./components/editarcontacto";
import AgregarContacto from "./components/form";
import ListaContacto from "./components/listadecontactos";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListaContacto />} />
        <Route path="/EditarContacto/" element={<Editarcontacto />} />
        <Route path="/AgregarContacto/" element={<AgregarContacto />} />
      </Routes>
    </div>
  );
}

export default App;
