const express = require('express')
const app = express()

const port = 8000;

app.get('/',(req,res)=>{
	res.send("Hello World")
})

app.get('/users',(req,res)=>{
	res.send("Users list")
})

app.listen(port,()=>{
	console.log(`Server is running on port ${port}`)
})

