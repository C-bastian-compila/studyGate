const mongoose = require('mongoose'); // base de datos

const express = require('express')
const app = express()

require('dotenv').config(); //variables de entorno dotenv

//Se usa para que el servidor entienda que se le va entregar un JSON (creoxd)
const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//Forma corta de escribir lo de arribar pero menos clara para lgm.sebastian
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

const cors = require('cors') // Intercambio de datos entre frontend y backend
app.use(cors());

// Importar modelos y controladores
var usuarioModelo = require('./models/usuarios');
var usuarioControlador = require('./controllers/usuarios');

// Este es el router de express
const router = express.Router();
router.route('/login').get(usuarioControlador.autenticar);
router.route('/register').get(usuarioControlador.crear);
app.use('/api',router);

// Connection to DB
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }, function(err:any) {
    if(err) throw err;
    console.log('Conectado a MongoDB')
});

// Pedida de conexion con la base de datos
// process.on('SIGINT', () => {
//     mongoose.connection.close(() => {
//         console.log(`Mongo is disconnected`);
//         process.exit(0)
//     });
// });

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