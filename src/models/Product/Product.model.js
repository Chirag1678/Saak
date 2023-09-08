import mongoose from "mongoose";

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
	PCode: {
		type: String,
		required: [true, "PCode is required."],
		unique: true,
	},
	PName: {
		type: String,
		required: [true, "PName is required."],
	},
	PPrice: {
		type: Number,
		required: [true, "PPrice is required."],
	},
	PDescription: {
		type: String,
		required: [true, "PDescription is required."],
	},
	PStock: {
		type: Number,
		required: [true, "PStock is required."],
	},
	PCategory: [
		{
			type: String,
			default: "Normal",
		},
	],
	PWarranty: {
		type: Number,
		default: 0,
	},
});

export const Product =
	mongoose?.models?.Products || mongoose.model("Products", ProductSchema);
