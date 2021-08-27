
module.exports = (req,res,next) =>{
    if(req.cookies.usuario != undefined && req.session.userLogin == undefined){
        req.session.userLogin = req.cookies.usuario;
    }
    next();
}