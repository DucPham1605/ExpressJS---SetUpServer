const shortid = require("shortid")
const db = require("../db")

exports.checkCookie = (req,res,next) => {
	if(!req.signedCookies.sessionId) {
	 	let sessionId = shortid.generate()
	 	db.get("sessions").push({
			sessionId: sessionId
		}).write()
		res.cookie('sessionId',sessionId,{
			signed: true
		})
	}
	next()
}
