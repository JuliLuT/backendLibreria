const express = require('express');
const { body, validationResult } = require('express-validator');
const loginController = require('../controllers/login');
const app = express.Router();
const middle = require('../routers/middleware');
const bCrypt = require('bcrypt');
const saltRounds = 10;


app.get('/inicioSesion', loginController.obtenerVista)

app.post('/', (req, res) => {
    const  password  = req.body.Pass
    const passwordHashed = bCrypt.hashSync(password, 10);
});

 
app.post('/',
    body('userName').notEmpty(),
    body('Pass').isLength({min: 5})
    ,middle.procesarForm
);



module.exports = app