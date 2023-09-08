"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
	const router = useRouter();

	const [pcode, setPCode] = useState("");
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-4 font-Cabinet font-bold text-[#d8d1d0] text-3xl">
			{" "}
			Enter a PCODE:{" "}
			<input
				type="text"
				className="rounded-2xl py-4 px-2 outline-none bg-[#302b2f] border-[#d8d1d0] border-2"
				onChange={(e) => setPCode(e.target.value)}
				value={pcode}
			/>{" "}
			<button
				type="submit"
				className="bg-[#d8d1d0 ]"
				onClick={() => router.push(`/Admin/Products/EditProduct/${pcode}`)}
			>
				Submit
			</button>
		</div>
	);
};

export default Page;
