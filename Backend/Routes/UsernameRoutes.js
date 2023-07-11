// imports
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// import controllers
const { findUsername } = require("../Controllers/Usernames");

// routers
const router = express.Router();

router.post("/check", async (req, res) => {
	const username = req.body.Username;
	if (
		username !== null &&
		username !== undefined &&
		username !== "" &&
		username.length > 4 &&
		username.includes(" ") !== true
	) {
		const AvailableUsername = await findUsername(username);
		if (AvailableUsername === true) {
			res.status(406).json("Username already exists");
		} else {
			res.status(201).json("Username is available");
		}
	}
});

module.exports = router;
