const express = require("express")
const ejs = require('ejs')
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(require('./routers/sections'))


app.listen(PORT, () => console.log("listening on port", PORT))









