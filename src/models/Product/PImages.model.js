import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	MainImg: {
		type: String,
		required: [true, "At least 1 image is required"],
	},
	Img1: String,
	Img2: String,
	Img3: String,
	Img4: String,
});

module.exports.PImages =
	mongoose?.models?.PImages || mongoose.model("PImages", ImagesSchema);
