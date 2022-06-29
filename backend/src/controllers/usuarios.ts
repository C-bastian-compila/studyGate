var mongoose1 = require('mongoose');
const Usuarios  = mongoose1.model('usuarios');

exports.autenticar = function(req:any, res:any) {
    Usuarios.find({correo:req.params.correo,clave:req.params.clave},function(err:any,response:any) {
		if(err) return res.send(500, err.message);
      res.status(200).json(response);
	});
};

// exports.registrar = function(req:any, res:any) {
//     Usuarios.({correo:req.params.correo,clave:req.params.clave},function(err:any,response:any) {
// 		if(err) return res.send(500, err.message);
//       res.status(200).json(response);
// 	});
// };