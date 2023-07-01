"use client";

import React, { useState } from "react";
import ProductCard from "../../Global/ProductCard";

const TrendingProducts = (props) => {
	const cards = props.data;
	return cards.map((card) => {
		console.log(card);
		return <ProductCard data={card} />;
	});
};

export default TrendingProducts;
