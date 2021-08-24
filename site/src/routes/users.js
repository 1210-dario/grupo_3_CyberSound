var express = require('express');
var router = express.Router();
const { register, login, userRegister, userLogin } = require('../controllers/usersController')
const {postRegisterRequestValidations , postLoginRequestValidations} = require('../middlewares/userValidation');

/* GET users listing. */

router.get('/register', register);
router.post('/register',postRegisterRequestValidations, userRegister);
router.get('/login', login);
router.post('/login',postLoginRequestValidations, userLogin);

module.exports = router;
