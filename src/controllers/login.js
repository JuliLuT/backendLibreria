const {validationResult } = require('express-validator');

const obtenerVista = (req, res) => {
    res.render('formInicioSesion')
}


module.exports = {obtenerVista}