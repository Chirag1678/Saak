import React from "react";
import boltOn from "../../../assets/Product/boltOn.svg";
import linexCoat from "../../../assets/Product/linexCoat.svg";
import compatible from "../../../assets/Product/compatible.svg";
import Image from "next/image";

const Star = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="fit"
			height="fit"
			viewBox="0 0 18 18"
			fill="none"
		>
			<path
				d="M8.10329 0.816631C8.47013 0.0734627 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
				fill="#CB492B"
			/>
		</svg>
	);
};

const LikeIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
		>
			<path
				d="M19.388 2.40003C18.8772 1.88904 18.2708 1.48368 17.6033 1.20712C16.9359 0.930555 16.2205 0.788208 15.498 0.788208C14.7755 0.788208 14.0601 0.930555 13.3926 1.20712C12.7252 1.48368 12.1187 1.88904 11.608 2.40003L10.548 3.46003L9.48797 2.40003C8.45628 1.36834 7.057 0.788743 5.59797 0.788743C4.13894 0.788743 2.73966 1.36834 1.70797 2.40003C0.676278 3.43173 0.0966797 4.831 0.0966797 6.29003C0.0966797 7.74907 0.676278 9.14834 1.70797 10.18L10.548 19.02L19.388 10.18C19.899 9.66928 20.3043 9.06285 20.5809 8.39539C20.8574 7.72793 20.9998 7.01252 20.9998 6.29003C20.9998 5.56755 20.8574 4.85214 20.5809 4.18468C20.3043 3.51722 19.899 2.91079 19.388 2.40003Z"
				fill="#D8D1D0"
			/>
		</svg>
	);
};

const FeatureIcons = (props) => {
	return (
		<div className="boltOn bg-[#302b2f] rounded-full relative h-16 w-16 flex justify-center">
			<Image src={props.img} fill className="px-5 py-3 object-contain" alt="" />
		</div>
	);
};

const FeatureCard = () => {
	return (
		<div className="w-full h-full flex-col bg-[#dbd1d0] py-[25px] rounded-2xl px-10">
			<div className="flex w-full justify-between gap-x-16 gap-y-[25px]">
				<div className="flex-col w-fit">
					<div className="font-Cabinet text-4xl font-bold text-[#302b2f]">
						Rear Bumper Model-RW
					</div>
					<div className="flex justify-between w-full items-end">
						<div className="flex gap-x-[8px] items-end">
							<div className="star flex items-end gap-x-[6px]">
								<div className="h-6">
									<Star />
								</div>
								<div className="text-[14px] font-lato text-black flex items-end h-full">
									4.5
								</div>
								<div className="text-[12px] text-black font-bold flex items-end h-full">
									(800 reviews)
								</div>
							</div>

							<div className="bar w-[2px] h-[20px] bg-[#59354f]"></div>

							<div className="purchased text-[#000] font-lato flex items-end gap-x-1 leading-tight">
								852{" "}
								<span className="font-bold font-lato text-[14px]">
									Purchased
								</span>
							</div>
						</div>

						<div className="font-bold text-black text-[14px] leading-tight">
							By Bimbra 4X4
						</div>
					</div>
				</div>

				<div className=" w-[18%] flex items-end">
					<button className="likeBtn relative w-full bg-[#302b2f] rounded-xl likeBtn flex justify-center py-2">
						<LikeIcon />
					</button>
				</div>
			</div>

			<div className="flex gap-x-[37px] mt-[25px]">
				<div className="flex flex-col gap-y-[27px]">
					<div className="flex flex-col gap-y-[7px]">
						<div className="featuresText text-black text-3xl font-Cabinet font-bold">
							Features
						</div>

						<div className="featureIcons flex gap-x-[23px]">
							<FeatureIcons img={boltOn} />
							<FeatureIcons img={linexCoat} />
							<FeatureIcons img={compatible} />
						</div>
					</div>

					<div className="featurePoints text-black">
						<ul className="font-lato text-base">
							<li>Bolt-on Installation</li>
							<li>Linex Coated</li>
							<li>
								Compatible with brake lights, number plates & parking sensors
							</li>
							<li>Compatible with tow ball / hooks</li>
						</ul>
					</div>
				</div>

				<div className="bg-[#302b2f] flex justify-center items-center text-center px-5 text-4xl rounded-2xl font-Cabinet font-bold">
					1 Year Warranty
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
