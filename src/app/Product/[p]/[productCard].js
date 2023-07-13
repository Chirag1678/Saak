import React from "react";
import ProductItem from "../../Components/ProductItem/ProductItem";
import axios from "axios";
import { usePathname } from "next/navigation";

const Product = async () => {
	const pathname = usePathname();
	const splitArr = pathname.split("-");
	console.log(splitArr);
	const path = { PCode: splitArr[1] };
	var product = {
		Images: [],
		Name: "",
		Price: 0,
		Features: [],
		Description: "",
		Brand: "",
		Rating: 0,
		Purchased: 0,
		ReviewsNum: 0,
		Warranty: 0,
		Reviews: [],
	};

	await axios
		.post(`http://localhost:8000/Product/Find/p-${splitArr[1]}`, path)
		.then((res) => {
			console.log(res);
			product.Images = [...res.data.imgArr];
			product.Name = res.data.Name;
			product.Price = res.data.Price;
			product.Features = [...res.data.Features];
			product.Description = res.data.Description;
			product.Brand = res.data.Brand;
			product.Rating = res.data.Rating;
			product.Purchased = res.data.Purchased;
			product.ReviewsNum = res.data.ReviewsNum;
			product.Warranty = res.data.Warranty;
			product.Reviews = [...res.data.Reviews];
		})
		.catch((err) => {
			console.log(err);
		});
	return (
		<div>
			<ProductItem />
		</div>
	);
};

export default Product;
