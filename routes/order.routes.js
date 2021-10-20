const {getAllOrders, createOrder} = require("../controllers/Order.controller")
const express= require('express')
const router = express.Router({mergeParams: true})

router.route('/').get(getAllOrders).post(createOrder)

module.exports = router

