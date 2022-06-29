const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Para formatos
const cors = require('cors') // Intercambio de datos entre frontend y backend
require('dotenv').config(); //variables de entorno dotenv
const mongoose = require('mongoose'); // base de datos

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(cors());

// Importar modelos y controladores
var usuarioModelo = require('./models/usuarios')(app, mongoose); 
var usuarioControlador = require('./controllers/usuarios');

// Este es el router de express
const router = express.Router();
router.route('/login/:correo/:clave').get(usuarioControlador.autenticar);
// router.route('/register/:correo/:clave').get(usuarioControlador.autenticar);
app.use('/api',router);

// Connection to DB
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }, function(err:any) {
    if(err) throw err;
    console.log('Conectado a MongoDB')
});

const config={
    server:process.env.SERVER,
    port : process.env.PORT
};

app.listen(config,()=>{
    console.log(`El servidor esta ahora escuchando ${config.server}:${config.port}`);
});












//modulos
// const  modulo1 = require('./modulo1')

// const config = {
//     hostname:"127.0.0.1",
//     port: 3000,
// }

// app.get('/usuarios', (req:any, res:any) => {
//     let usuario={
//         "id":1,
//         "nombre":"panchito",
//         "palabra":"viva mi pais"
//     }
//     res.send(JSON.stringify(usuario))
// })

// app.listen(config, () => {
//   console.log(`Conectando al backend (local) en el puerto ${config.port}`)
// })