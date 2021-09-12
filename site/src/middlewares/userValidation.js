const { check , body } = require('express-validator');
const { findByEmail } = require('../controllers/usersController');
const { users } = require('../data/users/users');
const bcrypt = require('bcryptjs');

const _nameRequired = check('nombre').not().isEmpty().withMessage('El nombre es obligatorio');
const _nameType = check('nombre').isAlpha().withMessage('El nombre solo debe contener letras');
const _lastNameRequired = check('apellido').not().isEmpty().withMessage('El apellido es obligatorio');
const _lastNameType = check('apellido').isAlpha().withMessage('El apellido solo debe contener letras');

const _emailRequired = check('email').not().isEmpty().withMessage('El email es obligatorio');
const _emailValid = check('email').isEmail().withMessage('El email debe ser un email valido');
const _emailExist = check('email').custom(
    async (email = '') => {
        const userFound = await findByEmail(email);
        if(userFound){
            throw new Error('El email ya se encuentra registrado')
        }
    }
);

const _passwordRequired = check('password').not().isEmpty().withMessage('La contraseña es obligatoria').isLength({min:6,max:15}).withMessage('La contraseña debe tener entre 6 y 12 caracteres');
const _password2Required = check('password2').not().isEmpty().withMessage('Debe volver a ingresar su contraseña');

const _passwordValidation = body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas deben coincidir')

const _condicionsRequired = check('condiciones')
.isString('on').withMessage('Debes aceptar los términos y condiciones')

const _credentialsValidation = body('email')
.custom((value,{req}) => {
    let usuario = users.find(user => user.email === value && bcrypt.compareSync(req.body.password,user.password));
    if (usuario){
        return true
    }else{
        return false
    }
}).withMessage('credenciales inválidas')


const postRegisterRequestValidations = [
    _nameRequired,
    _nameType,
    _lastNameRequired,
    _lastNameType,
    _emailRequired,
    _emailValid,
    _emailExist,
    _passwordRequired,
    _password2Required,
    _passwordValidation,
    _condicionsRequired
]

const postLoginRequestValidations = [
    _emailRequired,
    _emailValid,
    _passwordRequired,
    _credentialsValidation
]


module.exports = {
    postRegisterRequestValidations,
    postLoginRequestValidations,
};
