const express = require('express');
const app = express.Router();
const userCont=require('../controllers/users');

app.get('/',userCont.getAll);
app.get('/:id',userCont.getOne);
app.post('/',userCont.create);
app.put('/:id',userCont.update);
app.delete('/:id', userCont.deleteOne);

module.exports=app