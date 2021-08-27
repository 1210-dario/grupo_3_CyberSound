const {productos} = require('../data/products/products');
const toThousand = require('../utils/toThounsand'); 
const conDescuento = require('../utils/conDescuento');
module.exports = {
    
    index: (req, res) => {

       
        
        return res.render('./index/index',{
            
            productos,
            toThousand,
            conDescuento,
        })
    },
    
}