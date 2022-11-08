const Contactos = require("../models/schemacontactos");

const agregarContacto = async (req, res) => {
  console.log("metodopost en agregar contacto");
  console.log(req.body);

  let contacto = new Contactos();
  contacto.Nombre = req.body.Nombre;
  contacto.Numero = req.body.Numero;
  contacto.save((err, contactoguardado) => {
    if (err) {
      res.status(500).send("error al salvar");
    }
    res.status(200).send((contacto = contactoguardado));
  });
};

module.exports = { agregarContacto };
