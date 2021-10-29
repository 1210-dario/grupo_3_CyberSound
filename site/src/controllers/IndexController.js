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
        let banners = db.Banners.findAll( { where : {name: 'carrousel principal'},
            include : { all : true }
        })
        let proximos = db.Banners.findAll( { where : {name: 'carrousel secundario'},
            include : { all : true }
        })
        Promise.all([productos,banners,proximos])
         .then(([productos,banners,proximos]) =>
             res.render('./index/index',{
            banners,
            proximos,
            productos,
            toThousand,
            conDescuento,
        })).catch(err => console.log(err))
        // .then(banners =>{
        //     return res.send(banners)
        // })
        
    }
    
}