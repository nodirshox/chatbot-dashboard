require('dotenv').config(); // Getting token from env
const express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
var bodyParser = require('body-parser')
const router = require('./router')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app