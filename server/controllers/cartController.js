const User = require('../models/User')
const Product = require('../models/Product')
const Order = require('../models/Order')

let cart = [];

exports.addToCart = async (req,res) => {
    const {productId,quantity} = req.body;
    const product = await Product.findById(productId);
    if(!product){
        return res.status(400).json({message: 'Product not found'});
    }
    const item = cart.find(item => item.productId == productId)
    if(item){
        item.quantity += quantity;
    }else{
        cart.push({productId,quantity});
    }
    res.status(200).json(cart);
}

exports.getCart = async (req,res) => {
    res.status(200).json(cart)
}

exports.placeOrder = async (req,res) => {
    try {
        const total = cart.reduce((sum,item)=> sum + item.quantity * item.product.price, 0 )
        const order = new Order({
            userId : req.user.id,
            products : cart,
            totalPrice: total
        })
        await order.save();
        cart = [];
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



exports.getOrder = async (req,res) => {
    try {
        const orders = await Order.find({userId: req.user.id}).populate('products.productId');
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
