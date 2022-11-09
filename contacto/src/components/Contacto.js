import React, { useState } from "react";
import "../css/contacto.css";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaUsersCog } from "react-icons/fa";
import axios from "axios";

function Contacto() {
  const [contact, setContact] = useState([]);
  const url = "http://localhost:5000/api/eliminarcontacto";

  const LoadContacto = () => {
    fetch("http://localhost:5000/api/")
      .then((res) => res.json())
      .then((allContactos) => setContact(allContactos));
  };

  const EliminarContacto = (contactos) => {
    const identidad = contactos._id;
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
      {contact.map((contactos) => {
        return (
          <div className="contacto" key={contactos._id}>
            <div className="informacion">
              <p>Nombre: {contactos.nombre}</p>
              <p>Numero: {contactos.numero}</p>
            </div>
            <div className="Iconos">
              <Link to="/editarcontacto">
                <FaUsersCog className="iconEdit" />
              </Link>
              <Link onClick={() => EliminarContacto(contactos)}>
                <FaRegTrashAlt className="iconEdit" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contacto;
