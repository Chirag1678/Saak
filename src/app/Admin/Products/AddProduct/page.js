"use client";

import React, { useState } from "react";
import Title from "../../../Components/AdminComponents/Title";
import {
	InputBox,
	InputBox1,
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
	const [values, setValues] = useState({
		PCode: undefined,
		PName: undefined,
		PPrice: undefined,
		PDescription: undefined,
		PImages: {
			MainImg: undefined,
			Img1: undefined,
			Img2: undefined,
			Img3: undefined,
			Img4: undefined,
		},
		PStock: undefined,
		PCategory: "Normal",
		PBrand: undefined,
		PLength: undefined,
		PWidth: undefined,
		PHeight: undefined,
		PWeight: undefined,
		PFeatures: [],
		PWarranty: undefined,
	});
	const features = ["BoltOn", "Linex Coated", "Compatible"];
	const [featuresSet, setFeaturesSet] = useState(new Set());

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await axios.post(
			"http://localhost:8000/Product/addProduct",
			values
		);

		if (response.status === 200) {
			toastSuccess("Product Added Successfully");
		} else {
			toastError("Product Error");
		}
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		switch (e.target.type) {
			case "text":
				setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
				break;
			case "textarea":
				setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
				break;
			case "number":
				console.log(e.target.name);
				setValues((prev) => ({ ...prev, [e.target.name]: +e.target.value }));
				break;
			case "object":
				setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
				break;
			case "select-one":
				setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
				break;
			default:
				break;
		}
		// setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleImageChange = async (e) => {
		const url = await CloudinaryUploader(e);
		console.log(url);
		setValues((prev) => ({
			...prev,
			PImages: { ...prev.PImages, [e.target.name]: url },
		}));
	};

	const CloudinaryUploader = async (e) => {
		const file = e.target.files[0];
		let data = new FormData();
		data.append("photo", file);
		console.log(file);

		const res = await axios.post(
			"http://localhost:8000/AdminImg/ImageUpload",
			data
		);
		console.log(res);

		if (res.status === 200) {
			// dispatch(addProduct({ Code: Code, Data: res.data.URL }));
			console.log(res.data.URL);
			return res.data.URL;

			console.log(a);
		} else {
			toastError("FUCKER");
			throw new Error("FUCK U");
		}
	};

	const handleCheckboxChange = async (updatedFeature, checked) => {
		setValues((prev) => {
			setFeaturesSet((prevSet) => {
				const newFeaturesSet = new Set(prevSet); // Create a new set based on the previous set
				if (checked) {
					newFeaturesSet.add(updatedFeature); // Add the selected feature to the new set
				} else {
					newFeaturesSet.delete(updatedFeature); // Remove the selected feature from the new set
				}
				return newFeaturesSet; // Return the new set
			});
			return {
				...prev,
				PFeatures: Array.from(featuresSet), // Convert the set to an array and add it to the values object
			};
		});
	};

	return (
		<div className="container mx-auto py-16 gap-y-10">
			<Title title={"Add Product"} />

			<div className="flex gap-x-[98px] flex-col gap-y-5 pt-16 w-full">
				<form action="" className="flex flex-col gap-y-6 w-full">
					<div className="flex gap-y-6 w-full gap-x-16">
						<div className="flex flex-col gap-x-16 w-full justify-between">
							<InputBox
								title={"Product Code *"}
								type={"text"}
								required={true}
								placeholder={"PCode"}
								Code={"PCode"}
								name="PCode"
								value={values.PCode}
								onChange={handleChange}
							/>
							<InputBox
								title={"Product Name *"}
								type={"text"}
								required={true}
								placeholder={"PName"}
								Code={"PName"}
								name="PName"
								value={values.PName}
								onChange={handleChange}
							/>

							<InputBox
								title={"Product Price *"}
								type={"number"}
								required={true}
								placeholder={19990}
								Code={"PPrice"}
								name="PPrice"
								value={values.PPrice}
								onChange={handleChange}
							/>
							<TextArea
								title={"Product Description *"}
								type={"textbox"}
								required={true}
								placeholder={`Something${"\n"}Something${"\n"}Something`}
								Code={"PDescription"}
								name="PDescription"
								value={values.PDescription}
								onChange={handleChange}
							/>
							<div className="flex gap-x-3">
								<ImageInputBox
									title={"Main Image"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"MainImg"}
									Code={"MainImg"}
									onChange={handleImageChange}
								/>

								<ImageInputBox
									title={"Image 1"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"Img1"}
									Code={"Img1"}
									onChange={handleImageChange}
								/>

								<ImageInputBox
									title={"Image 2"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"Img2"}
									Code={"Img2"}
									onChange={handleImageChange}
								/>

								<ImageInputBox
									title={"Image 3"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"Img3"}
									Code={"Img3"}
									onChange={handleImageChange}
								/>

								<ImageInputBox
									title={"Image 4"}
									type={"file"}
									required={true}
									placeholder={"+"}
									name={"Img4"}
									Code={"Img4"}
									onChange={handleImageChange}
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
								name="PStock"
								value={values.PStock}
								onChange={handleChange}
							/>

							<SelectInput
								data={["Normal", "Trending"]}
								Code={"PCategory"}
								value={values.PCategory}
								name={"PCategory"}
								onChange={handleChange}
							/>

							<InputBox
								title={"Product Brand *"}
								type={"text"}
								required={true}
								placeholder={"PBrand"}
								Code={"PBrand"}
								name="PBrand"
								value={values.PBrand}
								onChange={handleChange}
							/>

							<InputBox
								title={"Product Length *"}
								type={"number"}
								required={true}
								placeholder={"PLength"}
								Code={"PLength"}
								name="PLength"
								value={values.PLength}
								onChange={handleChange}
							/>

							<InputBox
								title={"Product Width *"}
								type={"number"}
								required={true}
								placeholder={"PWidth"}
								Code={"PWidth"}
								name="PWidth"
								value={values.PWidth}
								onChange={handleChange}
							/>

							<InputBox
								title={"Product Height *"}
								type={"number"}
								required={true}
								placeholder={"PHeight"}
								Code={"PHeight"}
								name="PHeight"
								value={values.PHeight}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col gap-y-6 w-full">
							<InputBox
								title={"Product Weight *"}
								type={"number"}
								required={true}
								placeholder={"PWeight"}
								Code={"PWeight"}
								name="PWeight"
								value={values.PWeight}
								onChange={handleChange}
							/>
							<InputBox
								title={"Product Warranty *"}
								type={"number"}
								required={true}
								placeholder={"2"}
								Code={"PWarranty"}
								name="PWarranty"
								value={values.PWarranty}
								onChange={handleChange}
							/>
						</div>

						<div className="features w-full">
							<CheckBoxInputs
								features={features}
								Code={"PFeatures"}
								onChange={handleCheckboxChange}
							/>
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
