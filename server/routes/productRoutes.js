const express =require('express')
const router = express.Router()
const {createProduct, getProducts, updateProduct,deleteProduct} = require("../controllers/productController");
const {auth,admin} = require('../middleware/auth')

router.post('/product',auth,admin,createProduct)
router.get('/products',getProducts)
router.put('/product/:id',auth,admin,updateProduct)
router.delete('/product/:id',auth,admin,deleteProduct)

module.exports = router;