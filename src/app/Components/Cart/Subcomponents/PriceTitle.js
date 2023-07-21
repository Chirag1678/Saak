import React from "react";

const PriceTitle = ({ Title, Price }) => {
	return (
		<div className="flex w-full justify-between">
			<div className="text-black font-Cabinet">{Title}</div>
			<div className="text-black font-Cabinet">
				{Title === "CGST" || Title === "UGST" || Title === "IGST" ? "" : "₹"}{" "}
				{Price}{" "}
				{Title === "CGST" || Title === "UGST" || Title === "IGST" ? "%" : ""}
			</div>
		</div>
	);
};

export default PriceTitle;
