var express = require('express');
var router = express.Router();
const { register, login, userRegister, userLogin, logout, userProfile, userUpdate, findByUserEmail, deleteUser} = require('../controllers/usersController')
const {postRegisterRequestValidations , postLoginRequestValidations} = require('../middlewares/userValidation');

/* GET users listing. */

router.get('/register', register);
router.post('/register',postRegisterRequestValidations, userRegister);

router.get('/login', login);
router.post('/login',postLoginRequestValidations, userLogin);

router.get('/logout', logout);

router.get('/userProfile', userProfile);
router.put('/userProfile/:id', userUpdate);
router.delete('/deleteUser/:id', deleteUser);

router.get('/email/:email', findByUserEmail);

module.exports = router;
