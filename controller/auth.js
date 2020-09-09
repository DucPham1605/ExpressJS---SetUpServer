const db = require("../db")
const md5 = require("md5")

exports.login = (req,res) => {
	res.render("auth/login")
}

exports.postLogin = (req,res) => {
	const {email} = req.body
	const password = md5(req.body.password)
	let user = db.get("users").find({email: email}).value();

	if(!user) {
		res.render("auth/login",{
			errors: [
				"User does not exists."
			],
			values: req.body
		})
		return;
	}

	if(user.password !== password) {
		res.render("auth/login",{
			errors: [
				"Wrong password."
			],
			values: req.body
		})
		return;
	}

	res.cookie("userId", user.id,{
		signed: true
	})
	res.redirect('/users')
}


exports.requireAuth = (req,res,next) => {
	const cookie = req.signedCookies.userId
	if(!cookie) {
		res.redirect('/auth/login')
		return;
	}

	let user = db.get("users").find({
		id: req.signedCookies.userId
	}).value()

	if(!user) {
		res.redirect("/auth/login")
	}

	next()
}

 