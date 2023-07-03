/* XRqWag0jz8COxFbn */

const mongoose = require("mongoose");
// Importing Schemas
const UserSchema = require("./Schemas/Users");
const ProductSchema = require("./Schemas/Product");
const uuid = require("uuid");

const uri = "mongodb+srv://nude:XRqWag0jz8COxFbn@ishan.q7qa3rl.mongodb.net/";

async function validateEmail(email) {
	// Creates a model for the collection
	const model = await mongoose.model("Users", UserSchema);
	// If the user exists, return false
	if (await model.findOne({ Email: email }).exec()) {
		return false;
	}
	// If the user doesn't exist, return true
	else {
		return true;
	}
}

async function addUser(NewUser) {
	// This checks the email validation if the email exists before
	if (await validateEmail(NewUser.Email)) {
		// Creates a model for the collection
		const model = await mongoose.model("Users", UserSchema);
		// Creates a new user
		const User1 = new model({
			Email: NewUser.Email,
			Name: NewUser.Name,
			Password: NewUser.Password,
			Uuid: uuid.v4(),
		});

		console.log(`Creating ${NewUser.Name}'s account...`);
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

async function addProduct(NewProduct) {
	if (await validateProduct(NewProduct.PCode)) {
		// Creates a model for the collection
		const model = await mongoose.model("Catalogue", ProductSchema);
		// Creates a new user
		const Product1 = new model({
			PCode: NewProduct.PCode,
			PName: NewProduct.PName,
			PPrice: NewProduct.PPrice,
			PDescription: NewProduct.PDescription,
			PImage: NewProduct.PImage,
			PStock: NewProduct.PStock,
			PCategory: NewProduct.PCategory,
			PBrand: NewProduct.PBrand,
			PReviews: NewProduct.PReviews,
			PDimensions: {
				PWeight: NewProduct.PDimensions.PWeight,
				PLength: NewProduct.PDimensions.PLength,
				PWidth: NewProduct.PDimensions.PWidth,
				PHeight: NewProduct.PDimensions.PHeight,
			},
		});

		console.log(`Creating Product ${NewProduct.PName}...`);
		// Saves the user to the database
		await Product1.save()
			.then((res) => {
				console.log("Product created");
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		console.log(`Product already exists and PCode is ${NewProduct.PCode}`);
	}
}

async function validateProduct(PCode) {
	// Creates a model for the collection
	const model = await mongoose.model("Catalogue", ProductSchema);
	// If the user exists, return false
	if (await model.findOne({ PCode: PCode }).exec()) {
		return false;
	}
	// If the user doesn't exist, return true
	else {
		return true;
	}
}

async function DeleteAllProducts() {
	const model = await mongoose.model("Catalogue", ProductSchema);
	await model.deleteMany({});
	console.log("Deleted all products");
}

async function DeleteAllUsers() {
	const model = await mongoose.model("Users", UserSchema);
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
		const user = {
			Email: "anshbhasin3723@gmail.com",
			Name: "Ansh",
			Password: "Ansh@0055",
		};
		await addUser(user);

		// Add a product
		const currProd = {
			PCode: "RBM-R",

			PName: "Rear Bumper Model - RW",

			PPrice: 19990,

			PDescription:
				"* Simple Bolt On Installation\n* Made of high grade FRP and WR making it lightweight yet sturdy\n* Line-X Coated with black textured finish",

			PImage: "https://",

			PStock: 10,

			PCategory: "Rear Bumper",

			PBrand: "Bimbra 4X4",

			PDimensions: {
				PWeight: 1000,
				PLength: 100,
				PWidth: 1000,
				PHeight: 1000.5,
			},

			PReviews: [
				{
					Uuid: uuid.v4(),
					Review: "Good",
					Rating: 4,
				},
			],
		};

		// await addProduct(currProd);

		// Delete all products
		// await DeleteAllProducts();

		// Delete all users
		// await DeleteAllUsers();
	} catch (e) {
		console.error(e);
	}
}
main();
