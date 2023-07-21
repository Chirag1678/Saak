"use client";

import React from "react";
import ImageGrid from "./Subcomponents/ImageGrid";
import FeatureCard from "./Subcomponents/FeatureCard";
import PriceSection from "./Subcomponents/PriceSection";
import ReviewSection from "./Subcomponents/ReviewSection";
import axios from "axios";
import { usePathname } from "next/navigation";

import "./style.css";

const ProductItem = ({ data }) => {
	// console.log(data);
	const ImageGridData = {
		MainImg: data.imgArr.MainImg,
		Img1: data.imgArr.Img1,
		Img2: data.imgArr.Img2,
		Img3: data.imgArr.Img3,
		Img4: data.imgArr.Img4,
	};

	const FeatureCardData = {
		PCode: data.PCode,
		Name: data.Name,
		Features: data.Features,
		Brand: data.Brand,
		Rating: data.Rating,
		Purchased: data.Purchased,
		ReviewsNum: data.ReviewsNum,
		Warranty: data.Warranty,
		Description: data.Description,
	};

	const PriceSectionData = {
		Price: data.Price,
		Stock: data.Stock,
	};

	const ReviewSectionData = {
		Description: data.Description,
		Reviews: data.Reviews,
	};
	// const MainImg = props.data.Images.MainImg;
	// const Img1 = props.data.Images.Img1;
	// const Img2 = props.data.Images.Img2;
	// const Img3 = props.data.Images.Img3;
	// const Img4 = props.data.Images.Img4;
	// const name = props.data.Name;
	// const price = props.data.Price;
	// const features = props.data.Features;
	// const description = props.data.Description;
	// const brand = props.data.Brand;
	// const rating = props.data.Rating;
	// const purchased = props.data.Purchased;
	// const reviewsNum = props.data.ReviewsNum;
	// const warranty = props.data.Warranty;
	// const reviews = props.data.Reviews;

	// console.log(data);
	return (
		<div className="container mx-auto">
			<div className="pt-32 flex flex-col gap-y-[30px] w-full">
				<ImageGrid data={ImageGridData} />

				<div className="grid grid-cols-2 h-full gap-[30px]">
					<FeatureCard data={FeatureCardData} />
					<div className="w-full h-full flex flex-col gap-y-[20px]">
						<PriceSection data={PriceSectionData} />
						<ReviewSection data={ReviewSectionData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
