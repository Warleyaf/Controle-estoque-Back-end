const express = require('express')
const cors = require('cors')
const db = require('./database/db')
const routes = require('./routes/routes')

const app =express()

db.connect()

// Habilitando Cors
app.use(cors(//{
  //origin: "http://localhost:3000"
//}
))

// habilita serve para receber dados json
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Porta rodando na ${port}`))