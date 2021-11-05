const db = require('../database/models');

const cartVerify = (lista, id) => {
    const pos = lista.findIndex((prod)=> prod.id.toString() === id);
    
    if (pos !=-1) {
        return pos;
    }
    return pos;
};

module.exports = {
    addProduct: async (req, res) => {

        if(req.session.carrito == undefined){
            req.session.carrito = [];
        }
        let cart = req.session.carrito;
        
        const product = await db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: { all : true }
        })

        if(product){
            const pos = cartVerify(cart, req.params.id);
            if(pos === -1){
                const datos = {
                    id: product.id,
                    name: product.name,
                    images: product.images,
                    description: product.description,
                    price: Number.parseFloat(product.price).toFixed(2),
                    totalPrice: Number.parseFloat(product.price).toFixed(2),
                    category: product.category,
                    quantity: 1,
                }
                cart.push(datos);
            }else{
                const dato = cart[pos];
                dato.quantity += 1;
                const totalPrice = dato.quantity * Number.parseFloat(dato.price).toFixed(2); 
                dato.totalPrice = totalPrice.toFixed(2);
                cart[pos] = dato;
            }
            req.session.carrito = cart;
            res.status(200).json(req.session.carrito);
        }


    },
    removeProduct: async (req, res) => {
        let cart = req.session.carrito;

        const pos = cartVerify(cart, req.params.id);

        const dato = cart[pos];

        if (dato.quantity > 1) {
            dato.quantity -= 1;
            const totalPrice = dato.quantity * Number.parseFloat(dato.price).toFixed(2) 
            dato.totalPrice = totalPrice.toFixed(2);
            cart[pos] = dato;
            req.session.carrito = cart;
            res.status(200).json(req.session.carrito);
        } else {
            const newCart = cart.filter((data) => data.id != req.params.id );
            req.session.carrito = newCart;
            res.status(200).json(req.session.carrito);
        }

    },
    showCart: async (req, res) => {
        res.status(200).json(req.session.carrito);
    }
}