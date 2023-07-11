// async function addProduct(NewProduct) {
// 	if (await validateProduct(NewProduct.PCode)) {
// 		// Creates a model for the collection
// 		const model = await mongoose.model("Catalogue", ProductSchema);
// 		// Creates a new user
// 		const Product1 = new model({
// 			PCode: NewProduct.PCode,
// 			PName: NewProduct.PName,
// 			PPrice: NewProduct.PPrice,
// 			PDescription: NewProduct.PDescription,
// 			PImage: NewProduct.PImage,
// 			PStock: NewProduct.PStock,
// 			PCategory: NewProduct.PCategory,
// 			PBrand: NewProduct.PBrand,
// 			PReviews: NewProduct.PReviews,
// 			PDimensions: {
// 				PWeight: NewProduct.PDimensions.PWeight,
// 				PLength: NewProduct.PDimensions.PLength,
// 				PWidth: NewProduct.PDimensions.PWidth,
// 				PHeight: NewProduct.PDimensions.PHeight,
// 			},
// 		});

// 		console.log(`Creating Product ${NewProduct.PName}...`);
// 		// Saves the user to the database
// 		await Product1.save()
// 			.then((res) => {
// 				console.log("Product created");
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	} else {
// 		console.log(`Product already exists and PCode is ${NewProduct.PCode}`);
// 	}
// }

// async function validateProduct(PCode) {
// 	// Creates a model for the collection
// 	const model = await mongoose.model("Catalogue", ProductSchema);
// 	// If the user exists, return false
// 	if (await model.findOne({ PCode: PCode }).exec()) {
// 		return false;
// 	}
// 	// If the user doesn't exist, return true
// 	else {
// 		return true;
// 	}
// }

// async function DeleteAllProducts() {
// 	const model = await mongoose.model("Catalogue", ProductSchema);
// 	await model.deleteMany({});
// 	console.log("Deleted all products");
// }
