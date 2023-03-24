const express = require("express")
const app = express()
const PORT = 4000

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.listen(4000, () => {console.log(`Server started on port ${PORT}`)})