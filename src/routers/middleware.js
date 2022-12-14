const express= require('express');
const {body,validationResult } = require('express-validator');
const app= express.Router()

const procesarForm = (req, res) => {
    const user = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
    } 
    return res.json('Hola!')
}
module.exports= {app, procesarForm}
