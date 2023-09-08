"use client";

import React, { useEffect, useId } from "react";
import Link from "next/link";
import Title from "../Components/AdminComponents/Title";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const AdminBox = ({ data }) => {
	return (
		<Link href={data.Link}>
			<div className="box bg-[#d8d1d0] text-4xl font-bold text-black px-12 py-24 rounded-2xl font-Cabinet">
				{data.name}
			</div>
		</Link>
	);
};

const Page = () => {
	const router = useRouter();
	const session = useSession();

	const arr = [
		{ name: "Manage Products", Link: "/Admin/Products" },
		{ name: "Manage Coupons", Link: "/" },
		{ name: "Manage Users", Link: "/" },
	];

	return (
		<>
			{session?.user?.isAdmin === true ? (
				<div className="container mx-auto pt-6 h-screen">
					<Title title={"Admin"} />

					<div className="flex h-full items-center gap-x-7 justify-center">
						{arr.map((e) => {
							const id = useId();
							return <AdminBox data={e} key={id} />;
						})}
					</div>
				</div>
			) : (
				router.replace("/")
			)}
		</>
	);
};

export default Page;
