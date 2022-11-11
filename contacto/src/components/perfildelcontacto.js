import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/perfil.css";

function Perfildelcontacto() {
  //id del producto
  const params = useParams();
  const [contacto, setContacto] = useState([]);
  const url = "http://localhost:5000/api/" + params.id;

  const Leercontacto = () => {
    fetch(url)
      .then((res) => res.json())
      .then((aContacto) => setContacto(aContacto));
  };

  Leercontacto();
  return (
    <div className="bodyperfil">
      <div className="perfil">
        <p>Nombre: {contacto.nombre}</p>
        <p>Numero: {contacto.numero}</p>
      </div>
    </div>
  );
}

export default Perfildelcontacto;
