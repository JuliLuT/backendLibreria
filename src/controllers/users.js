const users = require('../../models').users;

const getAll = (req, res) => {
    return users.findAll()
        .then(users => res.status(200).send(users))
        .catch(error => res.status(404).send(error))
};
const getOne = (req, res) => {
    const { id } = req.params
    return users.findOne({ where: { id: id } })
        .then(users => res.status(200).send(users))
        .catch(error => res.status(404).send(error))
}
const create = (req, res) => {
    const user = { username, email, password } = req.body
    return users.create({
        username: username,
        email: email,
        password: password
    })
        .then(users => res.status(201).send(users))
        .catch(error => res.status(500).send(error))
}

const update = async (req, res) => {
    const { id } = req.params
    const { username, email, password } = req.body
    user = await users.findOne({ where: { id: id } })
    if (!user) return res.status(404).json({ erorr: 'El usuario no se encuentra en nuestra base de datos' })
    return users.update({
        username: username,
        email: email,
        password: password
    }, { where: { id: id } })
        .then(users => res.status(201).send(users))
        .catch(error => res.status(500).send(error))
}
const deleteOne = async (req, res) => {
    const { id } = req.params
    user = await users.findOne({ where: { id: id } })
    if (!user) return res.status(404).json({ erorr: 'El usuario no se encuentra en nuestra base de datos' })
    return users.destroy({ where: { id: id } })
        .then(users => res.status(201).send(users))
        .catch(error => res.status(500).send(error))
}
module.exports = { getAll, getOne, create, update, deleteOne }