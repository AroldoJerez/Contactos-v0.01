import React, { useState } from "react";
import "../css/editarcontacto.css";
import { useParams } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

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
    <div className="bodyformedit">
      <div className="izquierda">
        <div className="tarjetacontacto">
          <div className="informacionedit">
            <p>Nombre: {contacto.nombre}</p>
            <p>Telefono: {contacto.numero}</p>
          </div>
          <div className="icons">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitterSquare />
          </div>
        </div>
        <div className="tarjetacontacto">
          <div className="informacionedit">
            <p>Nombre: {data.nombre}</p>
            <p>Telefono: {data.numero}</p>
          </div>
          <div className="icons">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitterSquare />
          </div>
        </div>
      </div>
      <div className="derecha">
        <div className="containerformedit">
          <h2 className="h2">EDITAR CONTACTO</h2>
          <form onSubmit={(e) => submitFormUp(e)}>
            <input
              onChange={(e) => handle(e)}
              value={data.nombre}
              id="nombre"
              className="nombre"
              name="nombre"
              type="text"
              maxLength="16"
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
            <button className="btn btn-update mb-2">Actualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editarcontacto;
