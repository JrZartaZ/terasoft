const mongoose = require("mongoose"),
  ProductosSchema = mongoose.Schema(
    {}
  );

module.exports = mongoose.model("Producto", ProductosSchema);
