import React from "react";
import Cart from "./Cart";
import BuyBtn from "./BuyBtn";

const PriceSection = () => {
	return (
		<div className="bg-[#3f383d] px-5 py-8 flex items-end justify-between rounded-2xl">
			<div className=" font-Cabinet font-bold text-6xl flex items-end ">
				₹ 19,990 <span className="text-xl">+taxes</span>
			</div>
			<div className="flex gap-x-[10px] items-center">
				<Cart />
				<BuyBtn />
			</div>
		</div>
	);
};

export default PriceSection;
