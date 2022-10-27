const express = require('express')
const app = express()
const path = require('path')
const { getHome, getCart, getProduct, getInicio, getRegistro } = require('../controllers/routeResponses')
app.set('views', path.join(__dirname, '../views'))

//Rutas
app.get('/home', getHome)

app.get('/productDetail',getProduct);

app.get('/cart',getCart );

app.get('/inicioSesion', getInicio);

app.get('/registro',getRegistro);

module.exports =  app 