var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/register_db')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var iot = require('./models/register/register.route.js')
app.use('/api/register', register)


var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})