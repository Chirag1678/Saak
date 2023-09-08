import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductDimensionsSchema = new Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	PWeight: {
		type: Number,
		required: true,
	},
	PLength: {
		type: Number,
		required: true,
	},
	PWidth: {
		type: Number,
		required: true,
	},
	PHeight: {
		type: Number,
		required: true,
	},
});

module.exports.PDimensions =
	mongoose?.models?.PDimensions || // Use consistent model name here
	mongoose.model("PDimensions", ProductDimensionsSchema); // Use consistent model name here
