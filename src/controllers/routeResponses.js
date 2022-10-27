const getHome = (req, res) => {
    res.render('./home')
}


const getProduct = (req, res) => {
    res.render('./productDetail')
}


const getCart = (req, res) => {
    res.render('./cart')
}


const getInicio = (req, res) => {
    res.render('./formInicioSesion')
}
const getRegistro = (req, res) => {
    res.render('./formRegistro')
}
module.exports = {getHome,getCart,getInicio,getProduct,getRegistro}
