var mongoose1 = require('mongoose');

exports = module.exports = function(app:any, mongoose:any) {
	var UsuarioSchema = new mongoose1.Schema({
		nombre: {type: String},
		rut: {type: String},
		correo: {type: String},
		clave: {type: String},
		imagen: {type: String},
		tags: {type: String}
	});
	module.exports = mongoose.model('usuarios', UsuarioSchema);
};