const Contactos = require("../models/schemacontactos");

const eliminarContacto = (req, res) => {
  console.log("metodopost en eliminar contacto");
  const id = req.body._id;
  console.log(id);
  Contactos.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });
};

module.exports = { eliminarContacto };
