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
	allProducts,
} = require("../Controllers/Products");

const router = express.Router();

router.post("/Find/:id", async (req, res) => {
	// console.log(req.body);
	const PCode = req.body.PCode;

	const ProductResult = await FindProduct(PCode);

	const featuresss = [...ProductResult.PFeatures];

	if (!ProductResult) {
		console.log("Product not found");
		res.send("Not Available");
	} else {
		const Product = {
			PCode: ProductResult.PCode,
			Name: ProductResult.PName,
			imgArr: {
				MainImg: ProductResult.PImages.MainImg,
				Img1: ProductResult.PImages.Img1,
				Img2: ProductResult.PImages.Img2,
				Img3: ProductResult.PImages.Img3,
				Img4: ProductResult.PImages.Img4,
			},
			Price: ProductResult.PPrice,
			Features: [],
			Description: ProductResult.PDescription,
			Brand: ProductResult.PBrand,
			Rating: 0,
			Purchased: 0,
			ReviewsNum: ProductResult.PReviews.length,
			Warranty: 0,
			Stock: ProductResult.PStock,
			Features: [],
			Reviews: [...ProductResult.PReviews],
			// Liked: ProductResult.Liked,
		};
		Product.Features = [...featuresss];
		res.send(Product);
	}
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
		PImages: {
			MainImg: req.body.MainImg,
			Img1: req.body.Img1,
			Img2: req.body.Img2,
			Img3: req.body.Img3,
			Img4: req.body.Img4,
		},
		PStock: req.body.PStock,
		PCategory: req.body.PCategory,
		PBrand: req.body.PBrand,
		PReviews: req.body.PReviews,
		PDimensions: {
			PWeight: req.body.PWeight,
			PLength: req.body.PLength,
			PWidth: req.body.PWidth,
			PHeight: req.body.PHeight,
		},
	};

	const status = await addProduct(NewProduct);
	if (status !== false) {
		res.send(`Added ${NewProduct.PName}`);
	} else {
		res.send(`Product wasn't added because ${NewProduct.PCode} already exists`);
	}
});

module.exports = router;
