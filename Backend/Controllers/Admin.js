const { Product } = require("../Models/Product");

async function updateProduct(oldPCode, newPCode, Data) {
	console.log(oldPCode);
	let modified;
	const keys = Object.keys(Data);

	const response = await Product.updateOne({ PCode: oldPCode }, { $set: Data });
	console.log(response);
	if (response.modifiedCount != 0) {
		modified = true;
	} else if (response.matchedCount == 1) {
		modified = 400;
	} else if (response.modifiedCount == 0) {
		modified = 401;
	}

	return modified;
}

async function ProductFinder(oldPCode) {
	try {
		const product = await Product.findOne({ PCode: oldPCode });
		return product;
	} catch (err) {
		return false;
	}
}

module.exports = { updateProduct, ProductFinder };
