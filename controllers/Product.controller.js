const Product = require('../models/Product')


const createProduct = async(req,res,next) => { 
    try{
        const product = new Product(req.body)
        await product.save()
        res.json({success: true, data: product})

    }catch(error){
        res.json({success: false, data: 'Something happened'})

    }
}


const getAllProducts = async(req,res,next) => { 
    try{
        const product = await Product.find()
        
        res.json({success: true, data: product})

    }catch(error){
        res.json({success: false, data: 'Something happened'})

    }
}

module.exports = {getAllProducts, createProduct}