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
            image: 'default.png'
        }
        users.push(usuario)

        guardar(users);
        // A donde debe redirigir ? al home o a las config de usuario?
        res.redirect('./register')
    },

    findByEmail: (email)=>{
        return users.find(user=>user.email === email)
    },

    userLogin: async  (req,res)=>{
        console.log(users);
        const userLogin = users.find(user=>user.email === req.body.email && bcrypt.compareSync(req.body.password, user.password))
        if(!userLogin){
            //Aca se debe redireccionar al Login con el error('Credenciales incorrectas o usuario/password incorrectas')
            res.send('El usuario no existe o la contraseña es incorrecta')
        }
        req.session.userLogin = userLogin;

        /* Aplicacion de Cookie */
        res.cookie('usuario',userLogin.email, { maxAge: 60000 });
        // A donde debe redirigir ? al home o a las config de usuario?
        // Se manda la informacion osea la info del usuario logueado, como lo mostramos en la vista?   
        res.redirect('./login', userLogin, title='login')
    }
}