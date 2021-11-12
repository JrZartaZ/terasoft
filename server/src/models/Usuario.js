const mongoose = require("mongoose"),
	UsuariosSchema = mongoose.Schema(
		{
			cedula: String,
			nombre: String,
			apellido: String,
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
    			enum: [ 'administador', 'vendedor' ],
				default: 'vendedor'
			}
		}
	);

module.exports = mongoose.model("Usuario", UsuariosSchema);