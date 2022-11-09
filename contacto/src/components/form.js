import React, { useState } from "react";
import axios from "axios";
import "../css/formulario.css";

function AgregarContacto() {
  const url = "http://localhost:5000/api/agregarcontacto";
  const [ms, setMs] = useState({
    estado: "inactive",
    Message: "",
  });
  const [data, setData] = useState({
    Nombre: "",
    Numero: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(e);
    await axios
      .post(url, {
        Nombre: data.Nombre,
        Numero: data.Numero,
      })
      .then((res) => {
        if (res) {
          setMs({
            estado: "activems",
            Message: `Contacto ${data.Nombre} agregado corretamente`,
          });
          setTimeout(() => window.location.replace("/"), 7000);
        }
      })
      .catch((e) => {
        setMs({
          estado: "errorms",
          Message: "Error inesperado",
        });
        console.log(e);
      });
  };

  const handle = (e) => {
    const newcontact = { ...data };
    newcontact[e.target.id] = e.target.value;
    setData(newcontact);
  };
  if (ms.estado === "activems") {
    return (
      <div className="Formulario">
        <div className="alert alert-success activems">{ms.Message}</div>
      </div>
    );
  } else if (ms.estado === "errorms") {
    return (
      <div className="Formulario">
        <div className="alert alert-success errorms">{ms.Message}</div>
      </div>
    );
  } else {
    return (
      <div className="Formulario">
        <h1>Agregar Contacto</h1>
        <form onSubmit={(e) => submitForm(e)}>
          <input
            onChange={(e) => handle(e)}
            value={data.Nombre}
            id="Nombre"
            className="Nombre"
            name="Nombre"
            type="text"
            placeholder="Ingresar Nombre"
          ></input>
          <input
            onChange={(e) => handle(e)}
            value={data.Numero}
            id="Numero"
            className="Numero"
            name="Numero"
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
