const mongoose = require('mongoose');
require('dotenv').config()

// Connect MongoDB at default port 27017.
mongoose.connect(`mongodb+srv://${process.env.SERVER}`, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=> console.log('connected to DB')).catch((error)=> console.log('Something happened'))