"use client";

import React, { useState } from "react";

const CartQuantity = ({ currQuantity }) => {
	const [quantity, setQuantity] = useState(currQuantity);

	const increment = () => {
		setQuantity(quantity + 1);
	};

	const decrement = () => {
		if (quantity != 0) {
			setQuantity(quantity - 1);
		}
	};
	return (
		<div className="cartQuantity flex items-center gap-x-1">
			<div className="decrement">
				<button className="decrement" onClick={decrement}>
					-
				</button>
			</div>
			<div className="bg-[#d8d1d0] p-1 w-7 h-7 text-black rounded-full flex justify-center items-center">
				{quantity}
			</div>
			<div className="increment">
				<button className="increment" onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
};

export default CartQuantity;
