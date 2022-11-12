import React, { useState } from "react";
import "../css/editarcontacto.css";
import { useParams } from "react-router-dom";

import axios from "axios";
//const regex = {
//  nombre: /\w{3,17}$/, // Letras y espacios, pueden llevar acentos.
//  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
//};

function Editarcontacto() {
  const urlparametro = useParams();
  const url = "http://localhost:5000/api/editarcontacto/" + urlparametro.id;
  const [contacto, setContacto] = useState([]);
  const [data, setData] = useState({
    nombre: "",
    numero: "",
  });

  const Leercontacto = () => {
    fetch("http://localhost:5000/api/editarcontactos/" + urlparametro.id)
      .then((res) => res.json())
      .then((upContacto) => setContacto(upContacto));
  };

  Leercontacto();

  const submitFormUp = async (e) => {
    e.preventDefault();
    try {
      axios.put(url, {
        nombre: data.nombre,
        numero: data.numero,
      });
      setTimeout(
        () =>
          window.location.replace("http://localhost:3000/" + urlparametro.id),
        2000
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handle = (e) => {
    const updatecontact = { ...data };
    updatecontact[e.target.id] = e.target.value;
    setData(updatecontact);
    console.log(updatecontact);
  };

  return (
    <div>
      <form onSubmit={(e) => submitFormUp(e)}>
        <input
          onChange={(e) => handle(e)}
          value={data.nombre}
          id="nombre"
          className="nombre"
          name="nombre"
          type="text"
          placeholder={contacto.nombre}
        ></input>
        <input
          onChange={(e) => handle(e)}
          value={data.numero}
          id="numero"
          className="numero"
          name="numero"
          type="number"
          placeholder={contacto.numero}
        ></input>
        <button className="btn btn-success mb-2">Actualizar</button>
      </form>
    </div>
  );
}

export default Editarcontacto;
