module.exports = (req,res,next) => {
    if(req.session.userLogin && req.session.userLogin.role === 'admin'){
       next();
    }else{
        res.redirect('/')
    }
}