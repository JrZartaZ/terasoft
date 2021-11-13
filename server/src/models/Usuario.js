const mongoose = require("mongoose"),
	UsuariosSchema = mongoose.Schema(
		{
			cedula: String,
			nombres: String,
			ciudad: String,
			direccion: String,
			telefono: String,
			correo: String,
			estado: {
				type: String,
    			enum: [ 'pendiente', 'autorizado', 'no autorizado' ],
				default: 'pendiente'
			},
			rol: {
				type: String,
    			enum: [ 'administrador', 'vendedor' ],
				default: 'vendedor'
			}
		}
	);

module.exports = mongoose.model("Usuario", UsuariosSchema);
