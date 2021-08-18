var express = require('express');
const path = require('path')
var router = express.Router();
const { productList, productDetail, cart, productAdd, productEdit, crear, actualizar, eliminar } = require('../controllers/productsController');

/*     Multer     */

const upload = require('../middlewares/productsMulter');


/* GET Products  */

router.get('/productList', productList);
router.get('/productDetail/:id', productDetail);
router.get('/cart', cart);

router.get('/productAdd', productAdd);
router.post('/productAdd',upload.array('images'), crear);
router.get('/productEdit/:id', productEdit);
router.put('/productEdit/:id', actualizar);
router.delete('/productDelete/:id', eliminar);


module.exports = router;
