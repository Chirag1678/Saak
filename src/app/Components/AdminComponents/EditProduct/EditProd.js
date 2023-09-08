"use client";

import {
	InputBox,
	TextArea,
	ImageInputBox,
	SelectInput,
	CheckBoxInputs,
} from "./InputBox";

import React, { useState, useEffect } from "react";
import { toastSuccess, toastError } from "../../Toasts/Toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditProd = ({ PCode }) => {
	const features = ["BoltOn", "Linex Coated", "Compatible"];
	const oldCode = PCode[0];
	const router = useRouter();

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
		PDimensions: {
			PLength: undefined,
			PWidth: undefined,
			PHeight: undefined,
			PWeight: undefined,
		},
		PFeatures: [],
		PWarranty: undefined,
	});

	const dataGet = async () => {};

	useEffect(async () => {
		try {
			const res = await axios.get(`/Admin/find/${oldCode}`);

			setValues(res.data);
		} catch (error) {
			console.error(error);
		}
	}, []);

	// await axios
	// 	.post("http://localhost:8000/Product/Find/RBMRW", {
	// 		PCode: "RBMRW",
	// 	})
	// 	.then((res) => {
	// 		const data = res.data;
	// 		setValues((prev) => ({ ...prev, PCode: data.PCode }));
	// 	})
	// 	.catch((err) => {});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:8000/Admin/updateProduct",
				{
					oldPCode: oldCode,
					Data: values,
				}
			);

			if (response.status === 200) {
				toastSuccess(`Data Updated for ${oldCode}`);
				setTimeout(() => {
					router.push("/Admin/Products");
				}, 1000);
			} else {
				toastError(response.status);
			}
		} catch (err) {
			if (err.response.status === 400) {
				toastError(err.response.data);
			}
		}
	};

	const handleChange = (e) => {
		if (!e.target.name.includes("PDimensions")) {
			switch (e.target.type) {
				case "text":
					setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
					break;
				case "textarea":
					setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
					break;
				case "number":
					// console.log(e.target.name);
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
		} else {
			setValues((prev) => ({
				...prev,
				PDimensions: {
					...prev.PDimensions,
					[e.target.name.split(".")[1]]: +e.target.value,
				},
			}));
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

	// useEffect(() => {
	// 	console.log(values); // Log the updated data state when it changes
	// }, [values]);

	return (
		<div className=" bg-[#0000008f] py-16">
			<div className="container mx-auto py-16 bg-[#d8d1d0] rounded-2xl h-full">
				<div className="flex h-full px-12 gap-x-4 w-full">
					<div className="flex flex-col justify-between w-full">
						<InputBox
							title={"Product Code *"}
							type={"text"}
							required={true}
							placeholder={"PCode"}
							Code={"PCode"}
							name={"PCode"}
							value={values.PCode}
							onChange={handleChange}
						/>

						<InputBox
							title={"Product Name *"}
							type={"text"}
							required={true}
							placeholder={"PName"}
							Code={"PName"}
							name={"PName"}
							value={values.PName}
							onChange={handleChange}
						/>

						<InputBox
							title={"Product Price *"}
							type={"number"}
							required={true}
							placeholder={"19990"}
							Code={"PPrice"}
							name={"PPrice"}
							value={values.PPrice}
							onChange={handleChange}
						/>

						<TextArea
							title={"Product Description *"}
							type={"textbox"}
							required={true}
							placeholder={`Something${"\n"}Something${"\n"}Something`}
							Code={"PDescription"}
							name={"PDescription"}
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
								name={"Image 1"}
								Code={"Img1"}
								onChange={handleImageChange}
							/>

							<ImageInputBox
								title={"Image 2"}
								type={"file"}
								required={true}
								placeholder={"+"}
								name={"Image 2"}
								Code={"Img2"}
								onChange={handleImageChange}
							/>

							<ImageInputBox
								title={"Image 3"}
								type={"file"}
								required={true}
								placeholder={"+"}
								name={"Image 3"}
								Code={"Img3"}
								onChange={handleImageChange}
							/>

							<ImageInputBox
								title={"Image 4"}
								type={"file"}
								required={true}
								placeholder={"+"}
								name={"Image 4"}
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
							name={"PStock"}
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
							name={"PBrand"}
							value={values.PBrand}
							onChange={handleChange}
						/>

						<InputBox
							title={"Product Length *"}
							type={"number"}
							required={true}
							placeholder={"PLength"}
							Code={"PLength"}
							name={"PDimensions.PLength"}
							value={values.PDimensions.PLength}
							onChange={handleChange}
						/>

						<InputBox
							title={"Product Width *"}
							type={"number"}
							required={true}
							placeholder={"PWidth"}
							Code={"PWidth"}
							name={"PDimensions.PWidth"}
							value={values.PDimensions.PWidth}
							onChange={handleChange}
						/>

						<InputBox
							title={"Product Height *"}
							type={"number"}
							required={true}
							placeholder={"PHeight"}
							Code={"PHeight"}
							name={"PDimensions.PHeight"}
							value={values.PDimensions.PHeight}
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
							name={"PDimensions.PWeight"}
							value={values.PDimensions.PWeight}
							onChange={handleChange}
						/>
						<InputBox
							title={"Product Warranty *"}
							type={"number"}
							required={true}
							placeholder={"2"}
							Code={"PWarranty"}
							name={"PWarranty"}
							value={values.PWarranty}
							onChange={handleChange}
						/>

						<CheckBoxInputs
							features={features}
							Code={"PFeatures"}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="updateButton pt-4">
					<div className="grid grid-cols-4">
						<div className="col-span-1"></div>
						<div className="col-span-2">
							<button
								className="w-full bg-[#302b2f] text-white py-3 rounded-xl"
								onClick={handleSubmit}
							>
								Update
							</button>
						</div>
						<div className="col-span-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProd;
