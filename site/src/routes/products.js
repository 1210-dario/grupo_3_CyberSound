var express = require('express');
var router = express.Router();
const { productList, productDetail, cart, productAdd,productEdit, actualizar, eliminar } = require('../controllers/productsController');


/* GET Products  */

router.get('/productList', productList);
router.get('/productDetail', productDetail);
router.get('/cart', cart);

router.get('/productAdd', productAdd);
router.get('/productEdit/:id', productEdit);
router.put('/productEdit/:id', actualizar)
router.delete('/productDelete/:id', eliminar)


module.exports = router;
