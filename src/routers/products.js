const express = require('express');
const app = express.Router();
const fs = require('fs');

app.get('/:id', (req, res) => {
    const { id } = req.params
    const dataBase = fs.readFileSync('./src/dataBase.json', 'utf-8')
    const dataBaseParse = JSON.parse(dataBase);
    const product = dataBaseParse.filter(p => p.id=== parseInt(id))
    if (product.length === 0) {
        return res.render('../src/views/notFound')
    }

    res.send(product)
})
module.exports=app