var path = require('path')
const express = require('express')
// const bodyParser = require('body-parser')

const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get("/analyse", (req, res) => {
    let txt = req.body.txt
    console(txt)
})
