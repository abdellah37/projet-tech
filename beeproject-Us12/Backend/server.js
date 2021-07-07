const express = require('express')
const app =express()
const mongoose = require ('mongoose')
const dotenv= require('dotenv')
const routesUrls = require('./routes/route')
const bcrypt = require('bcrypt')
const cors = require('cors')
const bodyParser = require('body-parser');
dotenv.config()


mongoose.connect(process.env.DATABASE_ACCESS,() =>console.log("database Connected")) // connection databasae 




app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.listen(4000)
