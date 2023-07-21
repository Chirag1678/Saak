import React from "react";

const Title = ({ title }) => {
	return (
		<div className="bg-[#d8d1d0] px-16 py-4 w-fit rounded-2xl">
			<div className="font-Cabinet text-black text-4xl font-bold">{title}</div>
		</div>
	);
};

export default Title;
