const productos = require('../data/products/products');
const toThousand = require('../utils/toThounsand'); 
const conDescuento = require('../utils/conDescuento');
const cuotas = require('../utils/cuotas');


module.exports = {
    productList: (req, res) => {
        res.render('./products/productList', {
            title: 'Product List',
            productos,
        })
    },
    productDetail: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);

        res.render('./products/productDetail', {
            title: 'Product Detail',
            producto,
            productos,
            toThousand,
            conDescuento,
            cuotas,
        })
    },
    cart: (req, res) => {
        res.render('./products/cart', {
            title: 'Cart',
        })
    },
    productAdd: (req, res) => {
        res.render('./products/productAdd', {
            title: 'Product Add',
        })
    },
    productEdit: (req, res) => {
        res.render('./products/productEdit', {
            title: 'Product Add',
        })
    },
}