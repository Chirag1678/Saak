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
	updateCart,
	getQuantity,
	TrendingProducts,
} = require("../Controllers/Products");

const { findUsers } = require("../Controllers/Users");

const router = express.Router();

const { Product } = require("../Models/Product");

// Path: '/Products/Find/:id
router.post("/Find/:id", async (req, res) => {
	// console.log(req.body);
	try {
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
				Warranty: ProductResult.PWarranty,
				Stock: ProductResult.PStock,
				Features: [],
				Reviews: [...ProductResult.PReviews],
				// Liked: ProductResult.Liked,
			};
			Product.Features = [...featuresss];
			res.send(Product);
		}
	} catch (err) {
		res.status(404).json(err);
	}
});

// Path: '/Products/deleteAllProducts'
router.get("/deleteAllProducts", async (req, res) => {
	await DeleteAllProducts();
	res.send("Deleted all products");
});

// Path: '/Products/addProduct'
router.post("/addProduct", async (req, res) => {
	let NewProduct = req.body;
	NewProduct = {
		PName: req.body.PName,
		PCode: req.body.PCode,
		PDescription: req.body.PDescription,
		PPrice: req.body.PPrice,
		PFeatures: req.body.PFeatures,
		PImages: {
			MainImg: req.body.PImages.MainImg,
			Img1: req.body.PImages.Img1,
			Img2: req.body.PImages.Img2,
			Img3: req.body.PImages.Img3,
			Img4: req.body.PImages.Img4,
		},
		PStock: req.body.PStock,
		PCategory: req.body.PCategory,
		PBrand: req.body.PBrand,
		PReviews: req.body.PReviews,
		PWarranty: req.body.PWarranty,
		PDimensions: {
			PWeight: req.body.PWeight,
			PLength: req.body.PLength,
			PWidth: req.body.PWidth,
			PHeight: req.body.PHeight,
		},
	};

	const status = await addProduct(NewProduct);
	if (status !== false) {
		res.status(200).json(`Added ${NewProduct.PName}`);
	} else {
		res
			.status(400)
			.json(`Product wasn't added because ${NewProduct.PCode} already exists`);
	}
});

// Path: '/Products/allProducts'
router.get("/allProducts", async (req, res) => {
	const Products = await allProducts();
	res.send(Products);
});

// Path: '/Products/Find/:id'
router.post("/CartHandler", async (req, res) => {
	console.log(req.body);
	const UpdateData = {
		Email: req.body.Email,
		PCode: req.body.PCode,
		Quantity: req.body.Quantity,
		PricePerUnit: req.body.Price,
		TotalPrice: req.body.Price * req.body.Quantity,
	};

	const updater = updateCart(UpdateData);
	if (updater) {
		res.status(200).json("Updated Cart");
	} else {
		res.status(401).json("Unable to Update Cart");
	}
});

// Path: '/getQuantity/:id'
router.post("/getQuantity/:id", async (req, res) => {
	try {
		const Details = {
			Email: req.body.Email,
			PCode: req.params.id,
		};
		const PCode = req.params.id;
		const Cart = await getQuantity(Details);

		const checker = Cart.some((item) => item.PCode === PCode);

		if (!checker) {
			res.status(200).json({ Quantity: 0 });
		} else {
			let quantity;
			for (var i = 0; i < Cart.length; i++) {
				if (Cart[i].PCode === Details.PCode) {
					quantity = Cart[i].Quantity;
					break;
				}
			}
			res.status(200).json({ Quantity: quantity });
		}
	} catch (e) {
		res.status(401).json("NOT");
	}
});

// Path: '/Products/UserCart'
router.post("/UserCart", async (req, res) => {
	const user = req.body.username;
});

// Path: '/Products/Wishlist/:id'
router.post("/Wishlist/:id", async (req, res) => {
	const Details = {
		Email: req.body.Email,
		PCode: req.params.id,
		Checked: req.body.Checked,
	};
});

router.get("/Trending", async (req, res) => {
	const TrendingProds = await TrendingProducts();
	res.send(TrendingProds);
});

router.get("/allFeatures", async (req, res) => {
	const pipeline = [
		{
			$project: {
				_id: 0,
				PCode: 1,
			},
		},
		{
			$match: {
				// Your match conditions here
			},
		},
	];

	const result = await Product.aggregate(pipeline);
	console.log(result);

	res.send(result);
});

module.exports = router;
