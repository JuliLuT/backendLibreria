const express= require('express');
const {body,validationResult } = require('express-validator');
const app= express.Router()

const procesarForm = (req, res, next) => {
    const body = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
module.exports= {app, procesarForm}
