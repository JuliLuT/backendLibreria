const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const bCrypt = require('bcrypt');
const saltRounds = 10;

const bodyParser = require("body-parser");
const { prependListener } = require("./routers/sections");
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const unDia = 1000 * 60 * 60 * 24;

app.set('view engine', 'ejs')

app.use(sessions({
    secret: "123456",
    saveUninitialized: true,
    cookie: { maxAge: unDia },
    resave: false
}));

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan("dev"))
app.use(express.static('public'))
app.use(require('./routers/sections'))
app.use(bodyParser.json())


app.use('/registro', require('./routers/register'))
app.use('/inicioSesion', require('./routers/login'))
app.use('/products', require('./routers/products'))



app.use(function(err,req,res,next){
    console.log(err)
    return res.json({
        error: err.message
    })
});


app.listen(PORT, () => console.log("listening on port", PORT))









