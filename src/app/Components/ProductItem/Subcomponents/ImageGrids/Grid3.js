import Image from "next/image";

const Grid3 = ({ props }) => {
	return (
		<div className="grid grid-cols-2 h-[435px] gap-x-[30px] w-full">
			<div className="relative h-full w-full">
				<Image
					src={props.MainImg}
					fill
					alt=""
					className="object-cover w-full h-full rounded-2xl"
				/>
			</div>
			<div className="w-full h-full">
				<div className="flex flex-col gap-y-[30px] h-full w-full">
					<div className="img2 relative h-full">
						<Image
							src={props.Img1}
							className="object-cover w-full rounded-2xl"
							alt=""
							fill
						/>
					</div>
					<div className="img2 relative h-full">
						<Image
							src={props.Img2}
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

export default Grid3;
