const path = require('path');
const multer = require('multer');


storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/products')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

module.exports = multer({storage})

// , limits: { files: 3 },
//     fileFilter : (req, file, cb) => {
//         let type = file.mimetype.startsWith('image/');
//         type ? cb(null, true) : cb(new Error('solo archivos de tipo imagen'))

//     }