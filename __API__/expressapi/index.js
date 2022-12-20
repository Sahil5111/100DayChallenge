const express = require('express')
const app = express()
const cors= require('cors')
const port = 5000
const database = require('./database.js')

app.use(cors())

app.get('/', (req, res) => {
    let index = Math.floor(Math.random() * 10)
    res.json(database[index])
})

app.get('/10', (req, res) => {
    res.json(database)
})

app.listen(port)