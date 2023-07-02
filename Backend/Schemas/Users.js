const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let User = new Schema({
	Email: {
		type: String,
		required: true,
	},
	Name: {
		type: String,
		required: true,
	},
	Password: {
		type: String,
		required: true,
	},
	UUID: {
		type: String,
	},
	Addresses: [
		{
			City: {
				type: String,
			},
			State: {
				type: String,
			},
			Pincode: {
				type: Number,
			},
			Address: {
				type: String,
			},
		},
	],
	Cart: [
		{
			PCode: String,
			Quantity: Number,
			PricePerUnit: Number,
			TotalPrice: Number,
		},
	],
});

module.exports = User;
