"use client";

import React, { useState } from "react";
import { toastSuccess, toastError } from "../Toasts/Toast";
import axios from "axios";

const stockHandler = async (PCode, PStock) => {
	try {
		const response = await axios.post(
			"http://localhost:8000/Admin/updateStock",
			{
				PCode: PCode,
				PStock: PStock,
			}
		);
		if (response.status === 200) {
			toastSuccess("Updated Stock");
		} else {
			throw err;
		}
	} catch (err) {
		toastError("Failed to update stock");
	}
};

const Stocker = ({ data, PCode }) => {
	const [Stock, setStock] = useState(data);

	const increment = async () => {
		setStock(Stock + 1);
		stockHandler(PCode, Stock + 1);
	};

	const decrement = async () => {
		if (Stock !== 0) {
			setStock(Stock - 1);
			stockHandler(PCode, Stock - 1);
		}
	};
	return (
		<div className="flex gap-x-4 text-white items-center">
			Stock Left:
			<button className="decrement text-3xl cursor-pointer" onClick={decrement}>
				-
			</button>
			<div className="stockNum text-black bg-[#d8d1d0] px-2 py-1 h-fit rounded-[5px]">
				{Stock}
			</div>
			<button className="increment text-3xl cursor-pointer" onClick={increment}>
				+
			</button>
		</div>
	);
};

export default Stocker;
