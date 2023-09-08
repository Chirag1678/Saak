"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../Global/ProductCard";
import axios from "axios";
import Image from "next/image";

const FilterCard = ({ name, data }) => {
	return (
		<div className="name border-2 font-Cabinet font-bold border-[#d8d1d0] px-4 py-2 w-[200px] rounded-xl flex gap-x-4 items-center justify-between">
			<div className="name">{name}</div>
			<div>
				<Image
					src="http://res.cloudinary.com/dmgmcljcv/image/upload/v1691681210/xjderjdmwi4vopsdjgq5.svg"
					height="10"
					width="10"
					alt="open"
				/>
			</div>
		</div>
	);
};

const Catalogue = () => {
	const [data1, setData1] = useState(undefined);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8000/Products/allProducts"
				);
				setData1(response.data.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);
	return (
		<div className=" px-5 pt-32 container mx-auto flex flex-col gap-y-4">
			<div className="filters flex gap-x-6 items-center flex-wrap">
				Filters
				<FilterCard name={"Select your brand"} />
				<FilterCard name={"Select your car"} />
				<FilterCard name={"Discover"} />
			</div>

			<div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-5 justify-center gap-x-1">
				{!data1 ? (
					<div className="text font-bold font-Cabinet text-3xl">
						Loading ...
					</div>
				) : (
					data1.map((card) => {
						return <ProductCard data={card} key={card.PCode} />;
					})
				)}
			</div>
		</div>
	);
};

export default Catalogue;
