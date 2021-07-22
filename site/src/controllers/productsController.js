module.exports = {
    productList: (req, res) => {
        res.render('productList', {
            title: 'Product List',
        })
    },
    productDetail: (req, res) => {
        res.render('productDetail', {
            title: 'Product Detail',
        })
    },
    cart: (req, res) => {
        res.render('cart', {
            title: 'Cart',
        })
    },
    productAdd: (req, res) => {
        res.render('productAdd', {
            title: 'Product Add',
        })
    },
}