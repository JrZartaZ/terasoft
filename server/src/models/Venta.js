const mongoose = require("mongoose"),
	VentasSchema = mongoose.Schema(
		{
			codigo: String,
			cedula: String,
			nombreCliente: String,
			nombreEncargado: String,
			producto: String,
			cantidad: Number,
			total: Number,
			estado: {
				type: String,
    			enum: [ 'en proceso', 'cancelado', 'entregado' ],
				default: 'en proceso'
			},
			fechaVenta: {
				type: Date,
				default: Date.now()
			}
		}
	);

module.exports = mongoose.model("Venta", VentasSchema);
