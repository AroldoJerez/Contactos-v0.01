import React, { useState } from "react";
import "../css/contacto.css";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaUsersCog } from "react-icons/fa";

function Contacto() {
  const [contact, setContact] = useState([]);

  const LoadContacto = () => {
    fetch("http://localhost:5000/api/")
      .then((res) => res.json())
      .then((allContactos) => setContact(allContactos));
  };

  LoadContacto();
  return (
    <div className="ContainerContactos">
      {contact.map((contactos) => {
        return (
          <div className="contacto">
            <div className="informacion">
              <p>Nombre: {contactos.Nombre}</p>
              <p>Numero: {contactos.Numero}</p>
            </div>
            <div className="Iconos">
              <Link to="/editarcontacto">
                <FaUsersCog className="iconEdit" />
              </Link>
              <Link to="/eliminarcontacto">
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
