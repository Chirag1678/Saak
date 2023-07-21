"use client";

import React from "react";
import Title from "../../../Components/AdminComponents/Title";
import {
	InputBox,
	TextArea,
	ImageInputBox,
	CheckBoxInputs,
	SelectInput,
} from "../../../Components/AdminComponents/AddProduct/InputBox";
import { toastSuccess, toastError } from "../../../Components/Toasts/Toast";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../store/Products";

import axios from "axios";

const page = () => {
	const features = ["BoltOn", "Linex Coated", "Compatible"];
	const dispatch = useDispatch();
	const Prod = useSelector((state) => state.Product);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { Product } = Object.assign(Prod);
		console.log(Product);

		const response = await axios.post(
			"http://localhost:8000/Product/addProduct",
			Product
		);

		if (response.status === 200) {
			toastSuccess("Product Added Successfully");
		} else {
			toastError("Product Error");
		}
	};
	return (
		<div className="container mx-auto py-16 gap-y-10">
			<Title title={"Add Product"} />

			<div className="flex gap-x-[98px] flex-col gap-y-5 pt-16 w-full">
				<form action="" className="flex flex-col gap-y-6 w-full">
					<div className="flex gap-y-6 w-full gap-x-16">
						<div className="flex flex-col gap-x-16 w-full">
							<InputBox
								title={"Product Code *"}
								type={"text"}
								required={true}
								placeholder={"PCode"}
								Code={"PCode"}
							/>

							<InputBox
								title={"Product Name *"}
								type={"text"}
								required={true}
								placeholder={"PName"}
								Code={"PName"}
							/>

							<InputBox
								title={"Product Price *"}
								type={"number"}
								required={true}
								placeholder={"19990"}
								Code={"PPrice"}
							/>

							<TextArea
								title={"Product Description *"}
								type={"textbox"}
								required={true}
								placeholder={`Something${"\n"}Something${"\n"}Something`}
								Code={"PDescription"}
							/>

							<div className="flex gap-x-3">
								<ImageInputBox
									title={"Main Image"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"MainImg"}
									Code={"MainImg"}
								/>

								<ImageInputBox
									title={"Image 1"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"Image 1"}
									Code={"Img1"}
								/>

								<ImageInputBox
									title={"Image 2"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"Image 2"}
									Code={"Img2"}
								/>

								<ImageInputBox
									title={"Image 3"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"Image 3"}
									Code={"Img3"}
								/>

								<ImageInputBox
									title={"Image 4"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"Image 4"}
									Code={"Img4"}
								/>
							</div>
						</div>

						<div className="flex flex-col gap-y-6 w-full">
							<InputBox
								title={"Product Stock *"}
								type={"number"}
								required={true}
								placeholder={"10"}
								Code={"PStock"}
							/>

							<SelectInput data={["Trending", "Normal"]} Code={"PCategory"} />

							<InputBox
								title={"Product Brand *"}
								type={"text"}
								required={true}
								placeholder={"PBrand"}
								Code={"PBrand"}
							/>

							<InputBox
								title={"Product Length *"}
								type={"number"}
								required={true}
								placeholder={"PBrand"}
								Code={"PLength"}
							/>

							<InputBox
								title={"Product Width *"}
								type={"number"}
								required={true}
								placeholder={"PWidth"}
								Code={"PWidth"}
							/>

							<InputBox
								title={"Product Height *"}
								type={"number"}
								required={true}
								placeholder={"PBrand"}
								Code={"PHeight"}
							/>
						</div>

						<div className="flex flex-col gap-y-6 w-full">
							<InputBox
								title={"Product Weight *"}
								type={"number"}
								required={true}
								placeholder={"PWeight"}
								Code={"PWeight"}
							/>
						</div>

						<div className="features w-full">
							<CheckBoxInputs features={features} Code={"PFeatures"} />
						</div>
					</div>
					<button
						className="w-full py-4 flex justify-center items-center bg-[#302b2f] rounded-2xl font-bold font-Cabinet text-xl"
						onClick={(e) => {
							handleSubmit(e);
						}}
						type="submit"
					>
						Add Product
					</button>
				</form>
			</div>
		</div>
	);
};

export default page;
