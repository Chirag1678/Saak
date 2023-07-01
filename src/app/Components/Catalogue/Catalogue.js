import React from "react";
import ProductCard from "../Global/ProductCard";

const Catalogue = (props) => {
	const cards = props.data;
	/* console.log(cards); */
	return (
		<div className=" px-5 py-5">
			<div className="grid grid-cols-5 container mx-auto gap-x-5 gap-y-5 justify-center">
				{cards.map((card) => {
					return <ProductCard data={card} />;
				})}
			</div>
		</div>
	);
};

export default Catalogue;
