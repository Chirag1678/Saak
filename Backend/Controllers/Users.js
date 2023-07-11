const { pipe } = require("gsap");
const { User } = require("../Models/Users");
const axios = require("axios");

async function validateEmail(email) {
	// Creates a model for the collection
	// const model = await mongoose.model("Users", UserSchema);
	// If the user exists, return false
	const pipeline = [
		{
			$match: {
				Email: email,
			},
		},
	];

	const result = await User.aggregate(pipeline);
	if (result.length !== 0) {
		return false;
	}
	// If the user doesn't exist, return true
	else {
		return true;
	}
}

// Add a user
async function addUser(NewUser) {
	// This checks the email validation if the email exists before
	try {
		if (await validateEmail(NewUser.Email)) {
			// Creates a new user

			const User1 = new User({
				Email: NewUser.Email,
				Name: NewUser.Name,
				Username: NewUser.Username,
				Password: NewUser.Password,
				Location: {
					ip: NewUser.Location.ip,
					lat: NewUser.Location.lat,
					lng: NewUser.Location.lng,
					City: NewUser.Location.City,
					Country: NewUser.Location.Country,
					Timezone: NewUser.Location.Timezone,
				},
			});
			try {
				// Saves the user to the database
				var a = "";
				await User1.save()
					.then(async (res) => {
						console.log("User Created");
						a = res;
					})
					.catch((err) => {
						console.log(err);
					});
			} catch (err) {
			} finally {
				return a;
			}
		} else {
			return "User already exists";
		}
	} catch (e) {
		return e;
	}
}

async function findUsers(email) {
	const pipeline = [
		{
			$match: {
				Email: email,
			},
		},
	];
	const a = await User.aggregate(pipeline);
	return a[0];
}

async function getLocation() {
	var ip = "";
	var userLocationDetails = {
		ip: "",
		lat: "",
		lng: "",
		City: "",
		Country: "",
		Timezone: "",
	};
	await axios.get(`https://api.ipify.org?format=json`).then(async (e) => {
		ip = e.data.ip;
		await axios
			.get(
				`https://geo.ipify.org/api/v2/country,city?apiKey=at_23n3XnUSdWRrHCmexH9PC7oQofaIm&ipAddress=${ip}`
			)
			.then(async (response) => {
				userLocationDetails.ip = ip;
				userLocationDetails.lat = response.data.location.lat;
				userLocationDetails.lng = response.data.location.lng;
				userLocationDetails.City = response.data.location.city;
				userLocationDetails.Country = response.data.location.country;
				userLocationDetails.Timezone = response.data.location.timezone;
			});
	});

	return userLocationDetails;
}

async function DeleteAllUsers() {
	await User.deleteMany({});
	console.log("Deleted all users");
}

module.exports = {
	addUser,
	DeleteAllUsers,
	findUsers,
	validateEmail,
	getLocation,
};
