import { admnProds } from "@/lib/Admin/Admin";
import { NextResponse } from "next/server";

export const GET = async (req) => {
	try {
		const products = await admnProds();

		return NextResponse.json({ data: products }, { status: 200 });
	} catch (e) {
		console.log("Error", e);
		return NextResponse.json({ data: null }, { status: 500 });
	}
};
