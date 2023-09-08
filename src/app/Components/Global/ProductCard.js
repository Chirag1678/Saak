"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import LikeIcon from "../ProductItem/Subcomponents/LikeIcon";
import { useId } from "react";
import "./style.css";

const ProductCard = ({ data }) => {
	const [cartCount, setCartCount] = useState(0);

	// const [hovered, setHovered] = useState("500px");

	const onEnter = ({ currentTarget }) => {
		let timeline = gsap.timeline();
		timeline.to(currentTarget, {
			boxShadow: "0px 4px 7px 0px rgba(147, 147, 147, 0.50)",
		});
		// .to(currentTarget, {
		// 	height: "fit-content",
		// })
		// .set(currentTarget, { height: "fit-content" });
	};

	const onLeave = ({ currentTarget }) => {
		let timeline = gsap.timeline();

		timeline.to(currentTarget, {
			boxShadow: "0px 0px 0px 0px rgba(147, 147, 147, 0.50)",
		});
		// .to(currentTarget, {
		// 	height: "400px",
		// 	transition: "height 200ms",
		// })
		// .set(currentTarget, { height: "400px" });
	};
	return (
		<div
			className={`flex flex-col rounded-2xl gap-y-3 border-2 border-transparent w-full boxes relative px-2`}
			onMouseEnter={onEnter}
			onMouseLeave={onLeave}
			key={data.PCode}
		>
			<div className="absolute top-2 right-2"></div>
			<Link href={`/Product/${data.PCode}`}>
				<div className="img relative h-32">
					<Image
						src={data.PImages.MainImg}
						alt=""
						fill
						className="w-full rounded-t-2xl object-cover"
					/>
				</div>
				<div className="text flex flex-col pt-3 px-3">
					<div className="head text-base text-white font-Cabinet font-bold">
						{data.PName}
					</div>

					<div className="flex justify-between items-center w-full py-2">
						<div className="font-bold font-Cabinet text-base">
							₹ {data.PPrice} <span className="text-sm">+ taxes</span>
						</div>

						<div className="inline-flex p-[9px_29px] bg-[#302b2f] rounded-[6px]">
							<LikeIcon PCode={data.PCode} />
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
