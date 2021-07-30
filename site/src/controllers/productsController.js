module.exports = {
    productList: (req, res) => {
        res.render('./products/productList', {
            title: 'Product List',
        })
    },
    productDetail: (req, res) => {
        res.render('./products/productDetail', {
            title: 'Product Detail',
        })
    },
    cart: (req, res) => {
        res.render('./products/cart', {
            title: 'Cart',
        })
    },
    productAdd: (req, res) => {
        res.render('./products/productAdd', {
            title: 'Product Add',
        })
    },
    productEdit: (req, res) => {
        res.render('./products/productEdit', {
            title: 'Product Add',
        })
    },
}