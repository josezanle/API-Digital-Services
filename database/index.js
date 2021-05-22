const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://joze:p0fmWd6Xuu6GOlrd@cluster0.ccljz.mongodb.net/product",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    //
    console.log("Conexion a Base de Datos aceptada");
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo establecer la conexion con la Base de Datos");
  }
};

module.exports = { dbConnection };

// pass
// p0fmWd6Xuu6GOlrd

// string de conexion
// mongodb+srv://joze:p0fmWd6Xuu6GOlrd@cluster0.ccljz.mongodb.net/product
