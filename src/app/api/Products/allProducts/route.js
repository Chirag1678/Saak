import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import { Product } from "@/models/Product.model";

// console.log(Product);

export const GET = async (req, res) => {
	await connectDB();
	try {
		// const pipeline = [
		// 	{
		// 		$projection: {},
		// 	},
		// ];
		// const result = await Product.aggregate(pipeline);

		const pipeline = [
			{
				$project: {
					_id: 0,
					PCode: 1,
				},
			},
			{
				$match: {
					// Your match conditions here
					// PCode: "FBMFR",
				},
			},
		];

		const result = await Product.aggregate(pipeline);
		console.log(result);
		return NextResponse.json({ data: result }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ data: null }, { status: 500 });
	}
	// res.status(200).json("Hello bitch");
};
