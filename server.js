require('dotenv').config();

const express = require('express')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const csurf = require("csurf")

//config mongoose
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)

const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const apiProductRoute = require('./api/routes/product.route')

const {requireAuth} = require('./controller/auth')
const {checkCookie} = require('./controller/session')

const app = express()

const port = 8000;


app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); 
//parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(process.env.SESSION_SECRET))
//parsing cookie
app.use(checkCookie)
//check for cooking before do anything else

app.use('/api/products', apiProductRoute)

//use static file
app.use(express.static('public'));

app.get('/',(req,res)=>{
	res.render('index',{
		name:'Duc'
	});
})

app.use('/users',requireAuth,userRoute);
app.use('/auth',authRoute);
app.use('/product',productRoute)
app.use('/cart',cartRoute)

app.listen(port,()=>{
	console.log(`Server is running on port ${port}`)
})

 