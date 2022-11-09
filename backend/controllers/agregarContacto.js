const Contactos = require("../models/schemacontactos");

const agregarContacto = async (req, res) => {
  console.log("metodopost en agregar contacto");
  console.log(req.body);

  let contacto = new Contactos();
  contacto.nombre = req.body.nombre;
  contacto.numero = req.body.numero;
  contacto.save((err, contactoguardado) => {
    if (err) {
      res.status(500).send("Error al salvar 111");
    }
    res.status(200).send((contacto = contactoguardado));
  });
};

module.exports = { agregarContacto };
