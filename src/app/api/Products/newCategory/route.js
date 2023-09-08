import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { CategoryCreator } from "@/lib/Products/Products";

export const POST = async (req, res) => {
	try {
		await connectDB();

		const body = await req.json();

		const Code = body.PCode;
		const Categories = [...body.Categories];

		// validate if pcode has something in it
		const Validator = /^[A-Z]+$/;

		if (Validator.test(Code) && Categories.length > 0) {
			const result = await CategoryCreator(Code, Categories);

			if (result?.status === 200) {
				return NextResponse.json(
					{ data: result?.data },
					{ status: result?.code }
				);
			} else {
				return NextResponse.json(
					{ data: result?.data },
					{ status: result?.code }
				);
			}
		} else {
			return NextResponse.json(
				{ data: "Invalid Data Passed" },
				{ status: 400 }
			); // return error message to client side
		}
	} catch ({ data, code }) {
		return NextResponse.json({ data: data }, { status: code });
	}
};
