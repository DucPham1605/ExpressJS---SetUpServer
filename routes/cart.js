const express = require("express")
const router = express.Router()

const {addToCart} = require('../controller/cart')

router.get('/add/:productId',addToCart)

module.exports = router