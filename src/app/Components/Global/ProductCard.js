"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const ProductCard = (props) => {
	const card = props.data;
	const [cartCount, setCartCount] = useState(0);

	const onEnter = ({ currentTarget }) => {
		gsap.to(currentTarget, { borderColor: "#cb492b", ease: "circ.out" });
	};

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { borderColor: "" });
	};
	return (
		<div
			className="flex flex-col p-[17px_8px] rounded-2xl gap-y-3 h-full border-2 border-transparent transition-all"
			onMouseEnter={onEnter}
			onMouseLeave={onLeave}
		>
			<Link href={`/Product/p-${card.PCode}`}>
				<div className="img">
					<Image
						src={require(`../../assets/Dashboard/${card.img}.png`).default}
						alt=""
						width="fill"
						height="fill"
						className="w-full rounded-xl"
					/>
				</div>
				<div className="text flex flex-col gap-y-1">
					<div className="head text-base text-white font-Cabinet font-bold">
						{card.title}
					</div>
					<div className="flex justify-between items-center">
						<div className="price text-[14px] font-bold">₹ {card.price}</div>
						<div className="cart gap-x-1 flex items-center justify-center">
							<button
								className="minus text-white"
								onClick={
									cartCount === 0 ? 0 : () => setCartCount(cartCount - 1)
								}
							>
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
							<button
								className="plus text-white"
								onClick={() => setCartCount(cartCount + 1)}
							>
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
