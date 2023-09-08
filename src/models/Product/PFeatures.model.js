import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FeaturesSchema = new Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	feature: {
		type: String,
		required: [true, "features are required"],
	},
});

module.exports.PFeatures =
	mongoose?.models?.PFeatures || mongoose.model("PFeatures", FeaturesSchema);
