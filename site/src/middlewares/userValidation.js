const { check , validationResult, body } = require('express-validator');
const { findByEmail } = require('../controllers/usersController')

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
            throw new Error('El email ya esta registrado')
        }
    }
);

const _passwordRequired = check('password').not().isEmpty().withMessage('La contraseña es obligatoria').isLength({min:6,max:15}).withMessage('La contraseña debe tener entre 6 y 12 caracteres');
const _password2Required = check('password2').not().isEmpty().withMessage('La contraseña2 es obligatoria');

const _passwordValidation = body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')

const validResult = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return res.render('./users/register',{
            title: 'Register',
            old : req.body,
            errores : errors.mapped()
        })    
    }   
    next();
};


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
    validResult
]

const postLoginRequestValidations = [
    _emailRequired,
    _emailValid,
    _passwordRequired,
    validResult
]


module.exports = {
    postRegisterRequestValidations,
    postLoginRequestValidations,
};
