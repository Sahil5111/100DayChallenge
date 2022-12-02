const express = require('express')
const app = express()
const port = 5500

app.set('view engine','ejs')

app.get("/", (req, res) => {
    console.log("sending index file")
    res.render('index',{'name':'sahil'})
})

app.listen(port, () => {
    console.log(`app started at localhost:${port}`)
})