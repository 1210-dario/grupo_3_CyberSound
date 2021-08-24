const { users } = require('../data/users/users');

module.exports = (req,res,next) =>{
    if(req.cookies.usuario != undefined && req.session.userLogin == undefined){
        const userLogin = users.find(user=>user.email === req.cookies.usuario)
        req.session.userLogin = userLogin;
    }
    next();
}

// Funcion para pasar al session lo que nos llega por cookies, falta aplicarlo al app.js para probarlo/testearlo 