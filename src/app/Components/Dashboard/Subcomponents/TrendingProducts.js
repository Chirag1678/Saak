"use client";

import React, { useState } from "react";
import ProductCard from "../../Global/ProductCard";
import axios from "axios";

const TrendingProducts = async (props) => {
	const { data } = await axios.get("http://localhost:8000/Product/Trending");
	return data.map((card) => {
		return (
			<div className="flex justify-between w-full">
				<ProductCard data={card} />
			</div>
		);
	});
};

export default TrendingProducts;
