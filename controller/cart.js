const db = require('../db')

exports.addToCart = (req,res,next) => {
	let productId = req.params.productId
	let sessionId = req.signedCookies.sessionId

	if(!sessionId) {
		res.redirect('/products')
		return;
	}

	let count = db.get("sessions")
					.find({sessionId: sessionId})
					.get('cart.' + productId,0)
					.value()

	db.get("sessions")
		.find({sessionId: sessionId})
		.set('cart.' + productId, count +1)
		.write()
 
	res.redirect('/product')
}