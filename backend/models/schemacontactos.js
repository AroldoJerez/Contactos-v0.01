const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    unique: true,
    required: true,
  },
});

const Contactos = mongoose.model("contactos", contactoSchema);
module.exports = Contactos;
