const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
});

const ProductBrandsSchema = new Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	brand: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Brand",
		required: true,
	},
});

module.exports.Brand =
	mongoose?.models?.Brand || mongoose.model("Brand", BrandSchema);

module.exports.ProductBrands =
	mongoose?.models?.ProductBrands ||
	mongoose.model("ProductBrands", ProductBrandsSchema);
