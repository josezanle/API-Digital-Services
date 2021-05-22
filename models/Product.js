const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  categoria: {
    type: String,
    trim: true,
    require: true,
  },
  descripcion: {
    type: String,
    trim: true,
    require: true,
  },
  precio: {
    type: Number,
    trim: true,
    require: true,
  },
  items: [
    {
      item: {
        type: String,
        trim: true,
        require: true,
      },
    },
  ],
});
module.exports = mongoose.model("Product", productSchema);
