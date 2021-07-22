var express = require('express');
var router = express.Router();
const { productList, productDetail, cart, productAdd } = require('../controllers/productsController');


/* GET Products  */

router.get('/productList', productList);
router.get('/productDetail', productDetail);
router.get('/cart', cart);
router.get('/productAdd', productAdd);

module.exports = router;
