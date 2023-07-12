const express = require('express')
const cors = require('cors')
const dbConnection = require('./config/dbConnection')
require('dotenv').config()
const routes = require("./routes")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(routes)
dbConnection()


app.get('/', function (req, res) {
  res.send(`Hey &#128526`)
})

app.listen(8000)