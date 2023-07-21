import Image from "next/image";

const Grid1 = ({ props }) => {
	return (
		<div className="grid grid-cols-1 h-[435px] gap-x-[30px] w-full">
			<div className="relative h-full w-full">
				<Image
					src={props.MainImg}
					fill
					alt=""
					className="object-cover w-full h-full rounded-2xl"
				/>
			</div>
		</div>
	);
};

export default Grid1;
