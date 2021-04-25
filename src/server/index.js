var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const { text } = require('express')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(express.json())
// to use url encoded values
app.use(express.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/analyse', (req, res) => {
    console.log('Request recived')
    let text = req.body.text
    console.log(text)

    res.send(JSON.stringify({message: ' recived'}))

})



// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})