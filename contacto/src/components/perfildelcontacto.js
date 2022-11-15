import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/perfil.css";
import imagenperfilpredeterminada from "../imagenes/7309681.jpg";
import imagenportadapredeterminada from "../imagenes/101.png";

function Perfildelcontacto() {
  const imagenperfil = false;
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
      <div className="portada">
        <img
          src={imagenperfil ? imagenperfil : imagenportadapredeterminada}
          className="imagenportadapredeterminada"
          alt="foto de portada"
        />
      </div>
      <div className="perfil">
        <div className="fotoperfil">
          <img
            src={imagenperfil ? imagenperfil : imagenperfilpredeterminada}
            className="fotodeperfil"
            alt="foto de perfil"
          />
        </div>
        <div className="divisorinformacion">
          <div className="listamenuperfil">
            <ul className="listamenu">
              <li>
                <a href="#informaciondelperfil">Datos</a>
              </li>
              <li>
                <a href="#">Proximamente</a>
              </li>
              <li>
                <a href="#">Proximamente</a>
              </li>
              <li>
                <a href="#">Proximamente</a>
              </li>
            </ul>
          </div>
          <div id="informaciondelperfil" className="informaciondelperfil">
            <p>Nombre: {contacto.nombre}</p>
            <p>Numero: {contacto.numero}</p>
            <p>Correo: Proximamente</p>
            <p>Genero: Proximamente</p>
            <p>Fecha de nacimiento: Proximamente</p>
            <p>Nota: Proximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfildelcontacto;
