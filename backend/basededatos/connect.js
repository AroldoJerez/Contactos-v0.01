const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI)
  .then(() => console.log("DB Conectada!"))
  .catch((e) => console.log("Error de conexion en DB" + e));
