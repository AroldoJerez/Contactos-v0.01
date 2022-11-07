const Contactos = require("../models/schemacontactos");

const agregarContacto = async (req, res) => {
  try {
    const { Nombre, Numero } = req.body;
    const newProduct = new Contactos({ Nombre, Numero });
    await newProduct.save();
    res.status(201).json({ msg: 1 });
  } catch (e) {
    res.status(400).json({ msg: 2 });
  }
};

module.exports = { agregarContacto };
