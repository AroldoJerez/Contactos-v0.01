const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactoSchema = new Schema({
  Nombre: {
    type: String,
    required: true,
  },
  Telefono: {
    type: String,
    unique: true,
    required: true,
  },
});

const Contactos = mongoose.model("contactos", contactoSchema);
module.exports = Contactos;
