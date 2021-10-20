const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 5000
const server = require('./config/db')
const userRoute = require('./routes/user.routes')
const orderRoute = require('./routes/order.routes')
const productRoute = require('./routes/product.routes')
//NEVER FORGET JSON


require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))

app.use('/users', userRoute)
app.use('/orders', orderRoute)
app.use('/products', productRoute )
app.listen(PORT, ()=>{
    console.log(`connected to ${process.env.API_URL}:${PORT}`)
    server
})