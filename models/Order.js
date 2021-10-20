const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema= new mongoose.Schema({
    status:{
        type: String,
        default: 'Pending'
    }, 
    order_product:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'OrderProduct'
        }
    ],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

//Export the model
module.exports = mongoose.model('Order', orderSchema, 'orders');