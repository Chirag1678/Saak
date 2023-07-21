const cloudinary = require("cloudinary");
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

// Configure multer for file upload
const upload = multer({ dest: "uploads/" });

cloudinary.config({
	cloud_name: "dmgmcljcv",
	api_key: "411381643421891",
	api_secret: "n3FJ8fTQXQ9Z8yyjhGAOSR-SG5s",
});

const router = express.Router();

router.post("/ImageUpload", upload.single("photo"), async (req, res) => {
	const file = req.file;
	console.log(file);

	try {
		await cloudinary.v2.uploader.upload(file.path, function (error, result) {
			if (error) {
				console.log(error);
				res.status(401).json({ body: "" });
			} else {
				console.log(result);
				res.send({ URL: result.url });
			}
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
