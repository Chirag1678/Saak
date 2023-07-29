"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const ProductCard = ({ data }) => {
	const [cartCount, setCartCount] = useState(0);

	const onEnter = ({ currentTarget }) => {
		gsap.to(currentTarget, { borderColor: "#cb492b", ease: "circ.out" });
	};

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { borderColor: "" });
	};

	const increment = () => {
		setCartCount(cartCount + 1);
	};

	const decrement = () => {
		setCartCount(cartCount - 1);
	};
	return (
		<div
			className="flex flex-col p-[17px_8px] rounded-2xl gap-y-3 h-full border-2 border-transparent transition-all w-full"
			onMouseEnter={onEnter}
			onMouseLeave={onLeave}
		>
			<Link href={`/Product/${data.PCode}`}>
				<div className="img relative h-32">
					<Image
						src={data.PImages.MainImg}
						alt=""
						fill
						className="w-full rounded-xl object-cover"
					/>
				</div>
				<div className="text flex flex-col gap-y-1">
					<div className="head text-base text-white font-Cabinet font-bold">
						{data.PName}
					</div>
					<div className="flex justify-between items-center">
						<div className="price text-[14px] font-bold">₹ {data.PPrice}</div>
						<div className="cart gap-x-1 flex items-center justify-center">
							<button className="minus text-white" onClick={decrement}>
								-
							</button>
							<div
								className={`cartAmount bg-[#dbd1d0] rounded-full text-[#302b2f] w-10 h-10 flex justify-center items-center`}
							>
								{cartCount === 0 ? (
									<Image
										src={require(`../../assets/Dashboard/cart.svg`).default}
										alt="0"
										width="20"
										height="20"
									/>
								) : (
									cartCount
								)}
							</div>
							<button className="plus text-white" onClick={increment}>
								+
							</button>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
