const Product = require("../models/Product");

exports.crearProducto = async (req, res) => {
  // capturamos la info ennviada desde el Front con el request
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json({
      ok: true,
      mensaje: `Se ha creado una nueva categoria con exito.`,
      body: product,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      mensaje: "Internal server error",
    });
  }
};

// controldor para traer todos los registros
exports.traerProductos = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      ok: true,
      mensaje: "Todas las categorias disponibles",
      body: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      mensaje: "Interna server error",
    });
  }
};
