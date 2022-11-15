const express = require('express');
const { body } = require('express-validator');
const registerController = require('../controllers/register');
const app = express.Router();
const middle = require('../routers/middleware')


app.get('/', registerController.obtenerVista);

app.post('/registro', [
    body('name').notEmpty().isAlpha(),
    body('email').notEmpty().isEmail(),
    body('Pass').notEmpty().isNumeric()]
    ,middle.procesarForm)

module.exports = app
