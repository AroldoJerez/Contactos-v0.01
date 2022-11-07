// Express y variables declaradas
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// Base de datos
const dotenv = require("dotenv").config();
const conexiondb = require("./basededatos/connect");
const Contactos = require("./models/schemacontactos");

//Para leer el cuerpo del archivo
const body_parser = require("body-parser");
app.use(body_parser.urlencoded({ extended: true }));


// Cors
const cors = require("cors");
const { agregarContacto } = require("./controllers/agregarContacto");
app.use(cors());

//Rutas
app.get("/api/", (req, res) => {
  Contactos.find().then((allContactos) => res.json(allContactos));
});

app.get("/api/agregarcontacto/", agregarContacto);

app.get("/api/:_id", (req, res) => {
  const id = req.params;
  Contactos.findById(id).then((contactos) => res.json(contactos));
});

// Configuracion del servidor
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
