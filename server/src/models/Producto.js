const mongoose = require("mongoose"),
	ProductosSchema = mongoose.Schema(
		{
			codigo: String,
			nombre: String,
			descripcion: String,
			valorUnitario: Number,
			cantidad: Number,
			estado: String,
			fechaVenta: {
				type: Date,
				default: Date.now()
			}
		}
	);

module.exports = mongoose.model("Producto", ProductosSchema);
