const product = require('../models/Product')

exports.createProduct = async (req,res)=>{
    const {name,description, price, stockQuantity} = req.body
    try {
        const newProduct = new product({name,description, price, stockQuantity})
        await newProduct.save()
        res.status(201).json({message: "Product created successfully",product})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getProducts = async (req,res)=>{
    try {
        const products = await product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.updateProduct = async (req,res) =>{
    const {id} = req.params;
    const {name,description, price, stockQuantity} = req.body

    try {
        const product = await Product.findByIdAndUpdate(id,{name,description,price,stockQuantity},{new:true})
        res.status(200).json({message: "Product updated successfully",product})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.deleteProduct = async (req,res)=>{
    const {id} = req.params
    try {
        await product.findByIdAndDelete(id)
        res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};