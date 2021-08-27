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

router.get('/productAdmin',checkRole,productAdmin)
router.get('/productAdd',checkRole, productAdd);
router.post('/productAdd',upload.array('images'), checkRole, crear);
router.get('/productEdit/:id', checkRole, productEdit);
router.put('/productEdit/:id',checkRole, actualizar);
router.delete('/productDelete/:id',checkRole, eliminar);


module.exports = router;
