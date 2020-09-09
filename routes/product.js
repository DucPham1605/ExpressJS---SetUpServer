const express = require("express")
const router = express.Router()

const {renderProducts} = require('../controller/product')

router.get('/',renderProducts)

module.exports = router