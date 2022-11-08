import React, { useState } from "react";
import axios from "axios";
import "../css/formulario.css";

function AgregarContacto() {
  const url = "http://localhost:5000/api/agregarcontacto";
  const [data, setData] = useState({
    Nombre: "",
    Numero: "",
  });

  const Message = "test de enviado correctamente!";

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post(url, {
        Nombre: data.Nombre,
        Numero: data.Numero,
      })
      .then((res) => {
        if (res) {
          setTimeout(() => window.location.replace("/"), 7000);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handle = (e) => {
    const newcontact = { ...data };
    newcontact[e.target.id] = e.target.value;
    setData(newcontact);
  };

  return (
    <div className="Formulario">
      <div className="alert alert-success">{Message}</div>

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
        <button className="btn btn-primary w-100 mb-2">Agregar Contacto</button>
      </form>
    </div>
  );
}

export default AgregarContacto;
