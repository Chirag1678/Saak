import React from "react";

const Star = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
		>
			<path
				d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
				fill="#CB492B"
			/>
		</svg>
	);
};

const ArrowUp = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="8"
			viewBox="0 0 14 8"
			fill="none"
		>
			<path
				d="M13 7L7 1L1 7"
				stroke="#302B2F"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

const ArrowDown = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="8"
			viewBox="0 0 14 8"
			fill="none"
		>
			<path
				d="M1 0.999999L7 7L13 1"
				stroke="#302B2F"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

const ReviewSection = () => {
	return (
		<div className="flex py-[24px] px-[25px] bg-[#d8d1d0] rounded-2xl">
			<div className="flex flex-col ">
				<div className="font-Cabinet font-bold text-black text-[20px]">
					Reviews (100)
				</div>

				<div className="pt-[9px]">
					<div className="text-[20px] text-black font-lato font-bold">
						Ansh Bhasin
					</div>
					<div className="date flex stars gap-x-[13px] items-center">
						<div className="date font-lato text-black">20 / 7 / 2022</div>
						<div className="border-[1px] border-[#cb492b] py-2"></div>
						<div className="flex">
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</div>
					</div>

					<div className="reviewText mt-[18px] text-black">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Necessitatibus nobis rerum quia cupiditate dolorum, fugit
						dignissimos natus accusamus neque dolor commodi, sapiente alias
						aspernatur. Ab aut sint nisi ducimus error fugit quae, temporibus
						assumenda? Consequatur, excepturi? Delectus velit incidunt odio.
						Tenetur at delectus esse sint soluta error unde. Odit, pariatur.
					</div>
				</div>
			</div>
			<div className="flex flex-col h-full justify-between">
				<button>
					<ArrowUp />
				</button>
				<button>
					<ArrowDown />
				</button>
			</div>
		</div>
	);
};

export default ReviewSection;
