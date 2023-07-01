import React from "react";
import TrendingCard from "./Subcomponents/TrendingCard";
import TrendingProducts from "./Subcomponents/TrendingProducts";
import { dashboardTrendingCards } from "../../layout";

const TrendingProds = () => {
	return (
		<div className="mt-[67px]">
			<div className="flex gap-x-10 items-center h-full">
				<TrendingCard text="Trending Products" />
				<div className="bg-[#cb492b] h-[163px] w-5 rounded-full"></div>
				<TrendingProducts data={dashboardTrendingCards} />
			</div>
		</div>
	);
};

export default TrendingProds;
