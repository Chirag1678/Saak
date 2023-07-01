import React from "react";
import Image from "next/image";
import Search from "../../assets/Dashboard/searchIcon.svg";

const Itemsfy = () => {
	return (
		<div className="flex justify-between pt-[58px] items-center">
			<div className="text-6xl text-white font-Cabinet font-bold w-full">
				Items for you
			</div>
			<div className="SearchBox w-full flex bg-[#dbd1d0] rounded-xl p-[9px_26px] gap-x-2 items-center">
				<input
					type="text"
					placeholder="Search"
					className="bg-[#dbd1d0] w-full text-[#302b2f] h-full text-[20px] outline-none placeholder:text-[#302b2f]"
				/>
				<button className="bg-[#302b2f] p-5 w-fit rounded-full">
					<Image src={Search} alt="" width="fill" height="fill" />
				</button>
			</div>
		</div>
	);
};

export default Itemsfy;
