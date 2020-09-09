require('dotenv').config();

const express = require('express')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')

const {requireAuth} = require('./controller/auth')

const app = express()

const port = 8000;

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); 
//parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(process.env.SESSION_SECRET))
//parsing cookie

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

app.listen(port,()=>{
	console.log(`Server is running on port ${port}`)
})

 