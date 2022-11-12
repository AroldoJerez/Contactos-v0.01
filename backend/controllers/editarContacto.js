const Contactos = require("../models/schemacontactos");

const editarContacto = async (req, res) => {
  console.log("metodo put en editar contacto");
  const id = req.params;
  const body = req.body;
  console.log(id);
    console.log(body);
  Contactos.findByIdAndUpdate(
    id,
    {
      nombre: req.body.nombre,
      numero: req.body.numero,
    },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = { editarContacto };
