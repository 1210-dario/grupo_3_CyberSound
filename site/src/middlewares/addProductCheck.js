const {check} = require('express-validator');



module.exports = [
    check('name')
    .notEmpty().withMessage('Debes poner el nombre del producto'),

    check('description')
    .notEmpty().withMessage('Debes añadir una descripción al producto'),

    check('price')
    .notEmpty().withMessage('Debes ingresar el precio'),

    check('category')
    .notEmpty().withMessage('Indica la categoría'),
    
    check('discount')
    .isLength({
        min : 1,
        max : 100
    }).withMessage('El descuento debe ser del 1 al 100')
]