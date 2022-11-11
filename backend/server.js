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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors
const cors = require("cors");
const { agregarContacto } = require("./controllers/agregarContacto");
const { eliminarContacto } = require("./controllers/eliminarcontacto");
const { editarContacto } = require("./controllers/editarContacto");

app.use(cors());

//Rutas
app.get("/api/", (req, res) => {
  Contactos.find().then((allContactos) => res.json(allContactos));
});

app.post("/api/agregarcontacto/", agregarContacto);
app.post("/api/editarcontacto/:_id", editarContacto);
app.post("/api/eliminarcontacto/", eliminarContacto);

app.get("/api/editarcontactos/:_id", (req, res) => {
  const id = req.params;
  Contactos.findById(id).then((contactos) => res.json(contactos));
});
app.get("/api/:_id", (req, res) => {
  const id = req.params;
  Contactos.findById(id).then((contactos) => res.json(contactos));
});

// Configuracion del servidor
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
