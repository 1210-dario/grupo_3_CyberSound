var express = require('express');
const path = require('path')
var router = express.Router();
const { productList, productDetail, cart, productAdd, productEdit, crear, actualizar, eliminar, productAdmin } = require('../controllers/productsController');

/*     Multer     */

const upload = require('../middlewares/productsMulter');

const checkRole = require('../middlewares/checkRole')

/* GET Products  */

router.get('/productList', productList);
router.get('/productDetail/:id', productDetail);
router.get('/cart', cart);

/*     Routes Admin   */

router.get('/productAdmin', checkRole ,productAdmin) // checkRole
router.get('/productAdd',checkRole, productAdd);  // checkRole
router.post('/productAdd',checkRole ,upload.array('images'), crear); // checkRole
router.get('/productEdit/:id',checkRole,productEdit); //checkRole
router.put('/productEdit/:id',checkRole,actualizar);   //checkRole
router.delete('/productDelete/:id',checkRole, eliminar);


module.exports = router;
