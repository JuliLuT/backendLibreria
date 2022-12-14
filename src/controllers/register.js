const {validationResult } = require('express-validator');

const obtenerVista = (req, res) => {
    res.render('formRegistro.ejs')
}

module.exports ={obtenerVista}