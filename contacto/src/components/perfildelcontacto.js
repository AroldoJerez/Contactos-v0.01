import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Perfildelcontacto() {
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
  return <div>{contacto}</div>;
}

export default Perfildelcontacto;
