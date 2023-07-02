/* XRqWag0jz8COxFbn */

const mongoose = require("mongoose");
const User = require("./Schemas/Users");
const uuid = require("uuid");

const uri = "mongodb+srv://nude:XRqWag0jz8COxFbn@ishan.q7qa3rl.mongodb.net/";

async function validateEmail(email) {
	// Creates a model for the collection
	const model = await mongoose.model("Users", User);
	// If the user exists, return false
	if (await model.findOne({ Email: email }).exec()) {
		return false;
	}
	// If the user doesn't exist, return true
	else {
		return true;
	}
}

async function addUser(email, name, password) {
	// This checks the email validation if the email exists before
	if (await validateEmail(email)) {
		// Creates a model for the collection
		const model = await mongoose.model("Users", User);
		// Creates a new user
		const User1 = new model({
			Email: email,
			Name: name,
			Password: password,
			Uuid: uuid.v4(),
		});

		console.log(`Creating ${name}'s account...`);
		// Saves the user to the database
		await User1.save()
			.then(async (res) => {
				console.log("User created");
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		console.log("User already exists");
	}
}

async function DeleteAllUsers() {
	const model = await mongoose.model("Users", User);
	await model.deleteMany({});
	console.log("Deleted all users");
}

// Testing Main Function
async function main() {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		// Add a user
		await addUser("anshbhasin372123@gmail.com", "Ansh", "Ansh@0055");
		// Delete all users
		// await DeleteAllUsers();
	} catch (e) {
		console.error(e);
	}
}
main();
