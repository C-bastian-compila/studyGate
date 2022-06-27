const express = require('express')
const app = express()
const config = {
    hostname:"127.0.0.1",
    port: 3000,
}

app.get('/usuarios', (req:any, res:any) => {
    let usuario={
        "id":1,
        "nombre":"panchito",
        "palabra":"viva mi pais"
    }
    res.send(JSON.stringify(usuario))
})

app.listen(config, () => {
  console.log(`Conectando al backend (local) en el puerto ${config.port}`)
})