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
        let carrousel = db.Banner.findAll({
        })
        .then((carrousel) => {
            return res.send(carrousel)

        })
        // Promise.all([productos,carrousel])
        // .then(([productos,carrousel,]) =>
        //      res.render('./index/index',{
        //     productos,
        //     carrousel,
        //     toThousand,
        //     conDescuento,
        // }))
        .catch(error => console.log(error))
        
    }
    
}