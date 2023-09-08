import { ProductCreator } from "@/lib/Products/Products";
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";

export const POST = async (req, res) => {
	try {
		await connectDB();

		const details = await req.json();

		const { status, data, code } = await ProductCreator(details);

		if (code === 200) {
			return NextResponse.json({ data: data }, { status: code });
		} else {
			return NextResponse.json({ data: data }, { status: code });
		}
	} catch (e) {
		return NextResponse.json({ data: e.data }, { status: e.code });
	}
};
