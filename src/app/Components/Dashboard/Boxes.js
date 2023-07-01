import React from "react";
import Image from "next/image";
import Link from "next/link";

const Boxes = (props) => {
	const arr = props.array;
	return (
		<div className="flex dashboardCards justify-between">
			{arr.map((e) => {
				return (
					<Link href={e.link}>
						<div className="bg-[#dbd1d0] rounded-3xl py-10 p-[37px_25px] cursor-pointer">
							<div className="flex flex-col items-center gap-y-5">
								<div className="p-[23.5px] bg-[#302b2f] rounded-full w-fit">
									<Image
										src={require(`../../assets/Dashboard/${e.img}.svg`).default}
										alt=""
										width="fill"
										height="fill"
									/>
								</div>
								<div className="text-5xl text-[#302b2f] font-Cabinet font-bold">
									{e.text}
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Boxes;
