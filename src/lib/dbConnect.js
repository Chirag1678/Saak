import mongoose from "mongoose";

const connectDB = async () => {
	if (!mongoose.connections[0].readyState) {
		try {
			const con = await mongoose.connect(process.env.MONGO_URI, {
				dbName: process.env.PRODUCTION == "true" ? "main" : "test",
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			console.log(`MongoDB is Connected with Host: ${con.connection.host}`);
		} catch (error) {
			console.log("Error connecting to mongo.", error);
		}
	}
};

export default connectDB;
