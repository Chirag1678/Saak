import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { PCategory } from "@/models/PCategory.model";

export const GET = async (req, res) => {
	try {
		await connectDB();
		const { deletedCount } = await PCategory.deleteMany({});
		if (deletedCount > 0) {
			NextResponse.json({ data: "Deleted all", status: 200 });
		} else {
			NextResponse.json({ data: "No categories exist rn", status: 500 });
		}
	} catch (err) {
		NextResponse.json({ data: "Error", status: 500 });
		console.log(err);
	}
};
