const express = require('express');
const { body } = require('express-validator');
const loginController = require('../controllers/login');
const app = express.Router();
const middle = require('../routers/middleware');
const bCrypt = require('bcrypt');
const saltRounds = 10;
const userCont=require('../controllers/login');


app.get('/',userCont.getAll);
app.get('/:id',userCont.getOne);
app.post('/',userCont.create);
app.put('/:id',userCont.update);
app.delete('/:id', userCont.deleteOne);

app.get('/', loginController.obtenerVista)
app.post('/', (req, res, next) => {
    const password = req.body.Pass
    const passwordHashed = bCrypt.hashSync(password, 10);
    console.log(passwordHashed)
    next();
});

app.post('/',[
    body('userName').isEmail(),
    body('Pass').isLength({ min: 5 })]
    ,middle.procesarForm);

module.exports = app