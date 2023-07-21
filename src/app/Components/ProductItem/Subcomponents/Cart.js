"use client";

import React, { useState } from "react";
import Image from "next/image";
import cart from "../../../assets/Product/Cart.svg";

const Cart = ({ stock }) => {
	const [cartQuantity, setCartQuantity] = useState(0);

	const increment = () => {
		if (cartQuantity !== stock) {
			setCartQuantity(cartQuantity + 1);
		}
	};

	const decrement = () => {
		if (cartQuantity !== 0) setCartQuantity(cartQuantity - 1);
		else {
			setCartQuantity(0);
		}
	};
	return (
		<div className="border-[1px] border-[#d8d1d0] flex gap-x-[10px] py-[13.5px] px-[20px] rounded-2xl text-xl items-center">
			<button onClick={decrement} className="">
				-
			</button>
			<div className="cartIcon relative w-6 h-6 flex justify-center items-center">
				{cartQuantity === 0 ? (
					<Image src={cart} fill alt="" className="" />
				) : (
					cartQuantity
				)}
			</div>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Cart;
