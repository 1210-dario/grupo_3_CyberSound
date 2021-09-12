const { users, guardar, avatars } = require('../data/users/users');
const { validationResult } = require('express-validator')
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

    userRegister: (req, res) => {

        const errors = validationResult(req);

        const { nombre, apellido, email, password, condiciones } = req.body;

        if (errors.isEmpty()) {

            const usuario = {
                id: users[users.length - 1].id + 1,
                nombre,
                apellido,
                email,
                password: bcrypt.hashSync(password, 10),
                condiciones: condiciones != undefined ? true : false,
                role: 'user',
                image: 'avatar.svg'
            }
            users.push(usuario)

            guardar(users);
            req.session.userLogin = {
                nombre: usuario.nombre,
                id: usuario.id,
                role: usuario.role,
                image: usuario.image,
                email: usuario.email
            }
            return res.redirect('../');
        }else{
            return res.render('./users/register',{
                title: 'Register',
                old : req.body,
                errores : errors.mapped()
            }) 
        }


    },

    findByEmail: (email) => {
        return users.find(user => user.email === email)
    },

    userLogin: (req, res) => {

        const errors = validationResult(req);

        const { email, remember } = req.body;

        if (errors.isEmpty()) {

            const userLogin = users.find(user => user.email === email);

            req.session.userLogin = {
                nombre: userLogin.nombre,
                apellido: userLogin.apellido,
                id: userLogin.id,
                role: userLogin.role,
                image: userLogin.image,
                email: userLogin.email
            }

            if (remember != undefined) {
                /* Aplicacion de Cookie */
                res.cookie('usuario', req.session.userLogin, { maxAge: 60000 });
            }
            // A donde debe redirigir ? al home o a las config de usuario?
            return res.redirect('../')
        }else{
            console.log(errors.mapped());
            return res.render('./users/login',{
                title: 'Login',
                errores : errors.mapped()
            })
        }


    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('usuario', null, { maxAge: -1 })
        return res.redirect('../')
    },
    userProfile: (req, res) => {
        res.render('./users/userProfile',
            {
                title: 'User Profile', avatars
            });
    },
    userUpdate: (req, res) => {
        let id = req.params.id;
        let { nombre, apellido, email, image } = req.body;
        let userUpdated = users.find(user => user.id === +id);
        userUpdated.nombre = nombre;
        userUpdated.apellido = apellido;
        userUpdated.email = email;
        userUpdated.image = image;

        let userDbModified = users.map(user => user.id === +id ? userUpdated : user)
        console.log('Entre al update de User');
        guardar(userDbModified);

        req.session.userLogin = {
            nombre: userUpdated.nombre,
            apellido: userUpdated.apellido,
            id: userUpdated.id,
            role: userUpdated.role,
            image: userUpdated.image,
            email: userUpdated.email
        }

        return res.redirect('/users/userProfile');
    }
}