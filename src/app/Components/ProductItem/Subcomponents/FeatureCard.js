import React from "react";
import BoltOn from "../../../assets/Product/boltOn.svg";
import LinexCoated from "../../../assets/Product/linexCoat.svg";
import Compatible from "../../../assets/Product/compatible.svg";
import LikeIcon from "./LikeIcon";
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

const FeatureIcons = (props) => {
	return (
		<div className="boltOn bg-[#302b2f] rounded-full relative h-16 w-16 flex justify-center">
			<Image src={props.img} fill className="px-5 py-3 object-contain" alt="" />
		</div>
	);
};

const FeatureCard = ({ data }) => {
	const description = data.Description;
	const arrDesc = description.split("\n");

	const FeatureIcons1 = data.Features;
	// console.log(FeatureIcons1);
	return (
		<div className="w-full h-full flex-col bg-[#dbd1d0] py-[25px] rounded-2xl px-10">
			<div className="flex w-full justify-between gap-x-16 gap-y-[25px]">
				<div className="flex-col w-full">
					<div className="font-Cabinet text-4xl font-bold text-[#302b2f]">
						{data.Name}
					</div>
					<div className="flex justify-between w-full items-end">
						<div className="flex gap-x-[8px] items-end">
							<div className="star flex items-end gap-x-[6px]">
								<div className="h-6">
									<Star />
								</div>
								<div className="text-[14px] font-lato text-black flex items-end h-full">
									{data.Rating}
								</div>
								<div className="text-[12px] text-black font-bold flex items-end h-full">
									({data.ReviewsNum} reviews)
								</div>
							</div>

							<div className="bar w-[2px] h-[20px] bg-[#59354f]"></div>

							<div className="purchased text-[#000] font-lato flex items-end gap-x-1 leading-tight">
								{data.Purchased}{" "}
								<span className="font-bold font-lato text-[14px]">
									Purchased
								</span>
							</div>
						</div>

						<div className="font-bold text-black text-[14px] leading-tight">
							By {data.Brand[0]}
						</div>
					</div>
				</div>

				<div className=" w-[18%] flex items-end">
					<button className="likeBtn relative w-full bg-[#302b2f] rounded-xl likeBtn flex justify-center py-2">
						<LikeIcon PCode={data.PCode} />
					</button>
				</div>
			</div>

			<div className="flex gap-x-[37px] mt-[25px] justify-between">
				<div className="flex flex-col gap-y-[27px]">
					<div className="flex flex-col gap-y-[7px]">
						<div className="featuresText text-black text-3xl font-Cabinet font-bold">
							Features
						</div>

						<div className="featureIcons flex gap-x-[23px]">
							<FeatureIcons img={BoltOn} />
							<FeatureIcons img={LinexCoated} />
							<FeatureIcons img={Compatible} />
						</div>
					</div>

					<div className="featurePoints text-black">
						<ul className="font-lato text-base">
							{arrDesc.map((e) => {
								return <li key={e}>{e}</li>;
							})}
						</ul>
					</div>
				</div>

				<div className="bg-[#302b2f] flex justify-center items-center text-center px-5 text-4xl rounded-2xl font-Cabinet font-bold">
					{data.Warranty} Year Warranty
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
