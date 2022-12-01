const express = require('express')
const app = express()
const port = 5500

const path = require('path')

app.get("/", (req, res) => {
    console.log("sending index file")
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(port, () => {
    console.log(`app started at localhost:${port}`)
})