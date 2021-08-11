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
    guardar: (req,res) => {
      const {name,description,category,price,discount,image,envioFree} = req.body;
     
      let producto = {
          id: productos[productos.length - 1].id + 1,
          name,
          description,
          category,
          price,
          discount,
          image : ['teclado-cart.jpg','teclado-cart.jpg','teclado-cart.jpg','teclado-cart.jpg'],
          envioFree : envioFree != undefined ? true : false ,
      }
      
      productos.push(producto)
      return res.send(productos)
    },

    productEdit: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id);
        res.render('./products/productEdit', {
            producto,

        })
    },
}