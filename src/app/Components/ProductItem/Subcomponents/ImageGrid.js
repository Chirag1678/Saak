import React from "react";
import img1 from "../../../assets/Product/thar1.png";
import img2 from "../../../assets/Product/thar2.png";
import img3 from "../../../assets/Product/thar3.png";
import Image from "next/image";

const ImageGrid = () => {
	return (
		<div className="grid grid-cols-2 h-[435px] gap-x-[30px] w-full">
			<div className="relative h-full w-full">
				<Image
					src={img1}
					fill
					alt=""
					className="object-cover w-full h-full rounded-2xl"
				/>
			</div>
			<div className="w-full h-full">
				<div className="flex flex-col gap-y-[30px] h-full w-full">
					<div className="img2 relative h-full">
						<Image
							src={img2}
							className="object-cover w-full rounded-2xl"
							alt=""
							fill
						/>
					</div>
					<div className="img2 relative h-full">
						<Image
							src={img3}
							className="object-cover w-full rounded-2xl"
							alt=""
							fill
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageGrid;
