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

//serves index.html for an route besides /api
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html" ))
})

//handles 500 server errors
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)//what's this?
  res.status(err.status || 500).send(err.message || "Internal server error.")
})

const PORT = process.env.PORT || 1337

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`)
})
