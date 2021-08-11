const {productos,guardar} = require('../data/products/products');
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
    crear: (req,res) => {
      const {name,description,images, cuotas,stock,price,discount,envioFree,oferta,show,category,} = req.body;
     
      let producto = {
          id: productos[productos.length - 1].id + 1,
          name,
          description,
          images: ["teclado-cart.jpg","teclado-cart.jpg","teclado-cart.jpg","teclado-cart.jpg"],
          cuotas,
          stock,
          price,
          discount,
          envioFree : envioFree != undefined ? true : false ,
          oferta,
          show,
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
}