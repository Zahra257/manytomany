const {getAllProducts, createProduct} = require("../controllers/Product.controller")

const express= require('express')
const router = express.Router()


router.route('/').get(getAllProducts).post(createProduct)

module.exports = router