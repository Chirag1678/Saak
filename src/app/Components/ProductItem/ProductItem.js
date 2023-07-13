"use client";

import React from "react";
import ImageGrid from "./Subcomponents/ImageGrid";
import FeatureCard from "./Subcomponents/FeatureCard";
import PriceSection from "./Subcomponents/PriceSection";
import ReviewSection from "./Subcomponents/ReviewSection";

import "./style.css";

const ProductItem = async (props) => {
	console.log(props);
	return (
		<div className="container mx-auto">
			<div className="pt-32 flex flex-col gap-y-[30px] w-full">
				<ImageGrid />

				<div className="grid grid-cols-2 h-full gap-[30px]">
					<FeatureCard />
					<div className="w-full h-full flex flex-col gap-y-[20px]">
						<PriceSection />
						<ReviewSection />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
