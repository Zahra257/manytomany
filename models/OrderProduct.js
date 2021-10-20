const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderProductSchema= new mongoose.Schema({
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        default:0
    }
});

//  
//Export the model
module.exports = mongoose.model('OrderProduct', orderProductSchema, 'ordersproducts');