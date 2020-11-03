const path = require("path")
const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyparser = require("body-parser")

//morgan middleware
app.use(morgan("dev"))

//static middleware
app.use(express.static(path.join(__dirname, "..", "/public"))) //why do we use this syntax?

//body parsing middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true}))

app.use("/api", require("./api"))

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html" ))
})

