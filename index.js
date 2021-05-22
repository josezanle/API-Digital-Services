const express = require("express");
const { dbConnection } = require("./database");
const cors = require("cors");
const routes = require("./routes");

// grabamos en una constante, express
const app = express();

// archivo estatico, para mostrar el Endpoint en pantalla.
app.use(express.static("public"));

// cors
app.use(cors());

// seteamos el puerto local( 4000 ) o el puerto disponible en heroku
const port = process.env.PORT || 4000;

// invocamos la funcion dbConnection
dbConnection();

// parseo de la informacion del request enviado desde el Front
app.use(express.json());

// habilitamos las rutas en toda la aplicacion
app.use("/", routes());

app.listen(port, () => {
  console.log(`Server corriendo en puerto ${port}`);
});
