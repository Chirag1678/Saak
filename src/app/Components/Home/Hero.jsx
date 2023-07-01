import React from "react";
import bgHero from "../../assets/Home/backgroundHero.png";

const Hero = () => {
	return (
		<div className="bg-">
			<div className="bottom-[-20px] z-0">
				{/* <div className="2xl:text-[120px] xl:text-[110px] text-transparent relative z-10 font-bold font-Cabinet container mx-auto 2xl:pt-[175px] xl:pt-[90px] leading-none bg-[#fff] bg-clip-text">
					Your Ultimate Destination{" "}
					<span className="bg-clip-text text-transparent bg-[#302b2f]">
						For Car Mo
					</span>
					dification
				</div> */}
				{/* <img
					src="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688024638/backgroundHero_r8mzpg.png"
					alt=""
					className="absolute bottom-0 -z-0"
				/> */}
			</div>
			<div className="grid grid-cols-12 container mx-auto">
				<div className="col-span-8"></div>
				<div className="2xl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-12 sm:col-span-12 col-span-12 flex flex-col gap-y-5 font-latoLight justify-end 2xl:items-end xl:items-end lg:items-end md:items-center sm:items-center items-center p-10">
					<p>
						Get ready to transform your car into a true reflection of your style
						and personality. At Saak, we specialize in professional car
						modification services, offering a range of customization options to
						elevate your driving experience.
					</p>
					<button className="text-white bg-[#cb492b] p-[10px_25px] rounded-full font-Cabinet text-[15px]">
						Convert Your Car to Masterpiece
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
