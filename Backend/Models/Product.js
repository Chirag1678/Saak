const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Product = new Schema({
	// PCode
	PCode: {
		type: String,
		required: true,
	},

	// Name
	PName: {
		type: String,
		required: true,
	},

	// Price
	PPrice: {
		type: Number,
		required: true,
	},

	// Features
	PFeatures: [{ type: String, required: true }],

	// Description
	PDescription: {
		type: String,
		required: true,
	},

	// Images
	PImages: {
		MainImg: {
			type: String,
			required: true,
		},
		Img1: String,
		Img2: String,
		Img3: String,
		Img4: String,
	},

	// Stock
	PStock: {
		type: Number,
		required: true,
	},

	// Category
	PCategory: {
		type: String,
		required: true,
		default: "Normal",
	},

	// Brand
	PBrand: [
		{
			type: String,
			required: true,
		},
	],

	// Dimensions
	PDimensions: {
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
	},

	// Reviews
	PReviews: [
		{
			Name: String,
			Review: String,
			Date: String,
			Rating: String,
		},
	],
});

module.exports.Product = mongoose.model("Catalogue", Product);
