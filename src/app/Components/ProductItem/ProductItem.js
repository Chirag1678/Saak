import React from "react";
import ImageGrid from "./Subcomponents/ImageGrid";
import FeatureCard from "./Subcomponents/FeatureCard";
import PriceSection from "./Subcomponents/PriceSection";
import ReviewSection from "./Subcomponents/ReviewSection";
import axios from "axios";

import "./style.css";

const ProductItem = async ({ PCode }) => {
	try {
		let response;
		try {
			response = await axios.post(
				`http://localhost:8000/Product/Find/${PCode}`,
				{
					PCode: PCode,
				}
			);
		} catch (err) {
			throw err;
		}
		// console.log(data);
		const ImageGridData = {
			MainImg: response.data.imgArr.MainImg,
			Img1: response.data.imgArr.Img1,
			Img2: response.data.imgArr.Img2,
			Img3: response.data.imgArr.Img3,
			Img4: response.data.imgArr.Img4,
		};

		const FeatureCardData = {
			PCode: response.data.PCode,
			Name: response.data.Name,
			Features: response.data.Features,
			Brand: response.data.Brand,
			Rating: response.data.Rating,
			Purchased: response.data.Purchased,
			ReviewsNum: response.data.ReviewsNum,
			Warranty: response.data.Warranty,
			Description: response.data.Description,
		};

		const PriceSectionData = {
			Price: response.data.Price,
			Stock: response.data.Stock,
			PCode: PCode,
		};

		const ReviewSectionData = {
			Description: response.data.Description,
			Reviews: response.data.Reviews,
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

				{/* <div className="h-screen justify-center items-center text-white font-Cabinet font-bold text-4xl">
				NO PRODUCT LIKE THIS FOUND
			</div> */}
			</div>
		);
	} catch (err) {
		console.log(err);
		return (
			<div className="h-screen justify-center items-center text-white font-Cabinet font-bold text-4xl">
				NO PRODUCT LIKE THIS FOUND
			</div>
		);
	}
};

export default ProductItem;
