const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const {
	allProducts,
	deleteProduct,
	updateStock,
} = require("../../Controllers/Products");

const router = express.Router();

router.get("/allProducts", async (req, res) => {
	const products = await allProducts();
	res.send(products);
});

router.post("/deleteProduct", async (req, res) => {
	const PCode = req.body.PCode;
	const status = await deleteProduct(PCode);
	if (status !== false) {
		res.send(`Deleted ${PCode}`);
	} else {
		res.send(`Product wasn't deleted because ${PCode} doesn't exist`);
	}
});

router.post("/updateStock", async (req, res) => {
	const PCode = req.body.PCode;
	const PStock = req.body.PStock;
	const status = await updateStock(PCode, PStock);
	if (status !== false) {
		res.status(200).send(`Updated ${PCode}`);
	} else {
		res
			.status(401)
			.send(`Product wasn't updated because ${PCode} doesn't exist`);
	}
});

module.exports = router;
