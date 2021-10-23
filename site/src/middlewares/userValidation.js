const { check , body } = require('express-validator');
const { findByEmail } = require('../controllers/usersController');
const {User} = require('../database/models');
const bcrypt = require('bcryptjs');

const _nameRequired = check('nombre').not().isEmpty().withMessage('El nombre es obligatorio').isLength({min:2}).withMessage('El nombre debe contener al menos 2 caracteres');
const _nameType = check('nombre').isAlpha().withMessage('El nombre solo debe contener letras');
const _lastNameRequired = check('apellido').not().isEmpty().withMessage('El apellido es obligatorio').isLength({min:2}).withMessage('El apellido debe contener al menos 2 caracteres');
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

const _passwordRequired = check('password').not().isEmpty().withMessage('La contraseña es obligatoria').isLength({min:8,max:15}).withMessage('La contraseña debe tener entre 8 y 15 caracteres');
const _password2Required = check('password2').not().isEmpty().withMessage('Debe volver a ingresar su contraseña');

const _equalPasswordValidation = body('password2')
    .custom((value,{req}) => {
        if(value.trim() !== req.body.password.trim()){
            throw new Error('Las contraseñas deben coincidir')
        }
        return true
    }).withMessage('Las contraseñas deben coincidir')

const _passwordValidAlphaNumeric = body('password').custom((value) =>{
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    if(!regExPass.test(value)){
        throw new Error('La contraseña debe tener entre 8 y 15 caractres, un número y una mayúscula')
    }
    return true
}).withMessage('La contraseña debe tener entre 8 y 15 caractres, un número y una mayúscula');

const _condicionsRequired = check('condiciones')
.isString('on').withMessage('Debes aceptar los términos y condiciones')

const _credentialsValidation = body('email')
.custom(async (value,{req}) => {
    let usuario = await User.findOne({where: { email: value}});

    if (bcrypt.compareSync(req.body.password,usuario.password)){
        return true
    }else{
        throw new Error('credenciales inválidas')
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
    _passwordValidAlphaNumeric,
    _equalPasswordValidation,
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
