import { PImages } from "@/models/Product/PImages.model";
import { Product } from "@/models/Product/Product.model";
import { PFeatures } from "@/models/Product/PFeatures.model";
import { PDimensions } from "@/models/Product/PDimensions.model";
import { ProductBrands } from "@/models/Product/PBrand.model";
import { PReviews } from "@/models/Product/PReviews.model";

async function CategoryCreator(Code, Categories) {
	if (!(await CodeChecker(Code))) {
		console.log("Inserting new");
		try {
			const newCategory = new PCategory({
				PCode: Code,
				PCat: Categories,
			});

			const result = await newCategory.save();

			// console.log(result);
			console.log("New category created");

			return { status: true, data: result, code: 200 };
		} catch (error) {
			console.error("Error creating a new category: ", error);
			return { status: false, data: error.message, code: 400 };
		}
	} else {
		// console.log(`Updating ${Code}`);
		const filter = { PCode: Code }; // The filter to match the document
		const update = { $set: { PCat: Categories } }; // The update to be applied

		const { acknowledged, modifiedCount } = await PCategory.updateOne(
			filter,
			update
		);

		if (modifiedCount === 1) {
			// Check if one document was modified
			return { status: true, data: "Update successful", code: 200 };
		} else if (acknowledged === true && modifiedCount === 0) {
			// If no documents were updated and acknowledged is set to `true`, then it means that there are no matching documents for this query
			return { status: false, data: "Nothing to update", code: 401 };
		} else {
			return {
				status: false,
				data: "Update failed or document not found",
				code: 402,
			};
		}
	}
}

async function CodeChecker(Code) {
	// try {
	const pipeline = [
		{
			$match: {
				PCode: Code,
			},
		},
	];

	try {
		const result = await PCategory.aggregate(pipeline);
		// console.log(result);
		if (result.length === 0) {
			// console.log(false);
			return false; // Code doesn't exist
		} else {
			// console.log(true);
			return true; // Code exists
		}
	} catch (error) {
		console.error("Error in CodeChecker: ", error);
		return false; // Return false in case of error
	}
}

async function ProductCreator(Details) {
	// Import your Mongoose models here
	// Replace with the correct path to your models

	// Create a new product
	const newProduct = new Product({
		PCode: Details.PCode, // Provide a default value if needed
		PName: Details.PName,
		PPrice: Details.PPrice,
		PDescription: Details.PDescription,
		PStock: Details.PStock || 0,
		PCategory: Details.PCategory || ["Normal"],
		PWarranty: Details.PWarranty || 0,
	});

	try {
		const savedProduct = await newProduct.save();
		console.log("New product saved:", savedProduct);

		// Create and save product features
		const features = Details.PFeatures || [];
		const featurePromises = features.map((feature) => {
			const newFeature = new PFeatures({
				product: savedProduct._id,
				feature,
			});

			return newFeature.save();
		});

		const savedFeatures = await Promise.all(featurePromises);
		console.log("Product features saved:", savedFeatures);

		// Create and save product images
		const images = Details.PImages || {};
		console.log(images);
		const newImages = new PImages({
			product: savedProduct._id,
			...images,
		});

		const savedImage = await newImages.save();
		console.log("Product images saved:", savedImage);

		// Create and save other related data like reviews, brands, dimensions, etc. here

		// Example: Create and save a brand
		const brandName = Details.PBrand || "DefaultBrandName";
		const newBrand = new ProductBrands({
			name: brandName,
		});

		const savedBrand = await newBrand.save();
		console.log("Brand saved:", savedBrand);

		// Create and save the association between the product and brand
		const productBrand = new ProductBrands({
			product: savedProduct._id,
			brand: savedBrand._id,
		});

		const savedProductBrand = await productBrand.save();
		console.log("Product-Brand association saved:", savedProductBrand);

		// Continue to create and save other related data here

		// Example: Create and save product dimensions
		const dimensions = Details.PDimensions || {};
		const newDimensions = new PDimensions({
			product: savedProduct._id,
			...dimensions,
		});

		const savedDimensions = await newDimensions.save();
		console.log("Product dimensions saved:", savedDimensions);

		// Continue to save other related data or perform additional operations here
	} catch (error) {
		console.error("Error saving data:", error);
	}
}

export { CategoryCreator, ProductCreator };
