const toThousand = require('../utils/toThounsand'); 
const conDescuento = require('../utils/conDescuento');
const db = require('../database/models')
module.exports = {
    
    index: (req, res) => {
        let productos = db.Product.findAll({
            include : [
                {association : 'images'},
                {association : 'category'}
            ]
        })
        let banner = db.Banners.findByPk(1,{
            include : { all : true}
        })
        Promise.all([productos,banner])
         .then(([productos,banner,]) =>
             res.render('./index/index',{
            banner,
            productos,
            toThousand,
            conDescuento,
        })).catch(err => console.log(err))
        
    }
    
}