import React, { useState } from "react";
import axios from "axios";
import "../css/formulario.css";

function AgregarContacto() {
  return (
    <div className="Formulario">
      <h1>Agregar Contacto</h1>
      <form action="/agregarcontacto" method="POST">
        <input
          className="Nombre"
          name="Nombre"
          type="text"
          placeholder="Ingresar Nombre"
        ></input>
        <input
          className="Numero"
          name="Numero"
          type="number"
          placeholder="+54 999 9999"
        ></input>
        <button type="submit" className="btn btn-primary w-100 mb-2">
          Agregar Contacto
        </button>
      </form>
    </div>
  );
}

export default AgregarContacto;
