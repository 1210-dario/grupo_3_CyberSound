const {productos} = require('../data/products/products');
const toThousand = require('../utils/toThounsand'); 

module.exports = {
    
    index: (req, res) => {

       
        
        return res.render('./index/index',{
            
            productos,
            toThousand,
        })
    },
    
}