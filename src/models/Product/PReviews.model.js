const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductReviewsSchema = new Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	Name: String,
	Review: String,
	Date: String,
	Rating: String,
});

module.exports.PReviews =
	mongoose?.models?.PReviews ||
	mongoose.model("PReviews", ProductReviewsSchema);
