import React from "react";
import bgHero from "../../assets/Home/backgroundHero.png";
import "next/navigation";
import "./style.css";

const Hero = () => {
	return (
		<div className="container mx-auto pt-12 z-30 2xl:h-screen xl:h-screen lg:h-screen md:h-fit sm:h-fit h-fit grid grid-rows-6">
			<div className="row-span-3 flex 2xl:items-center xl:items-center">
				<div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-10 px-10">
					<div className="col-span-2"></div>
					<div className="col-span-8 flex flex-col items-center 2xl:gap-y-2 xl:gap-y-0 lg:gap-y-0 md:gap-y-0 sm:gap-y-0 gap-y-0">
						<div className="heroTitle font-Cabinet 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-base text-white text-center font-bold 2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-10 px-2">
							Your Ultimate Destination for Car Modification and Premium Vehicle
							Parts.
						</div>
						<div className="2xl:text-2xl xl:text-base lg:text-[15px] md:text-[15px] sm:text-[14px] text-[10px]  font-Cabinet text-white text-center font-light pt-[14px] 2xl:px-32 xl:px-32 lg:px-24 md:px-16 sm:px-8 px-2">
							Get ready to transform your car into a true reflection of your
							style and personality. At Saak, we specialize in professional car
							modification services, offering a range of customization options
							to elevate your driving experience.
						</div>
						<div className="flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap justify-center 2xl:gap-x-10 xl:gap-x-10 lg:gap-x-10 md:gap-y-5 sm:gap-x-5 gap-y-2 pt-[29px] w-full">
							<button className="heroBtn1 px-[10px] py-[10px] 2xl:text-xl xl:text-base lg:text-[15px] md:text-[15px] sm:text-[14px] text-[14px] text-center font-Cabinet 2xl:w-fit xl:w-fit lg:w-fit md:w-fit sm:w-fit w-full font-normal">
								Wanna see more?
							</button>
							<button className="heroBtn2 px-[10px] py-[10px] 2xl:text-xl xl:text-base lg:text-[15px] md:text-[15px] sm:text-[14px] text-[14px] text-center font-Cabinet 2xl:w-fit xl:w-fit lg:w-fit md:w-fit sm:w-fit w-full font-normal">
								Shop Now
							</button>
						</div>
					</div>
					<div className="col-span-2"></div>
				</div>
			</div>
			<div className="row-span-1"></div>
		</div>
	);
};

export default Hero;
