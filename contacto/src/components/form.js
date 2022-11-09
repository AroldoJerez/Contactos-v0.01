import React, { useState } from "react";
import axios from "axios";
import "../css/formulario.css";
const url = "http://localhost:5000/api/agregarcontacto";

function AgregarContacto() {
  const [addstatus, setAddstatus] = useState({
    estado: "inactive",
    message: "",
  });
  const [data, setData] = useState({
    nombre: "",
    numero: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(url, {
        nombre: data.nombre,
        numero: data.numero,
      })
      setAddstatus({
        estado: "activems",
        message: `Contacto ${data.nombre} agregado corretamente`,
      });
      setTimeout(() => window.location.replace("/"), 4000);
    } catch (error) {
      setAddstatus({
        estado: "errorms",
        message: "Error inesperado",
      });
      setTimeout(() => {
        setAddstatus({
          estado: "",
          message: "",
        });
      }, 4000);
      console.log(error);
    }
  };

  const handle = (e) => {
    const newcontact = { ...data };
    newcontact[e.target.id] = e.target.value;
    setData(newcontact);
  };
  if (addstatus.estado === "activems") {
    return (
      <div className="Formulario">
        <div className="alert alert-success activems">{addstatus.message}</div>
      </div>
    );
  } else if (addstatus.estado === "errorms") {
    return (
      <div className="Formulario">
        <div className="alert alert-success errorms">{addstatus.message}</div>
      </div>
    );
  } else {
    return (
      <div className="Formulario">
        <h1>Agregar Contacto</h1>
        <form onSubmit={(e) => submitForm(e)}>
          <input
            onChange={(e) => handle(e)}
            value={data.nombre}
            id="nombre"
            className="nombre"
            name="nombre"
            type="text"
            placeholder="Ingresar Nombre"
          ></input>
          <input
            onChange={(e) => handle(e)}
            value={data.numero}
            id="numero"
            className="numero"
            name="numero"
            type="number"
            placeholder="+54 999 9999999"
          ></input>
          <button className="btn btn-primary w-100 mb-2">
            Agregar Contacto
          </button>
        </form>
      </div>
    );
  }
}

export default AgregarContacto;
