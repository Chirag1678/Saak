"use client";

import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import BuyBtn from "./BuyBtn";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toastError } from "../../Toasts/Toast";

const PriceSection = ({ data }) => {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			toastError("Login First!");
			setTimeout(() => {
				window.location.href = "/Auth/Login";
			}, 1000);
		},
	});

	const details = {
		PCode: data.PCode,
		Price: data.Price,
		Stock: data.Stock,
	};
	console.log(details);

	const [cartQuantity, setCartQuantity] = useState(0);

	useEffect(() => {
		const getCartQuantity = async () => {
			if (session?.user?.email) {
				try {
					const response = await axios.post(
						`http://localhost:8000/Product/getQuantity/${data.PCode}`,
						{ Email: session.user.email }
					);
					setCartQuantity(response.data.Quantity);
				} catch (err) {
					console.log(err);
				}
			}
		};
		getCartQuantity();
	}, [data.PCode, session?.user?.email]);

	return (
		<div className="bg-[#3f383d] px-5 py-8 flex items-end justify-between rounded-2xl">
			<div className="font-Cabinet font-bold text-6xl flex items-end ">
				₹ {data.Price} <span className="text-xl">+taxes</span>
			</div>
			<div className="flex gap-x-[10px] items-center">
				<Cart
					stock={data.Stock}
					details={details}
					cartQuantity={cartQuantity}
					setCartQuantity={setCartQuantity}
				/>
				<BuyBtn />
			</div>
		</div>
	);
};

export default PriceSection;
