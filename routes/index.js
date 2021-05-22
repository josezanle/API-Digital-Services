const express = require("express");
const {
  crearProducto,
  traerProductos,
} = require("../controllers/productController");
const router = express.Router();

module.exports = function () {
  // ruta para crear un producto
  router.post("/new", crearProducto);

  // ruta para traer todos los registros
  router.get("/products", traerProductos);

  return router;
};

// para este ejemplo,solo utilizare 2 metodos http
