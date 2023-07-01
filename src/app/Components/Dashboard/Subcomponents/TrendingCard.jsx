import React from "react";
import Image from "next/image";
import arrow from "../../../assets/Dashboard/arrow.svg";

const TrendingCard = (props) => {
	return (
		<div className="bg-[#dbd1d0] p-[23px_13px] rounded-2xl h-[213px]">
			<div className="flex flex-col h-full justify-between">
				<div className="font-Cabinet text-[36px] text-black font-bold text-center">
					{props.text}
				</div>
				<div className=" w-full flex justify-end">
					<div className="border-[#302b2f] border-[1px] p-3 rounded-full">
						<Image
							src={require("../../../assets/Dashboard/arrow.svg").default}
							alt=""
							width="fill"
							height="fill"
							className=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrendingCard;
