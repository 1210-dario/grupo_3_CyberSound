const { productos, guardar } = require('../data/products/products');
const toThousand = require('../utils/toThounsand');
const conDescuento = require('../utils/conDescuento');
const cuotas = require('../utils/cuotas');
const fs = require('fs');
const path = require('path');

module.exports = {
    productList: (req, res) => {
        res.render('./products/productList', {
            title: 'Product List',
            productos : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products','productsDb.json'),'utf-8')),
        })
    },
    productDetail: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);

        res.render('./products/productDetail', {
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

            productos,
        })
    },
    crear: (req, res) => {      
        
      let multiImages = req.files.map(image => image.filename )
        const { name, description, images, cuotas, stock, price, discount, envioFree, masVendido, oferta, show, category, } = req.body;
         
        let producto = {
            id: productos[productos.length - 1].id + 1,
            name,
            description,
            images: req.files.length != 0 ? multiImages : ["H510-1.png", "H510-1.png", "H510-1.png", "H510-1.png"],
            cuotas: cuotas == undefined ? [1] : typeof(cuotas) === "string" ? this.cuotas = [Number(cuotas)] : cuotas ,
            stock: stock != undefined ? +stock : 0,
            price: price != undefined ? +price : 0,
            discount: discount != undefined ? +discount : 0,
            envioFree: envioFree != undefined ? true : false,
            masVendido: masVendido != undefined ? true : false,
            oferta: oferta != undefined ? true : false,
            show: show != undefined ? true : false,
            category,
        }

        productos.push(producto)
        guardar(productos)
        return res.redirect('/products/productList')
    },

    productEdit: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);
        res.render('./products/productEdit', {
            producto,
        })
    },
    actualizar: (req, res) => {
        let id = req.params.id;
        let { name, description, images, cuotas, stock, price, discount, envioFree, masVendido, oferta, show, category } = req.body;
        let productUpdated = {
            id: +id,
            name,
            description,
            images: ["H510-1.png", "H510-1.png", "H510-1.png", "H510-1.png"],
            cuotas: cuotas == undefined ? [1] : typeof(cuotas) === "string" ? this.cuotas = [Number(cuotas)] : cuotas ,
            stock: stock != undefined ? +stock : 0,
            price: price != undefined ? +price : 0,
            discount: discount != undefined ? +discount : 0,
            envioFree: envioFree != undefined ? true : false,
            masVendido: masVendido != undefined ? true : false,
            oferta: oferta != undefined ? true : false,
            show: show != undefined ? true : false,
            category
        }
        let productosModificados = productos.map(producto => producto.id === +id ? productUpdated : producto)
        guardar(productosModificados);
        res.redirect('/products/productList');
    },
    
    eliminar: (req,res) => {
        let id = req.params.id;

        let productosNew = productos.filter(producto => producto.id != id);
        guardar(productosNew);
        res.redirect('/products/productList');
    }
}