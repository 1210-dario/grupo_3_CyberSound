const { users, guardar} = require('../data/users/users');
let bcrypt = require('bcryptjs');

module.exports = {

    register: (req, res) => {
        res.render('./users/register', {
            title: 'Register',
        })
    },

    login: (req, res) => {
        res.render('./users/login', {
            title: 'Login',
        })
    },

    userRegister: (req,res)=>{
        const {nombre, apellido, email, password, password2, condiciones} = req.body;

        const usuario = {
            id: users[users.length - 1].id + 1,
            nombre,
            apellido,
            email,
            password: bcrypt.hashSync(password,10),
            condiciones: condiciones != undefined ? true : false,
            role: 'user',
            image: 'avatar.svg'
        }
        users.push(usuario)

        guardar(users);
        req.session.userLogin = {
            nombre : usuario.nombre,
            id : usuario.id,
            role : usuario.role,
            image : usuario.image,
            email : usuario.email
        }
        // A donde debe redirigir ? al home o a las config de usuario?
        res.redirect('../')
    },

    findByEmail: (email)=>{
        return users.find(user=>user.email === email)
    },

    userLogin: (req,res)=>{
        const userLogin = users.find(user=>user.email === req.body.email && bcrypt.compareSync(req.body.password, user.password))
        if(!userLogin){
            //Aca se debe redireccionar al Login con el error('Credenciales incorrectas o usuario/password incorrectas')
            res.send('El usuario no existe o la contraseña es incorrecta')
        }
        req.session.userLogin = {
            nombre : userLogin.nombre,
            id : userLogin.id,
            role : userLogin.role,
            image : userLogin.image,
            email : userLogin.email
        }
        if (req.body.remember != undefined){
        /* Aplicacion de Cookie */
        res.cookie('usuario',req.session.userLogin,{ maxAge: 60000 });    
        }  
        // A donde debe redirigir ? al home o a las config de usuario?
        return res.redirect('../')
    },
    logout : (req,res) =>{
        req.session.destroy();
        res.cookie('usuario',null,{maxAge : -1})
        return res.redirect('../')
    },
    userUpdate: (req,res)=>{
        let id = req.params.id;
        let userUpdated =  req.body;
        let userDbModified = users.map(user => user.id === +id ? userUpdated : user)
        guardar(userDbModified);
        res.redirect('./users/profile');
    }
}