import React, { useState } from "react";
import "../css/contacto.css";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaUsersCog, FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";

function Contacto() {
  const [contact, setContact] = useState([]);
  const [estadoms, setEstadoms] = useState("");
  const url = "http://localhost:5000/api/eliminarcontacto";

  const LoadContacto = () => {
    fetch("http://localhost:5000/api/")
      .then((res) => res.json())
      .then((allContactos) => setContact(allContactos));
  };

  const EliminarContacto = (contactos) => {
    const identidad = contactos._id;
    setEstadoms(contactos.nombre);
    axios
      .post(url, { _id: identidad })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  LoadContacto();

  return (
    <div className="ContainerContactos">
      <div className="mensajeeliminado" hidden={estadoms === "" ? true : false}>
        <p className="textoeliminado">Contacto {estadoms} Eliminado</p>
        <FaRegTimesCircle className="iconEditdelete" onClick={()=>setEstadoms("")} />
      </div>
      {contact.map((contactos) => {
        return (
          <div className="contacto" key={contactos._id}>
            <Link to={contactos._id} className="informacion">
              <p>Nombre: {contactos.nombre}</p>
              <p>Numero: {contactos.numero}</p>
            </Link>
            <div className="Iconos">
              <a href={"editarcontacto/" + contactos._id} className="botonicon">
                <FaUsersCog className="iconEdit" />
              </a>
              <button
                className="botonicon"
                onClick={() => EliminarContacto(contactos)}
              >
                <FaRegTrashAlt className="iconEdit" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contacto;
