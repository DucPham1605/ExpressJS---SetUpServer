const db = require('../db')

let products = db.get('products').value()

exports.renderProducts = (req,res) => {
	let page = parseInt(req.query.page) || 1
	let perPage = 4
	let begin = (page - 1)*perPage
	let end = page*perPage

	res.render('product/product',{
		products: products.slice(begin,end),
		page: page
	})
}

