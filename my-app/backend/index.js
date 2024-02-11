const express = require('express')
const Route = require("./router.js")
const PORT = 8080
const app = express()
const cors = require ('cors');
//Don't forget to add Middlewares for parsing incoming requests
//with JSON and urlencoded payloads depending on your http client 

app.use(cors())
app.use(express.json())

app.use(express.static(__dirname + '/../client/dist'))
app.use("/",Route)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})