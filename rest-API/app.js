require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/gomycode2')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to Database'))



app.listen(3001, () => console.log('Server Started'))