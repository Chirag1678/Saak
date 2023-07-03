import React from "react";
import Image from "next/image";

const ServiceCard = (props) => {
	return (
		<div className="box 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-full flex flex-col 2xl:gap-y-8 xl:gap-y-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-4 gap-y-1 items-center 2xl:p-10 xl:p-10 lg:p-10 md:p-10 sm:p-5 p-3 rounded-xl h-full serviceCards justify-center">
			<div className="symbol w-fit h-fit bg-[#3b3439] p-4 rounded-full">
				<div className="rounded-full p-4 relative w-fit h-fit flex justify-center items-center">
					<Image src={props.img} alt="" quality={10000} fill className="" />
				</div>
			</div>
			<div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-base font-Cabinet text-center flex items-center h-full">
				{props.title}
			</div>
		</div>
	);
};

const Third = () => {
	return (
		<div className="container mx-auto bg-transparent z-20">
			<div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-2 grid-cols-2">
				<div className="col-span-7">
					<div className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-2xl 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center font-Cabinet font-bold 2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-5 px-5">
						Enhance Performance and Style
					</div>
				</div>
				<div className="col-span-5 flex items-center 2xl:justify-end xl:justify-end lg:justify-end md:justify-center sm:justify-center justify-center">
					<div className="2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base text-[12px] font-Cabinet text-[#cb492b] 2xl:font-bold xl:font-bold lg:font-bold md:font-bold sm:font-normal font-normal underline">
						Learn More
					</div>
				</div>
			</div>

			<div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-2 grid-cols-2 2xl:gap-x-16 xl:gap-x-10 lg:gap-x-5 md:gap-x-8 sm:gap-x-0 gap-x-0 2xl:gap-y-0 xl:gap-y-0 lg:gap-y-0 md:gap-y-8 sm:gap-y-5 gap-y-5 2xl:pt-12 xl:pt-12 lg:pt-12 md:pt-3 sm:pt-2 pt-2  2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-10 px-5 justify-center">
				<div className="col-span-3 2xl:px-4">
					<ServiceCard
						img="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688051096/saakImg/serviceIcon1_lbxe5k.svg"
						title="Elevate Your Design Experience"
					/>
				</div>
				<div className="col-span-3 2xl:px-4">
					<ServiceCard
						img="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688051096/saakImg/serviceIcon2_hdtrd5.svg"
						title="Nearest Installation Spot"
					/>
				</div>
				<div className="col-span-3 2xl:px-4">
					<ServiceCard
						img="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688051096/saakImg/serviceIcon3_kkde5j.svg"
						title="Custom Styling Options"
					/>
				</div>
				<div className="col-span-3 2xl:px-4">
					<ServiceCard
						img="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688051096/saakImg/serviceIcon4_q1widf.svg"
						title="Cutting-Edge Tech Integration"
					/>
				</div>
			</div>
		</div>
	);
};

export default Third;
