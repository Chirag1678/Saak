import { NextResponse } from "next/server";
import connectDb from "@/lib/dbConnect";
import { User } from "@/models/User.model";

export const GET = async (req, res) => {
	console.log(User);
	await connectDb();

	try {
		const pipeline = [
			{
				$project: {
					_id: 0,
					Name: 1,
				},
			},
			{
				$match: {},
			},
		];

		const result = await User.aggregate(pipeline);

		// const result = await User.findOne({});
		console.log(result);
		return NextResponse.json({ data: result }, { status: 200 });
	} catch (e) {
		return NextResponse.json({ data: null }, { status: 500 });
		console.log("error", e);
	}
};
