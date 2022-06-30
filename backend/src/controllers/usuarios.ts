var mongoose1 = require('mongoose');
const Usuario  = mongoose1.model('Usuarios');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456';

exports.crear = (req:any, res:any, next:any) => {
    const nuevoUsuario = {
      nombre: req.body.nombre,
      rut: req.body.rut,
      email: req.body.email,
      clave: bcrypt.hashSync(req.body.clave),
      tags: req.body.tags,
      imagen: req.body.imagen
    }
    Usuario.create(nuevoUsuario, (err:any, usuario:any) => {
        if (err && err.code === 11000) return res.status(409).send('El email ya esta registrado');
        if (err) return res.status(500).send('Server error');
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: usuario.id }, SECRET_KEY, {expiresIn: expiresIn});
        const dataUser = {
            name: usuario.name,
            email: usuario.email,
            ssToken: accessToken,
            expiresIn: expiresIn
        }
        // response 
        res.send({ dataUser });
    });
}

exports.autenticar = (req:any, res:any, next:any) => {
    //Obtengo los campos desde la consulta
    const credencialesRecibidas = {
        email: req.body.email,
        clave: req.body.clave
    }
    console.log(credencialesRecibidas);
    Usuario.findOne({ email: credencialesRecibidas.email }, (err:any, usuario:any) => {
        if (err) return res.status(500).send('Server error!');
        if (!usuario) {
            // email no existe en la bd
            res.status(409).send({ message: 'Ups, algo salio mal...' });
        } 
        else {
            
            const claveResultante = bcrypt.compareSync(credencialesRecibidas.clave, usuario.clave);
            if (claveResultante) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: usuario.id }, SECRET_KEY, { expiresIn: expiresIn });
                //Formato de datos que se enviaran de vuelta
                const infoUsuario = {
                    nombre: usuario.nombre,
                    email: usuario.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.send({ infoUsuario });
            } 
            else {
                // clave erronea
                res.status(409).send({ message: 'Ups, algo salio mal...' });
            }
        }
    });
}

// exports.autenticar = function(req:any, res:any) {
//     Usuarios.find({correo:req.params.correo,clave:req.params.clave},function(err:any,response:any) {
// 		if(err) return res.send(500, err.message);
//       res.status(200).json(response);
// 	});
// };