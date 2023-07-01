import React from "react";
import Image from "next/image";
import Link from "next/link";

const WatchCatalogueCard = () => {
	return (
		<Link href="/Catalogue">
			<div className="mt-[64px]">
				<div className="w-full bg-[#dbd1d0] flex flex-col justify-between items-center py-[23px] rounded-2xl">
					<div className="text-6xl text-black font-Cabinet font-bold text-center">
						Watch the whole <br />
						Catalogue
					</div>
					<div className="border-[#302b2f] border-[1px] p-3 rounded-full w-fit">
						<Image
							src={require("../../assets/Dashboard/arrow.svg").default}
							alt=""
							width="fill"
							height="fill"
							className=""
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default WatchCatalogueCard;
