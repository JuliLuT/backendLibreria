const express = require('express');
const app = express.Router();
const productCont=require('../controllers/products');

app.get('/',productCont.getAll);
app.get('/:id',productCont.getOne);
app.post('/',productCont.create);
app.put('/:id',productCont.update);
app.delete('/:id', productCont.deleteOne);

module.exports=app