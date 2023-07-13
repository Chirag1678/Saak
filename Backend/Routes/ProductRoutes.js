const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Importing Controllers
const {
	addProduct,
	DeleteAllProducts,
	FindProduct,
} = require("../Controllers/Products");

const router = express.Router();

router.post("/Find/:id", async (req, res) => {
	const PCode = req.body.PCode;

	const ProductResult = await FindProduct(PCode);

	const reviews = [...ProductResult.PReviews];
	const Product = {
		Name: ProductResult.PName,
		imgArr: [...ProductResult.PImages],
		Price: ProductResult.PPrice,
		Features: [...ProductResult.PFeatures],
		Description: ProductResult.PDescription,
		Brand: ProductResult.PBrand,
		Rating: 0,
		Purchased: 0,
		ReviewsNum: ProductResult.PReviews.length,
		Warranty: 0,
		Features: [],
		Reviews: [...ProductResult.PReviews],
	};

	res.send(Product);
});

router.get("/deleteAllProducts", async (req, res) => {
	await DeleteAllProducts();
	res.send("Deleted all products");
});

router.post("/addProduct", async (req, res) => {
	const NewProduct = {
		PName: req.body.PName,
		PCode: req.body.PCode,
		PDescription: req.body.PDescription,
		PPrice: req.body.PPrice,
		PFeatures: req.body.PFeatures,
		PImages: req.body.PImages,
		PStock: req.body.PStock,
		PCategory: req.body.PCategory,
		PBrand: req.body.PBrand,
		PReviews: [...req.body.PReviews],
		PDimensions: {
			PWeight: req.body.PDimensions.PWeight,
			PLength: req.body.PDimensions.PLength,
			PWidth: req.body.PDimensions.PWidth,
			PHeight: req.body.PDimensions.PHeight,
		},
	};

	await addProduct(NewProduct);

	res.send(`Added ${NewProduct.PName}`);
});

module.exports = router;
