const { productos, guardar } = require('../data/products/products');
const toThousand = require('../utils/toThounsand');
const conDescuento = require('../utils/conDescuento');
const cuotas = require('../utils/cuotas');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { log } = require('console');

module.exports = {
    productList: (req, res) => {
        res.render('./products/productList', {
            title: 'Product List',
            toThousand,
            conDescuento,
            productos : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products','productsDb.json'),'utf-8')),
        })
    },
    productDetail: (req, res) => {
        
        db.Product.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {association : 'images'},
                {association : 'category'}
            ]
        }).then(producto => {
            console.log(producto);
            db.Category.findOne({
                where : {
                    id : producto.categoryId
                },
                include : [
                    {
                        association : 'products',
                        include : [
                            {association : 'images'}
                        ]
                    }
                ]
            }).then(category =>{
                return res.render('./products/productDetail',{
                    producto,
                    relacionados : category.products,
                    toThousand,
                    conDescuento,
                    cuotas,
                })
            })
        }).catch(error => console.log(error))
    },
    cart: (req, res) => {
        res.render('./products/cart', {
            title: 'Cart',
        })
    },
    productAdd: (req, res) => {
       
        db.Category.findAll()
        .then(categorias => {
            return res.render('./products/productAdd',{
                categorias,
            })
        }).catch(error => console.log(error))
       
    },
    crear: (req, res) => {      
        const { name, description,cuotas, stock, price, discount, envioFree, masVendido, oferta, show, category, } = req.body;
        db.Product.create({
        
            name : name.trim(),
            description : description.trim(),
            price,
            discount : discount != undefined ? +discount : 0,
            quotas : cuotas.toString(),
            stock : stock != undefined ? +stock : 0,
            shipping : envioFree != undefined ? true : false,
            offer : oferta != undefined ? true : false,
            bestSeller : masVendido != undefined ? true : false,
            showMenu : show != undefined ? true : false,
            categoryId: category            
        }).then( product => {
            
            if(req.files){
                var images = [];
                var imagenes = req.files.map(imagen => imagen.filename);
                imagenes.forEach(img => {
                    var image = {
                        fileName : img,
                        productId : product.id
                    }
                    images.push(image)
                });

                db.Image.bulkCreate(images,{validate : true})
                    .then( () => console.log('Imagenes agreadas en la carpeta public'))
            }
            return res.redirect('productAdmin')
        }).catch(error => console.log(error))
    },
    productEdit: (req, res) => {
        let categorias = db.Category.findAll();
        let producto = db.Product.findByPk(req.params.id);
        Promise.all([categorias,producto])
        .then(([categorias,producto]) => {
            console.log(producto)
            return res.render('./products/productEdit',{
                categorias,
                producto
            })
        })       
    },
    actualizar: (req, res) => {

        const { name, description,cuotas, stock, price, discount, envioFree, masVendido, oferta, show, category, } = req.body;
     
        db.Product.update(
            {
                name : name.trim(),
            description : description.trim(),
            price,
            discount : discount != undefined ? +discount : 0,
            quotas : cuotas.toString(),
            stock : stock != undefined ? +stock : 0,
            shipping : envioFree != undefined ? true : false,
            offer : oferta != undefined ? true : false,
            bestSeller : masVendido != undefined ? true : false,
            showMenu : show != undefined ? true : false,
            categoryId: category    
            },
            {
                where : {
                    id : req.params.id
                }
            }
        ).then( () =>   res.redirect('/'))
        .catch(error => console.log(error))
    },
    
    eliminar: (req,res) => {
        db.Product.destroy({
            where : {
                id : req.params.id
            }
        }).then( () => res.redirect('./products/productAdmin'))
        .catch(error => console.log(error))      
    },
    productAdmin : (req,res) => {
        db.Product.findAll({
            include : [
                {association : 'category'},
            ]
        }).then(productos => res.render('./products/productAdmin',{
            productos
        }))
    }
}