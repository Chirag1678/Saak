import React from "react";

const CouponCard = () => {
	return (
		<div className="bg-[#cb492b] py-4 px-3 rounded-3xl h-full">
			<div className="flex flex-col justify-between items-center gap-y-6">
				<div className="text-center text-[#d8d1d0] text-4xl font-Cabinet font-bold">
					Coupons %
				</div>

				<div className="input">
					<input
						type="text"
						className="bg-[#d8d1d0] outline-none border-none placeholder:text-[#302b2f65] text-[#302b2f] px-2 py-2 rounded-xl font-Cabinet font-bold w-full"
						placeholder="Enter Code"
					/>
				</div>

				<div className="applyBtn">
					<button className="bg-[#302b2f] px-3 py-2 text-[#d8d1d0] rounded-xl font-Cabinet font-bold">
						Apply Coupon
					</button>
				</div>
			</div>
		</div>
	);
};

export default CouponCard;
