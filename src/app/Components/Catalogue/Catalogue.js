import React from "react";
import ProductCard from "../Global/ProductCard";

const Catalogue = ({ data }) => {
	return (
		<div className=" px-5 pt-32">
			<div className="grid grid-cols-5 container mx-auto gap-x-5 gap-y-5 justify-center">
				{data.map((card) => {
					return <ProductCard data={card} />;
				})}
			</div>
		</div>
	);
};

export default Catalogue;
