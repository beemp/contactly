// modules ========================
const express = require('express')
const app = express()
const pug = require('pug')
const mongoose = require('mongoose')
const db = require('./config/database')

// configuration ==================
app.set('port', (process.env.PORT || 3000))
app.set(express.static(__dirname + '/public'))
app.set('views', __dirname + '/public')
app.set('view engine', 'pug')
app.engine('pug', pug.__express)

// routes =========================
require('./app/routes')(app)

// start app ======================
app.listen(app.get('port'))
console.log(`running on 0.0.0.0/${app.get('port')}`);
