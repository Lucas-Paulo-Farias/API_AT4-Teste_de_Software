require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const db = require('./db')
const apiRoutes = require('./routes/api')

app.use(express.json())
app.use('/usuarios', apiRoutes)

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})