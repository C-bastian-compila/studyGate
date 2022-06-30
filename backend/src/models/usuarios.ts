var mongoose1 = require('mongoose');
const Schema = mongoose1.Schema;
//mongoose1.set('useCreateIndex', true); // Soluciona un error que da en la consola

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    clave: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: String,
    },
    imagen: {
        type: String,
        trim: true
    }
},  {
    timestamps: true // Guarda en la coleccion la fecha de creacion y actualizacion
});

module.exports = mongoose1.model('Usuarios', usuarioSchema);


//SOLUCION ANTIGUA

// exports = module.exports = function(app:any, mongoose:any) {
// 	var UsuarioSchema = new mongoose1.Schema({
// 		nombre: {type: String},
// 		rut: {type: String},
// 		correo: {type: String},
// 		clave: {type: String},
// 		imagen: {type: String},
// 		tags: {type: String}
// 	});
// 	module.exports = mongoose.model('usuarios', UsuarioSchema);
// };
