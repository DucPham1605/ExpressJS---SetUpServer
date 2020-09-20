const express = require("express")
const router = express.Router()

const {renderProducts,createProduct} = require('../controllers/product.controller')

router.get('/',renderProducts)
router.post('/',createProduct)

module.exports = router
