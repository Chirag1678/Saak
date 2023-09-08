const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
	Email: {
		type: String,
		required: true,
	},
	Name: {
		type: String,
		required: true,
	},
	Username: {
		type: String,
		required: true,
	},
	Password: {
		type: String,
		required: true,
	},
	Location: {
		ip: String,
		lat: String,
		lng: String,
		City: String,
		Continent: String,
		Timezone: String,
	},
	isAdmin: {
		type: Boolean,
		default: false,
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
	Wishlist: [
		{
			PCode: String,
			Liked: { type: Boolean, default: false },
			DateTime: String,
		},
	],
});

module.exports.User =
	mongoose?.models?.Users || mongoose.model("Users", UserSchema);
