exports.postCreate = (req,res,next) => {
	let errors = [];

	if(!req.body.name) {
		errors.push("Please enter your name")
	}

	if (!req.body.phone) {
		errors.push("Please enter your phone")
	}

	if(errors.length) {
		console.log(errors)
		 res.render('users/create',{
			errors: errors,
			values: req.body
		})
		 return;
	}

	next();
}