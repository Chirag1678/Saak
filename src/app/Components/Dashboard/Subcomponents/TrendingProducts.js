"use client";

import React, { useState } from "react";
import ProductCard from "../../Global/ProductCard";
import axios from "axios";

const TrendingProducts = async (props) => {
	const { data } = await axios.get("http://localhost:8000/Product/Trending");
	let i = 0;
	return data.map((card) => {
		if (i < 4) {
			i += 1;
			return (
				<div className="flex justify-between w-full">
					<ProductCard data={card} />
				</div>
			);
		} else {
			return;
		}
	});
};

export default TrendingProducts;
