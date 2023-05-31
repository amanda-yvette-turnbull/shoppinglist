const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes/routes')

const server = express()
const publicFolder = __dirname + '/public'
// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: false }))
server.use(express.static(publicFolder))
// Routes
server.use('/', routes)

module.exports = server
