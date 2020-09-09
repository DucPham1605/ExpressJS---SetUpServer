const express = require("express")
const multer = require('multer');
const router = express.Router()

const db = require('../db')
const controller = require('../controller/user')
const {postCreate} = require('../validate/user')

let upload = multer({ dest: './public/uploads/' });

let users = db.get('users').value()

router.get('/',controller.renderUsers)

router.get('/search',controller.searchUsers)

router.get('/create',controller.renderCreateUser)

router.get(`/:id`,controller.viewUser)

router.post('/create',upload.single('avatar'),postCreate,controller.createUser)

module.exports = router

