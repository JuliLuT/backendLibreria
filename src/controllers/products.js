const products = require('../../models').products

const getAll = (req, res) => {
    return products.findAll()
        .then(products => res.status(200).send(products))
        .catch(error => res.status(404).send(error))
};
const getOne = async (req, res) => {
    const { id } = req.params
product = await products.findOne({ where: { id: id } })
    if (!product) return res.status(404).render("../src/views/notFound")
    return products.findOne({ where: { id: id } })
        .then(products => res.status(200).send(products))
        .catch(error => res.status(404).send(error))
}
const create = (req, res) => {
    const product = { name, description, price } = req.body
    return products.create({
        name: name,
        description: description,
        price: price
    })
        .then(products => res.status(201).send(products))
        .catch(error => res.status(500).send(error))
}

const update = async (req, res) => {
    const { id } = req.params
    const { name, description, price } = req.body
    product = await products.findOne({ where: { id: id } })
    if (!product) return res.status(404).json({ erorr: 'El producto especificado no se encuentra en nuestra base de datos' })
    return products.update({
        name: name,
        description: description,
        price: price
    }, { where: { id: id } })
        .then(products => res.status(201).send(products))
        .catch(error => res.status(500).send(error))
}
const deleteOne = async (req, res) => {
    const { id } = req.params
    product = await products.findOne({ where: { id: id } })
    if (!product) return res.status(404).json({ erorr: 'El producto especificado no se encuentra en nuestra base de datos' })
    return products.destroy({ where: { id: id } })
        .then(products => res.status(201).send(products))
        .catch(error => res.status(500).send(error))
}
module.exports = { getAll, getOne, create, update, deleteOne }