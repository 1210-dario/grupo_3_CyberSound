var express = require('express');
const path = require('path')
var router = express.Router();
const { productList, productDetail, cart, productAdd, productEdit, crear, actualizar, eliminar, productAdmin, search } = require('../controllers/productsController');

/*     Multer     */

const upload = require('../middlewares/productsMulter');

const addProductCheck = require('../middlewares/addProductCheck');
const checkRole = require('../middlewares/checkRole');

/* GET Products  */

router.get('/productList/:categoryId', productList);
router.get('/productDetail/:id', productDetail);
router.get('/cart', cart);
router.get('/search', search);

/*     Routes Admin   */

router.get('/productAdmin', checkRole ,productAdmin); 
router.get('/productAdd',checkRole, productAdd);  
router.post('/productAdd',checkRole ,upload.array('images'), addProductCheck, crear); 
router.get('/productEdit/:id',checkRole,productEdit); 
router.put('/productEdit/:id',checkRole,upload.array('images'),actualizar);   
router.delete('/productDelete/:id',checkRole, eliminar);


module.exports = router;
