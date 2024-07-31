const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        ref:'User'
    },
    products:[{
        productId:{
            type: mongoose.Schema.Types.ObjectId ,
            ref: 'Product',
        },
        quantity:{
            type: Number,
            required:true
        }
    }],
    totalPrice:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', OrderSchema)