const express = require("express")
const router = express.Router()

const {login,postLogin} = require("../controller/auth")

router.get('/login',login)
router.post('/login',postLogin)

module.exports = router