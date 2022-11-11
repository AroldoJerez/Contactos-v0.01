import React, { useState } from "react";
import axios from "axios";
import "../css/formulario.css";
const url = "http://localhost:5000/api/agregarcontacto";
const regex = {
  nombre: /\w{3,17}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

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

    if (!regex.telefono.test(data.numero)) {
      return setAddstatus({
        estado: "errorms",
        message: "El numero de contener entre 7 y 14 caracteres",
      });
    }
    try {
      await axios.post(url, {
        nombre: data.nombre,
        numero: data.numero,
      });
      setAddstatus({
        estado: "activems",
        message: `Contacto ${data.nombre} agregado corretamente`,
      });
      setTimeout(() => window.location.replace("/"), 10000);
    } catch (error) {
      setAddstatus({
        estado: "errorms",
        message: "Este numero ya existe!",
      });
      setTimeout(() => {
        setAddstatus({
          estado: "",
          message: "",
        });
      }, 400000);
      console.log(error);
    }
  };

  const handle = (e) => {
    const newcontact = { ...data };
    newcontact[e.target.id] = e.target.value;
    setData(newcontact);

    if ((addstatus.estado === "errorms") & e.target.value) {
      setAddstatus({
        estado: "",
        message: "",
      });
    }
  };

  return (
    <div className="agregarcontacto">
      <div className="formulario">
        {addstatus.estado === "activems" ? (
          <div className="alert activems">
            {addstatus.message}
            <div className="botonesms">
              <a href="/" className="botonms success">
                Contactos
              </a>
              <button
                className="botonms success"
                onClick={() =>
                  setAddstatus({
                    estado: "",
                    message: "",
                  })
                }
              >
                Agregar otro
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <h1
          className="h1"
          hidden={addstatus.estado === "activems" ? true : false}
        >
          AGREGAR CONTACTO
        </h1>
        <form
          id="formulario"
          onSubmit={(e) => submitForm(e)}
          hidden={addstatus.estado === "activems" ? true : false}
        >
          <label>
            Nombre:
            <input
              onChange={(e) => handle(e)}
              value={data.nombre}
              id="nombre"
              className="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresar Nombre"
            ></input>
          </label>
          <label>
            Telefono:
            <input
              onChange={(e) => handle(e)}
              value={data.numero}
              id="numero"
              className={
                addstatus.estado === "errorms" ? "numero inputalert" : "numero"
              }
              name="numero"
              type="number"
              placeholder="+54 999 9999999"
            ></input>
          </label>
          {addstatus.estado === "errorms" ? (
            <div className="boxaltert">
              <div className="triangulo"></div>
              <div className="alert alert-error errorms">
                {addstatus.message}
              </div>
            </div>
          ) : (
            ""
          )}
          <button
            className="btn btn-success w-100 mb-2"
            disabled={addstatus.estado === "activems" ? true : false}
          >
            Agregar Contacto
          </button>
        </form>
      </div>
    </div>
  );
}

export default AgregarContacto;
