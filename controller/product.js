const db = require('../db')
let products = db.get('products').value()

const Product = require('../models/product.model')

exports.renderProducts = async (req,res) => {
		let products = await Product.find()
		res.render('product/product',{
			products: products
		})
}

/*exports.renderProducts = (req,res) => {
	let page = parseInt(req.query.page) || 1
	let perPage = 4
	let begin = (page - 1)*perPage
	let end = page*perPage

	res.render('product/product',{
		products: products.slice(begin,end),
		page: page
	})
}*/

