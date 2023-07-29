"use client";

import React from "react";
import Image from "next/image";
import cart from "../../../assets/Product/Cart.svg";
import axios from "axios";
import { toastError } from "../../Toasts/Toast";

const Cart = ({ stock, details, cartQuantity, setCartQuantity }) => {
	const CartHandler = async (Quantity) => {
		const Data = {
			Email: "anshbhasin3723@gmail.com", // Replace with session.user.email
			PCode: details.PCode,
			Price: details.Price,
			Quantity: Quantity,
		};
		try {
			const response = await axios.post(
				"http://localhost:8000/Product/CartHandler",
				Data
			);
			if (response.status === 200) {
				console.log("Success");
			}
		} catch (error) {
			console.log(error);
			toastError("There was some issue");
		}
	};

	const increment = () => {
		if (cartQuantity !== stock) {
			setCartQuantity(cartQuantity + 1);
			CartHandler(cartQuantity + 1);
		}
	};

	const decrement = () => {
		if (cartQuantity !== 0) {
			setCartQuantity(cartQuantity - 1);
			CartHandler(cartQuantity - 1);
		} else {
			setCartQuantity(0);
		}
	};

	return (
		<div className="border-[1px] border-[#d8d1d0] flex gap-x-[10px] py-[13.5px] px-[20px] rounded-2xl text-xl items-center">
			<button onClick={decrement}>-</button>
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
