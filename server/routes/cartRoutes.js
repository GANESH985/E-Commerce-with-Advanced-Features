const express = require('express')
const router = express.Router()
const {addToCart,getCart,placeOrder,getOrder} = require('../controllers/cartController')
const {auth} = require('../middleware/auth');


router.post('/add-to-cart',auth,addToCart)
router.get('/get-cart',auth,getCart)
router.post('/place-order',auth,placeOrder)
router.get('/get-order',auth,getOrder)

module.exports = router