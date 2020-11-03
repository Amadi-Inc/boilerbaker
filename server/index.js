const path = require("path")
const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyparser = require("body-parser")

//morgan middleware
app.use(morgan("dev"))

//static middleware
app.use(express.static(path.join(__dirname, "../public"))) //not sure if correct

//body parsing middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true}))

app.use("/api", require("./routes"))
