const {check} = require('express-validator');



module.exports = [
    check('name')
    .notEmpty().withMessage('Debes poner el nombre del producto')
    .isLength({min : 6}).withMessage('Debes ingresar minimo 5 caracteres para el nombre del producto'),

    check('description')
    .notEmpty().withMessage('Debes añadir una descripción al producto'),

    check('price')
    .notEmpty().withMessage('Debes ingresar el precio')
    .isNumeric().withMessage('Solo numeros'),

        
]