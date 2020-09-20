const Product = require('../../models/product.model')

exports.renderProducts = async (req,res) => {
		let products = await Product.find()
		res.json(products)
}

exports.createProduct = async (req,res) => {
	let product = await Product.create(req.body)
	res.json(product)
}

