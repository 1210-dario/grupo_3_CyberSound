var express = require('express');
var router = express.Router();
const { productList, productDetail, cart, productAdd, productEdit, crear } = require('../controllers/productsController');


/* GET Products  */

router.get('/productList', productList);
router.get('/productDetail/:id', productDetail);
router.get('/cart', cart);
router.get('/productAdd', productAdd);
router.post('/productAdd', crear);
router.get('/productEdit/:id', productEdit);
router.post('/productEdit/:id', productEdit);
module.exports = router;
