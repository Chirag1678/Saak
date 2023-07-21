"use client";

import React, { useState } from "react";
import Title from "../../Components/AdminComponents/Title";
import Stocker from "../../Components/AdminComponents/Stocker";
import DeleteIcon from "../../assets/Admin/DeleteIcon.svg";
import EditIcon from "../../assets/Admin/EditIcon.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toastSuccess, toastError } from "../../Components/Toasts/Toast";

const Page = async () => {
	const { data } = await axios.get("http://localhost:8000/Admin/allProducts");

	const handleDelete = async (PCode) => {
		try {
			const { data } = await axios.post(
				"http://localhost:8000/Admin/deleteProduct",
				{
					PCode: PCode,
				}
			);
			toastSuccess(`Deleted ${PCode}`);
			setTimeout(() => {
				window.location.href = "/Admin/Products";
			}, 1000);
		} catch {
			toastError(`Product wasn't deleted`);
		}
	};

	const handleStockDecrement = async (PCode) => {
		try {
			await axios.post("http://localhost:8000/Admin/Stock", { PCode: PCode });
		} catch {}
	};
	if (data.length > 0) {
		return (
			<div className="container mx-auto pt-16">
				<div className="flex justify-between w-full">
					<Title title={"Manage Products"} />
					<Link href="/Admin/Products/AddProduct">
						<Title title={"Add Product"} />
					</Link>
				</div>

				<div className="productList pt-12 items-center flex flex-col gap-y-3 w-full">
					{data.map((e) => {
						return (
							<div className="productCards bg-[#332f33] flex justify-between font-Cabinet font-medium py-4 px-4 w-full">
								<div className="flex-col flex text-xl">
									<div className="flex gap-x-4 relative">
										<div className="PCode relative">
											Product Code: {e.PCode}
										</div>

										<button>
											<Image src={EditIcon} />
										</button>
									</div>
									<div className="flex gap-x-4">
										<div className="PName">Product Name: {e.PName}</div>
									</div>
									<div className="flex gap-x-4">
										<div className="PPrice">Price: ₹ {e.PPrice}</div>
									</div>
								</div>

								<div className="flex gap-x-10 items-center">
									<Stocker data={e.PStock} PCode={e.PCode} />
									<button
										className="bg-[#d8d1d0] px-3 py-2 rounded-[3px]"
										onClick={() => handleDelete(e.PCode)}
									>
										<Image src={DeleteIcon} />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		return (
			<div className="NotAvailable text-white text-3xl">
				No Products Available
			</div>
		);
	}
};

export default Page;
