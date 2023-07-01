import React from "react";

const ServiceCard = (props) => {
	return (
		<div className="box w-full bg-[#332f33] flex flex-col gap-y-8 items-center p-10 rounded-xl h-full">
			<div className="symbol flex justify-center">
				<img src={props.img} alt="" className="bg-[#3b3439] rounded-full p-4" />
			</div>
			<div className="text-[26px] font-Cabinet text-center flex items-center h-full">
				{props.title}
			</div>
		</div>
	);
};

const Third = () => {
	return (
		<div className="container mx-auto mt-96">
			<div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-2 grid-cols-2">
				<div className="col-span-7">
					<div className="2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-4xl text-4xl 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
						Enhance Performance and Style
					</div>
				</div>
				<div className="col-span-5 flex items-center 2xl:justify-end xl:justify-end lg:justify-end md:justify-center sm:justify-center justify-center">
					<div className="text-[16px] font-Cabinet text-[#cb492b] font-bold underline">
						Learn More
					</div>
				</div>
			</div>

			<div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 2xl:gap-x-16 xl:gap-x-10 lg:gap-x-5 md:gap-x-0 sm:gap-x-0 gap-x-0 2xl:gap-y-0 xl:gap-y-0 lg:gap-y-0 md:gap-y-5 sm:gap-y-5 gap-y-5 pt-[89px]">
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
