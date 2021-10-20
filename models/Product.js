const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
        default: 0
    }
});

//Export the model
module.exports = mongoose.model('Product', productSchema, 'products');