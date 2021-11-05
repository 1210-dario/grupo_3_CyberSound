const { productos, guardar } = require('../data/products/products');
const toThousand = require('../utils/toThounsand');
const conDescuento = require('../utils/conDescuento');
const cuotas = require('../utils/cuotas');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

module.exports = {
    productList: async (req, res) => {
        let proximos = await db.Banners.findAll({
            where: {
                name: 'carrousel secundario'
            },
            include: {
                all: true
            }
        })
        let productos;
        if (req.params.categoryId == 7) {
            productos = await db.Product.findAll({
                where: {
                    bestSeller: true
                },
                include: { all: true }
            })
            productos[0].category.name = 'Mas Vendidos';
        } else if (req.params.categoryId == 8) {
            productos = await db.Product.findAll({
                where: {
                    offer: true
                },
                include: { all: true }
            })
            productos[0].category.name = 'Ofertas';
        } else {
            productos = await db.Product.findAll({
                where: {
                    categoryId: req.params.categoryId
                },
                include: { all: true }
            })
        }
        res.render(`./products/productList`, {
            title: 'Product List',
            toThousand,
            conDescuento,
            productos,
            proximos,
        })
    },
    productDetail: (req, res) => {

        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { association: 'images' },
                { association: 'category' }
            ]
        }).then(producto => {
            db.Category.findOne({
                where: {
                    id: producto.categoryId
                },
                include: [
                    {
                        association: 'products',
                        include: [
                            { association: 'images' }
                        ]
                    }
                ]
            }).then(category => {
                return res.render('./products/productDetail', {
                    producto,
                    relacionados: category.products,
                    toThousand,
                    conDescuento,
                    cuotas,
                })
            })
        }).catch(error => console.log(error))
    },
    cart: (req, res) => {
        const cart = req.session.carrito;
        let contador = 0;
        let subtotal = 0;
        let total = 0;
        cart.forEach(element => {
            contador += element.quantity;
            subtotal += Number.parseFloat(element.totalPrice);
            total += Number.parseFloat(element.totalPrice);
        });
        console.log(contador, subtotal, total);
        res.render('./products/cart', {
            title: 'Cart',
            cart,
            contador,
            subtotal,
            total
        })
    },
    productAdd: (req, res) => {

        db.Category.findAll()
            .then(categorias => {
                return res.render('./products/productAdd', {
                    categorias,
                })
            }).catch(error => console.log(error))

    },
    crear: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, description, stock, price, discount, envioFree, masVendido, oferta, show, category, } = req.body;
            db.Product.create({

                name: name.trim(),
                description: description.trim(),
                price,
                discount: discount != undefined ? +discount : 0,
                stock: stock != undefined ? +stock : 0,
                shipping: envioFree != undefined ? true : false,
                offer: oferta != undefined ? true : false,
                bestSeller: masVendido != undefined ? true : false,
                showMenu: show != undefined ? true : false,
                categoryId: category
            }).then(product => {

                if (req.files) {
                    var images = req.files.map(imagen => {
                        return {
                            fileName: imagen.filename,
                            productId: product.id
                        }
                    });
                    db.Image.bulkCreate(images, { validate: true })
                        .then(() => console.log('Imagenes agreadas en la carpeta public'))
                }
                return res.redirect('productAdmin')
            }).catch(error => console.log(error))

        } else {
            db.Category.findAll()
                .then(categorias => {
                    return res.render('./products/productAdd', {
                        categorias,
                        errores: errors.mapped(),
                        old: req.body
                    })
                }).catch(error => console.log(error))
        }
    },
    productEdit: (req, res) => {
        let categorias = db.Category.findAll();
        let producto = db.Product.findByPk(req.params.id, {
            include: [
                { association: 'images' },
                { association: 'category' }
            ]
        });
        Promise.all([categorias, producto])
            .then(([categorias, producto]) => {
                return res.render('./products/productEdit', {
                    categorias,
                    producto
                })
            })
    },
    actualizar: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            const { name, description, stock, price, discount, envioFree, masVendido, oferta, show, category, } = req.body;

            db.Product.update(
                {
                    name: name.trim(),
                    description: description.trim(),
                    price,
                    discount: discount != undefined ? +discount : 0,
                    stock: stock != undefined ? +stock : 0,
                    shipping: envioFree != undefined ? true : false,
                    offer: oferta != undefined ? true : false,
                    bestSeller: masVendido != undefined ? true : false,
                    showMenu: show != undefined ? true : false,
                    categoryId: category
                },
                {
                    where: {
                        id: req.params.id
                    }
                }).then(() => {
                    if (req.files.length != 0) {
                        db.Image.destroy({
                            where: {
                                productId: req.params.id
                            }
                        }).then(() => {
                            var images = req.files.map(imagen => {
                                return {
                                    fileName: imagen.filename,
                                    productId: req.params.id
                                }
                            });
                            db.Image.bulkCreate(images, { validate: true })
                                .then(() => console.log('Imagenes agreadas en la carpeta public'))


                        })
                    }
                    return res.redirect('/')

                }).catch(err => console.log(err))

        } else {
            let categorias = db.Category.findAll();
            let producto = db.Product.findByPk(req.params.id, {
                include: [
                    { association: 'images' },
                    { association: 'category' }
                ]
            });
            Promise.all([categorias, producto])
                .then(([categorias, producto]) => {
                    return res.render('./products/productEdit', {
                        categorias,
                        producto,
                        errores: errors.mapped(),
                        old: req.body
                    })
                })
                .catch(err => console.log(err))
        }
    },

    eliminar: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.redirect('/products/productAdmin'))
            .catch(error => console.log(error))
    },
    productAdmin: (req, res) => {
        db.Product.findAll({
            include: [
                { association: 'images' },
                { association: 'category' },
            ]
        }).then(productos => res.render('./products/productAdmin', {
            productos
        }))
    },
    search: async (req, res) => {
        let proximos = await db.Banners.findAll({
            where: {
                name: 'carrousel secundario'
            },
            include: {
                all: true
            }
        })

        const result = await db.Product.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.substring]: req.query.keywords
                        }
                    },
                    {
                        description: {
                            [Op.substring]: req.query.keywords
                        }
                    }
                ]
            },
            include: { all: true }
        })

        console.log(result),
            res.render('./products/resultSearch', {
                title: 'Busqueda',
                proximos,
                result,
                toThousand,
                conDescuento,
                busqueda: req.query.keywords
            })
    },
}