const express = require("express");
const cors = require("cors");
const { addUser } = require("../Controllers/Users");
const { findUsers } = require("../Controllers/Users");
const { DeleteAllUsers } = require("../Controllers/Users");
const { getLocation } = require("../Controllers/Users");
const CryptoJS = require("crypto-js");
const uuid = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());
var name = "";

const router = express.Router();
router.post("/Signup", async (req, res) => {
	const locationDetails = await getLocation();
	console.log(req.body);
	const user = {
		Email: req.body.Email,
		Name: req.body.Name,
		Username: req.body.Username,
		Password: CryptoJS.AES.encrypt(
			req.body.Password,
			process.env.SECRET_KEY
		).toString(),
		Location: {
			ip: locationDetails.ip,
			lat: locationDetails.lat.toString(),
			lng: locationDetails.lng.toString(),
			City: locationDetails.City,
			Country: locationDetails.Country,
			Timezone: locationDetails.Timezone,
		},
	};
	try {
		const result = await addUser(user);
		if (result !== "User already exists") {
			res.status(200).json("User Created");
		} else {
			res.status(401).json("User Already Exists");
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).json(err);
	}
});

router.post("/Login", async (req, res) => {
	let email = req.body.Email; // get from request body or query string etc...
	let password = req.body.Password; // get from request body or query string etc...
	const found_user = await findUsers(email);
	if (found_user == null) {
		// user not found
		res.status(404).json("User Not Found");
	} else {
		const user = found_user;
		if (user) {
			const HashedPassword = CryptoJS.AES.decrypt(
				user.Password,
				process.env.SECRET_KEY
			);
			const OriginalPassowrd = HashedPassword.toString(CryptoJS.enc.Utf8);
			if (OriginalPassowrd === password) {
				// user is authenticated
				console.log("User authed");
				res.status(200).json({
					Name: user.Name,
					Username: user.Username,
					Email: user.Email,
					AuthStatus: "Authenticated",
				});
			} else {
				// user is not authenticated
				console.log("Unable to authenticate");
				res.status(401).json({ error: "Wrong Password" });
				// res.status(201).json("user is not authenticated");
			}
		}
	}
});

router.get("/Name", async (req, res) => {
	res.send(name);
});

router.get("/deleteAll", async (req, res) => {
	await DeleteAllUsers();
	res.send("Users deleted");
});

module.exports = router;
