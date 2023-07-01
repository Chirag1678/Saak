import React from "react";

const Fourth = () => {
	return (
		<div className=" bg-[#d8d1d0] mt-[127px]">
			<div className="grid grid-cols-12 container mx-auto items-center pt-[76px] 2xl:px-0 xl:px-0 lg:px-0 md:px-3 sm:px-3 px-3">
				<div className="2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 col-span-6 2xl:order-1 xl:order-1 lg:order-1 md:order-2 sm:order-2 order-2 ">
					<div className="prevBtn pr-5">
						<div className="border-2 border-black rounded-full flex gap-x-8 justify-center items-center p-[25px_45px]">
							<img
								src="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688053896/saakImg/prevIcon_u9rdab.svg"
								alt=""
							/>
							<p className="text-black font-Cabinet font-bold text-[20px]">
								Prev
							</p>
						</div>
					</div>
				</div>
				<div className="2xl:col-span-8 xl:col-span-8 lg:col-span-8 md:col-span-12 sm:col-span-12 col-span-12 flex flex-col items-center justify-center 2xl:order-2 xl:order-2 lg:order-2 md:order-1 sm:order-1 order-1">
					<p className="text-[24px] text-black 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
						Customising Your World
					</p>
					<p className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-4xl text-4xl text-center text-black font-bold">
						Fully Modified Thar
					</p>
					<p className="text-[#cb492b] text-[20px] font-Cabinet">
						Watch this in 3d
					</p>
				</div>
				<div className="2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 col-span-6 2xl:order-3 xl:order-3 lg:order-3 md:order-3 sm:order-3 order-3">
					<div className="next-btn pl-5">
						<div className="border-2 border-black rounded-full flex gap-x-8 justify-center items-center p-[25px_45px]">
							<p className="text-black font-Cabinet font-bold text-[20px]">
								Next
							</p>
							<img
								src="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688053896/saakImg/nextIcon_f83fqs.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fourth;
