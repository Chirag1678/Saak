import React from "react";
import Link from "next/link";
import Title from "../Components/AdminComponents/Title";

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
	const arr = [
		{ name: "Manage Products", Link: "/" },
		{ name: "Manage Coupons", Link: "/" },
		{ name: "Manage Users", Link: "/" },
	];
	return (
		<>
			<div className="container mx-auto pt-6 h-screen">
				<Title title={"Admin"} />

				<div className="flex h-full items-center gap-x-7 justify-center">
					{arr.map((e) => {
						return <AdminBox data={e} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Page;
