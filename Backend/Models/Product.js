const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Product = new Schema({
	PCode: {
		type: String,
		required: true,
	},
	PName: {
		type: String,
		required: true,
	},
	PPrice: {
		type: Number,
		required: true,
	},
	PDescription: {
		type: String,
		required: true,
	},
	PImage: {
		type: String,
		required: true,
	},
	PStock: {
		type: Number,
		required: true,
	},
	PCategory: {
		type: String,
		required: true,
	},
	PBrand: {
		type: String,
		required: true,
	},

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
	PReviews: [
		{
			Uuid: String,
			Review: String,
			Rating: String,
		},
	],
});

module.exports = Product;
