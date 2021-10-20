
const {getUsers, registerUser,oneUser} = require('../controllers/User.controller')
const {getAllOrders,getOrderCount} = require('../controllers/Order.controller')
const express= require('express')
const router = express.Router()
const orderRouter = require('./order.routes')

router.route('/').get(getUsers).post(registerUser)
router.route('/:id').get(oneUser)
router.route('/:id/orders',orderRouter).get(getAllOrders)
router.route('/:id/orders/count', orderRouter).get(getOrderCount)
module.exports = router