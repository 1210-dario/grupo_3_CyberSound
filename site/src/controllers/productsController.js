const {productos,guardar} = require('../data/products/products');
const toThousand = require('../utils/toThounsand');
const conDescuento = require('../utils/conDescuento');
const cuotas = require('../utils/cuotas');

module.exports = {
    productList: (req, res) => {
        res.render('./products/productList', {
            title: 'Product List',
        })
    },
    productDetail: (req, res) => {
        res.render('./products/productDetail', {
            title: 'Product Detail',
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
            title: 'Product Edit',
        })
    },
    actualizar: (req, res) => {
        let id = req.params.id ;
        let {name, description, images, cuotas, stock, price, discount, envioFree, masVendido, oferta, show, category} = req.body ;
        let productUpdated = {
            id,
            name,
            description,
            images: ["teclado-cart.jpg","teclado-cart.jpg","teclado-cart.jpg","teclado-cart.jpg"],
            cuotas,
            stock,
            price,
            discount,
            envioFree: envioFree != undefined ? true : false,
            masVendido,
            oferta,
            show,
            category
        }

        let productosUpdated = productos.forEach(producto=>{if(id === producto.id){
            producto = productUpdated
        }})
        guardar(productosUpdated);
        res.redirect('/products/productList');
    },
    eliminar: (req,res) => {
        let id = req.params.id;

        let productosNew = productos.filter(producto=>producto.id != id);
        guardar(productosNew);
        res.redirect('/productList');
    }
}