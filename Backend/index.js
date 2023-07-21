/* XRqWag0jz8COxFbn */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);

// Routes
const userRoute = require("./Routes/UserRoutes");
const usernameRoute = require("./Routes/UsernameRoutes");
const ProductRoute = require("./Routes/ProductRoutes");
const AdminRoute = require("./Routes/Admin-Routes/AdminRoutes");
const ImgRoutes = require("./Routes/Admin-Routes/ImageRoutes");

// Importing Schemas
const uri = process.env.MONGODB_URL;

connect();

async function connect() {
	try {
		await mongoose
			.connect(uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => {
				console.log("Connected to db");
			});
	} catch (e) {
		console.error(e);
	}
}

app.get("/", async (req, res) => {});

app.use("/api/auth/", userRoute);
app.use("/api/Username/", usernameRoute);
app.use("/Product/", ProductRoute);
app.use("/Admin/", AdminRoute);
app.use("/AdminImg/", ImgRoutes);

app.listen(process.env.PORT || 8000, async () => {
	console.log(`started on ${process.env.PORT}`);
});
