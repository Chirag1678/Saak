const { Product } = require("../Models/Product");

// Add a product
async function addProduct(NewProduct) {
	if (await validateProduct(NewProduct.PCode)) {
		const Product1 = new Product({
			PName: NewProduct.PName,
			PCode: NewProduct.PCode,
			PDescription: NewProduct.PDescription,
			PPrice: NewProduct.PPrice,
			PFeatures: NewProduct.PFeatures,
			PImages: NewProduct.PImages,
			PStock: NewProduct.PStock,
			PCategory: NewProduct.PCategory,
			PBrand: NewProduct.PBrand,
			PReviews: [...NewProduct.PReviews],
			PDimensions: {
				PWeight: NewProduct.PDimensions.PWeight,
				PLength: NewProduct.PDimensions.PLength,
				PWidth: NewProduct.PDimensions.PWidth,
				PHeight: NewProduct.PDimensions.PHeight,
			},
		});

		console.log(`Creating Product ${NewProduct.PName}...`);
		// Saves the user to the database
		await Product1.save()
			.then((res) => {
				console.log("Product created");
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
	} else {
		console.log(`Product already exists and PCode is ${NewProduct.PCode}`);
		return false;
	}
}

// Validate a product
async function validateProduct(PCode) {
	// If the user exists, return false
	if (await Product.findOne({ PCode: PCode }).exec()) {
		return false;
	}
	// If the user doesn't exist, return true
	else {
		return true;
	}
}

// Delete all products
async function DeleteAllProducts() {
	await Product.deleteMany({});
	console.log("Deleted all products");
}

// Find a product
async function FindProduct(Pcode) {
	const pipeline = [
		{
			$match: {
				PCode: Pcode,
			},
		},
	];
	const Prod = await Product.aggregate(pipeline);
	console.log(Prod);
	return Prod[0];
}

module.exports = {
	addProduct,
	validateProduct,
	DeleteAllProducts,
	FindProduct,
};
