const Order= require('../models/Order') //ORDER
const OrderProduct = require('../models/OrderProduct')

const createOrder= async(req,res,next) => { 
    try{
        const newOrderProduct = Promise.all(req.body.order_product.map(async (item) => {
            const newOrder = new OrderProduct({
                product_id: item.product_id,
                quantity: item.quantity
            })
            
            await newOrder.save()
            return newOrder._id
        }))
        newproductOrder = await newOrderProduct

        const order = new Order({
            status: req.body.status,
            user_id: req.body.user_id,
            order_product: newproductOrder 
        })
        await order.save()
        res.json({success: true, data: order})

    }catch(error){
        res.json({success: false, data: 'Something happened'})

    }
}


const getAllOrders = async(req,res,next) => { 
    try{
        const orders = await Order.find({}).populate('user_id').populate('order_product').populate({path:'order_product', populate: {path:'product_id', model:'Product'}})

    }catch(error){
        res.json({success: false, data: 'Something happened'})

    }
}

const getOrderCount = async(req,res,next) => { 
    try{

        //QUERY 
        // NEW INSTANCES + SAVE 
        const orders = await Order.count({})
      console.log(orders)
    }catch(error){
        res.json({success: false, data: 'Something happened'})

    }
}
module.exports = {getAllOrders, createOrder,getOrderCount}