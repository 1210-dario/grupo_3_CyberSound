const { validationResult } = require('express-validator')
let bcrypt = require('bcryptjs');
const {User, Coupon, Role, Avatar} = require('../database/models');

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

    userRegister: async (req, res) => {
        
        const errors = validationResult(req);
        
        const { nombre, apellido, email, password } = req.body;

        if (errors.isEmpty()) {
            
            const usuario = await User.create({
                firstName: nombre.trim(),
                lastName: apellido.trim(),
                email,
                password: bcrypt.hashSync(password, 10),
                roleId: 2,
                avatarId: 1,
                coupon: [
                    {id: 1}
                ]
            }, {
                include: Coupon
            });

            const result = await User.findByPk(usuario.id,{
                include: { all: true }
            });
            
            req.session.userLogin = {
                nombre: result.firstName,
                apellido: result.lastName,
                id: result.id,
                role: result.role.dataValues.name.toLowerCase(),
                image: result.avatar.dataValues.name,
                email: result.email
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

    findByEmail: async (email) => {
        return await User.findOne({where: { email: email}})
    },

    userLogin: async (req, res) => {

        const errors = validationResult(req);

        const { email, remember } = req.body;

        if (errors.isEmpty()) {

            const userLogin = await User.findOne({where: { email: email},
                    include: { all: true }
            });

            req.session.userLogin = {
                nombre: userLogin.firstName,
                apellido: userLogin.lastName,
                id: userLogin.id,
                role: userLogin.role.dataValues.name.toLowerCase(),
                image: userLogin.avatar.dataValues.name,
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
    userProfile: async(req, res) => {
        const avatars = await Avatar.findAll();
        
        res.render('./users/userProfile',
            {
                title: 'User Profile', avatars
            });
    },
    userUpdate: async (req, res) => {
        let id = req.params.id;
        let { nombre, apellido, email, avatarId } = req.body;

        const userUpdated = await User.update({
            firstName: nombre.trim(),
            lastName: apellido.trim(),
            email,
            avatarId
        },{
            where: {id: id}
        });

        const userLogin = await User.findOne({where: { email: email},
            include: { all: true }
        });

        req.session.userLogin = {
            nombre: userLogin.firstName,
            apellido: userLogin.lastName,
            id: userLogin.id,
            role: userLogin.role.dataValues.name.toLowerCase(),
            image: userLogin.avatar.dataValues.name,
            email: userLogin.email
        }

        return res.redirect('/users/userProfile');
    },
    getAllUsers: async(req,res,next) => {
        try {
            const users = await User.findAll(); 
            return users;   
        } catch (err) {
            next(err)
        }
            
    },
    getOneUser: async(req,res,next) => {
        try{
            const userFound = await User.findByPk(req.params.id,{
                include: { all: true }
            });
            return userFound;
        } catch(err) {
            next(err)
        }  
    },
    deleteUser: async(req,res,next) => {
        try{
            const userDeleted = await User.destroy({
                where: {
                  id: req.params.id
                }
              });
              return userDeleted;
        } catch(err){
            next(err);
        }
    }
}