const express = require('express')
const app = express()
const port = 5500
const database = require('./database.js')

app.get('/', (req, res) => {
    let index = Math.floor(Math.random() * 10)
    res.json(database[index])
})

app.get('/10', (req, res) => {
    res.json(database)
})

app.listen(port)