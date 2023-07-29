const { Product } = require("../Models/Product");
const { User } = require("../Models/Users");

// Add a product
async function addProduct(NewProduct) {
	if (await validateProduct(NewProduct.PCode)) {
		const Product1 = new Product({
			PName: NewProduct.PName,
			PCode: NewProduct.PCode,
			PDescription: NewProduct.PDescription,
			PPrice: NewProduct.PPrice,
			PFeatures: NewProduct.PFeatures,
			PImages: {
				MainImg: NewProduct.PImages.MainImg,
				Img1: NewProduct.PImages.Img1,
				Img2: NewProduct.PImages.Img2,
				Img3: NewProduct.PImages.Img3,
				Img4: NewProduct.PImages.Img4,
			},
			PStock: NewProduct.PStock,
			PCategory: NewProduct.PCategory,
			PBrand: NewProduct.PBrand,
			PReviews: NewProduct.PReviews,
			PDimensions: {
				PWeight: NewProduct.PDimensions.PWeight,
				PLength: NewProduct.PDimensions.PLength,
				PWidth: NewProduct.PDimensions.PWidth,
				PHeight: NewProduct.PDimensions.PHeight,
			},
		});

		console.log(`Creating Product ${NewProduct.PName}...`);
		// Saves the user to the database
		await Product1.save()
			.then((res) => {
				console.log("Product created");
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
	} else {
		console.log(`Product already exists and PCode is ${NewProduct.PCode}`);
		return false;
	}
}

// Validate a product
async function validateProduct(PCode) {
	// If the user exists, return false
	if (await Product.findOne({ PCode: PCode }).exec()) {
		return false;
	}
	// If the user doesn't exist, return true
	else {
		return true;
	}
}

// Delete all products
async function DeleteAllProducts() {
	await Product.deleteMany({});
	console.log("Deleted all products");
}

// Find a product
async function FindProduct(Pcode) {
	const pipeline = [
		{
			$match: {
				PCode: Pcode,
			},
		},
	];
	// const UserPipeline = [
	// 	{
	// 		$match: {
	// 			"Wishlist.Liked": true,
	// 		},
	// 	},
	// ];
	const Prod = await Product.aggregate(pipeline);
	// const UserWishlist = await User.aggregate(UserPipeline);

	// console.log(UserWishlist[0]);

	if (Prod.length === 0) {
		return false;
	} else {
		return Prod[0];
	}
}

// Get all products
async function allProducts() {
	const pipeline = [
		{
			$match: {},
		},
	];

	return await Product.aggregate(pipeline);
}

// Delete a product
async function deleteProduct(PCode) {
	try {
		await Product.deleteOne({ PCode });
		return true;
	} catch (err) {
		return false;
	}
}

// Update stock
async function updateStock(PCode, PStock) {
	try {
		const response = await Product.updateOne({ PCode: PCode }, [
			{ $set: { PStock: PStock } },
		]);
		if (response.modifiedCount !== 0) {
			return true;
		} else {
			throw err;
		}
	} catch (err) {
		return false;
	}
}

// Update cart
async function updateCart({
	PCode,
	Email,
	PricePerUnit,
	TotalPrice,
	Quantity,
}) {
	try {
		const pipeline = [{ $match: { Email: Email, "Cart.PCode": PCode } }];
		const aggr = await User.aggregate(pipeline);
		console.log(aggr);
		if (aggr.length > 0) {
			const conditions = { Email: Email, "Cart.PCode": PCode };
			const update = {
				$set: {
					"Cart.$.Quantity": Quantity, // Update the Quantity field for the matching element
				},
			};
			const options = { new: true };
			const updatedUser = await User.findOneAndUpdate(
				conditions,
				update,
				options
			);
			if (updatedUser) {
				console.log("Document updated:", updatedUser);
				return "success";
			} else {
				console.log("User not found or no update performed.");
				return "error";
			}
		} else {
			const conditions = { Email: Email };
			const update = {
				$addToSet: {
					Cart: {
						PCode: PCode,
						PricePerUnit: +PricePerUnit,
						TotalPrice: +TotalPrice,
						Quantity: Quantity,
					},
				},
			};
			const options = { new: true };

			const updatedUser = await User.findOneAndUpdate(
				conditions,
				update,
				options
			);

			if (updatedUser) {
				console.log("Document updated:", updatedUser);
				return "success";
			} else {
				console.log("User not found or no update performed.");
				return "error";
			}
		}
	} catch (error) {
		console.log("Error updating document:", error);
		return "error";
	}
}

async function getQuantity({ Email, PCode }) {
	// console.log(Email, PCode);
	const pipeline = [{ $match: { Email: Email, "Cart.PCode": PCode } }];
	try {
		const res = await User.aggregate(pipeline);
		return res[0].Cart;
	} catch (err) {
		return "Not There";
	}
}

async function TrendingProducts() {
	const pipeline = [
		{
			$match: {
				PCategory: "Trending",
			},
		},
	];

	const TrendingProds = await Product.aggregate(pipeline);
	console.log(TrendingProds);
	return TrendingProds;
}

module.exports = {
	addProduct,
	validateProduct,
	DeleteAllProducts,
	FindProduct,
	allProducts,
	deleteProduct,
	updateStock,
	updateCart,
	getQuantity,
	TrendingProducts,
};

// const conditions = { Email: Email };
// const update = {
// 	$push: {
// 		Cart: {
// 			PCode: PCode,
// 			PricePerUnit: PricePerUnit,
// 			TotalPrice: TotalPrice,
// 			Quantity: 1,
// 		},
// 	},
// };
// const options = { new: true };

// await User.findOneAndUpdate(conditions, update, options, (error, doc) => {
// 	if (error) {
// 		console.log(error);
// 	}
// 	console.log(doc);
// 	return "success";
// });
