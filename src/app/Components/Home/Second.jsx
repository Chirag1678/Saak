import React from "react";

const Second = () => {
	return (
		<div className="container mx-auto relative pt-96">
			<div className="grid grid-cols-12">
				<div className="col-span-6 flex items-center">
					<div className="flex flex-col gap-y-[14px]">
						<div className="text-[54px] font-normal">
							Premium Vehicle Parts and Accessories
						</div>
						<div className="2xl:text-[20px] xl:text-[16px] leading-loose font-latoRegular font-bold">
							In addition to our exceptional car modification services, we also
							offer a wide selection of premium vehicle parts and accessories.
							Whether you're a DIY enthusiast or prefer professional
							installation, our ecommerce section is your one-stop shop for
							high-quality parts. Browse through our extensive inventory of
							performance upgrades, styling accessories, lighting solutions, and
							more.
						</div>
					</div>
				</div>
				<div className="col-span-6 flex justify-center">
					<div className="">
						<img
							src="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688039602/carouselImg1_i1tnnw.png"
							alt=""
							className="bg-[#d9d9d910] rounded-full p-10 shadow-xl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Second;
