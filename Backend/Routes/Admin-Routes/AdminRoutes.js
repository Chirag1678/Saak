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

const { updateProduct, ProductFinder } = require("../../Controllers/Admin");

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

router.post("/updateProduct", async (req, res) => {
	console.log(req.body);
	const oldCode = req.body.oldPCode;
	const newCode = req.body.newPCode;
	const Data = req.body.Data;

	const updated = await updateProduct(oldCode, newCode, Data);
	if (updated !== true) {
		switch (updated) {
			case 400: {
				res
					.status(400)
					.send(
						`Product wasn't updated because ${oldCode} and ${newCode} doesn't exist`
					);
				break;
			}
			case 401: {
				res
					.status(401)
					.send(`Product wasn't updated because ${newCode} doesn't exist`);
				break;
			}
		}
	} else {
		res.status(200).send(`Updated ${oldCode}`);
	}
});

router.get("/find/:id", async (req, res) => {
	const PCode = req.params.id;
	const product = await ProductFinder(PCode);
	if (product !== false) {
		res.status(200).send(product);
	} else {
		res.status(401).send(`Product ${PCode} doesn't exist`);
	}
});

module.exports = router;
