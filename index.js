const express = require("express");
const { dbConnection } = require("./database");
const cors = require("cors");
const routes = require("./routes");

// grabamos en una constante, express
const app = express();

// invocamos la funcion dbConnection
dbConnection();

// cors
app.use(cors());

// archivo estatico, para mostrar el Endpoint en pantalla.
app.use(express.static("public"));

// seteamos el puerto local( 4000 ) o el puerto disponible en heroku
const port = process.env.PORT || 4000;

// parseo de la informacion del request enviado desde el Front
app.use(express.json());

// habilitamos las rutas en toda la aplicacion
app.use("/", routes());

app.listen(port, () => {
  console.log(`Server corriendo en puerto ${port}`);
});
