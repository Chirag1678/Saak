import React from "react";
import PriceTitle from "./PriceTitle";

const PriceCard = ({
	Subtotal,
	CGST,
	UGST,
	IGST,
	DeliveryCharge,
	Discount,
}) => {
	const arr = [
		["Subtotal", Subtotal],
		["CGST", CGST],
		["UGST", UGST],
		["DeliveryCharge", DeliveryCharge],
		["Discount", Discount],
	];

	let totalPrice = 0;

	arr.map((e) => {
		totalPrice += e[1];
	});

	return (
		<div className="items-center h-full w-full">
			<div className="bg-[#d8d1d0] py-4 px-4 rounded-3xl flex flex-col justify-between w-full h-full">
				<div className="flex flex-col items-center font-Cabinet text-black text-4xl font-bold">
					Total
				</div>

				<div className="categories w-full">
					{arr.map((e) => {
						return <PriceTitle Title={e[0]} Price={e[1]} />;
					})}
				</div>

				<div className="Total w-full">
					<div className="flex w-full justify-between font-Cabinet font-bold">
						<div className="text-black">Total Amount</div>
						<div className="price text-black">₹ {totalPrice}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceCard;
