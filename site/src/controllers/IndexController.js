const toThousand = require('../utils/toThounsand'); 
const conDescuento = require('../utils/conDescuento');
const db = require('../database/models')
module.exports = {
    
    index: (req, res) => {
        db.Product.findAll({
            include : [
                {association : 'images'},
                {association : 'category'}
            ]
        }).then(productos =>
             res.render('./index/index',{
            productos,
            toThousand,
            conDescuento,
        }))
        
    }
       
        
    //     return res.render('./index/index',{
            
    //         productos,
    //         toThousand,
    //         conDescuento,
    //     })
    // },
    
}