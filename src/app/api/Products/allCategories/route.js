import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { PCategory } from "@/models/PCategory.model";

export const GET = async (req, res) => {
	await connectDB();
	try {
		const pipeline = [
			{
				$project: {
					_id: 0,
					PCat: 1,
				},
			},
			{
				$match: {},
			},
		];

		const result = await PCategory.aggregate(pipeline);
		return NextResponse.json({ data: result }, { status: 200 });
	} catch (e) {
		console.log("Error", e);
		return NextResponse.json({ data: null }, { status: 500 });
	}
};
