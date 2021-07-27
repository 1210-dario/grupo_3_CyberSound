module.exports = {

    index: (req, res) => {
        return res.render('./index/index',{
            title : 'Home',
        })
    },
    
}