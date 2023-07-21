"use client";

import React from "react";
import axios from "axios";
import ProductItem from "../Components/ProductItem/ProductItem";

const Page = async () => {
	const PCode = "FBMFR";
	const response = await axios.post(
		`http://localhost:8000/Product/Find/${PCode}`,
		{ PCode: PCode }
	);
	// console.log(response);
	return <ProductItem data={response.data} />;
};

export default Page;
