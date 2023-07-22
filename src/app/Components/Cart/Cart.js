"use client";

import React from "react";
import Image from "next/image";
import Title from "../Global/Title";
import CartCard from "./Subcomponents/CartCard";
import PriceCard from "./Subcomponents/PriceCard";
import CouponCard from "./Subcomponents/CouponCard";
import DeliveryCalendar from "./Subcomponents/DeliveryCalendar";
import { useSelector } from "react-redux";

const Cart = () => {
	const username = localStorage.getItem("USERNAME");
	console.log(username);
	return (
		<>
			{username !== undefined && username !== null && username !== "" ? (
				<div className="h-full">
					<div className="flex items-end justify-between w-full">
						<Title title={"Cart"} />
						<div className="cartTotalItems font-Cabinet font-bold text-2xl">
							Your cart has 5 items
						</div>
					</div>

					<div className="grid grid-cols-10 w-full gap-x-[26px] h-full">
						<div className="col-span-8 grid grid-cols-8 w-full h-full">
							<div className="grid col-span-8 w-full h-full gap-y-4">
								<div className="cartItems w-full flex flex-col justify-start bg-[#332f33] rounded-3xl h-fit">
									<div className="w-full flex flex-col justify-center  p-2 rounded-2xl">
										<CartCard />
										<CartCard />
										<CartCard />
										<CartCard />
										<CartCard />
										<CartCard />
									</div>
								</div>
							</div>
						</div>

						<div className="relative col-span-2 flex justify-center h-full">
							<div className="fixed">
								<div className="grid grid-rows-3 items-start gap-y-4 pt-6 w-full sticky top-0 h-fit">
									<PriceCard
										Subtotal={79960}
										CGST={14}
										UGST={14}
										DeliveryCharge={0}
										Discount={0}
									/>

									<CouponCard />

									<div className="items-start flex h-fit">
										<button className="w-full text-black bg-[#d8d1d0] py-3 rounded-2xl font-Cabinet font-bold text-xl">
											Checkout !
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>Login First</div>
			)}
		</>
	);
};

export default Cart;
