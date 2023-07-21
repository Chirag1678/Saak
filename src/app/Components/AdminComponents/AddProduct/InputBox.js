"use client";

import React, { useState } from "react";
import "../style.css";
import { addProduct } from "../../../store/Products";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FormData from "form-data";
import { Cloudinary } from "@cloudinary/url-gen";

const TextArea = ({ title, required, placeholder, Code }) => {
	const dispatch = useDispatch();
	return (
		<div>
			<div className="text-white text-2xl">{title}</div>
			<textarea
				className="bg-[#d8d1d0] text-[#302b2f] placeholder:text-[#302b2f79] py-3 px-2 rounded-2xl outline-none w-full font-Cabinet font-bold"
				required={required}
				placeholder={placeholder}
				rows={5}
				onChange={(e) => {
					dispatch(addProduct({ Code: Code, Data: e.target.value }));
				}}
			/>
		</div>
	);
};

const InputBox = ({ title, type, required, placeholder, Code }) => {
	const dispatch = useDispatch();
	const a = useSelector((state) => state.Product);
	return (
		<div>
			<div className="text-white text-2xl font-Cabinet">{title}</div>
			<input
				type={type}
				className="bg-[#d8d1d0] text-[#302b2f] placeholder:text-[#302b2f79] py-3 px-2 rounded-2xl outline-none w-full font-Cabinet font-bold"
				required={required}
				placeholder={placeholder}
				onChange={(e) => {
					dispatch(addProduct({ Code: Code, Data: e.target.value }));
					console.log(a);
				}}
			/>
		</div>
	);
};

const ImageInputBox = ({ title, type, required, placeholder, name, Code }) => {
	const a = useSelector((state) => state.Product);
	const dispatch = useDispatch();

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
			dispatch(addProduct({ Code: Code, Data: res.data.URL }));

			console.log(a);
		}
	};
	return (
		<div className="text-white text-2xl flex flex-col w-12">
			<input
				type="file"
				name={name}
				id={title}
				placeholder={placeholder}
				className={`before:content-['${placeholder}'] imgInput hidden`}
				onChange={(e) => {
					CloudinaryUploader(e);
				}}
			/>
			<label
				htmlFor={title}
				className="text-[#fff] rounded-2xl outline-none w-full font-Cabinet font-bold text-sm"
			>
				<div className="bg-[#d8d1d0] px-1 py-1 text-[#000] flex justify-center text-3xl font-normal rounded-md">
					+
				</div>
				<div className="text-center">{title}</div>
			</label>
		</div>
	);
};

const CheckBoxInputs = ({ features, Code }) => {
	const dispatch = useDispatch();
	const a = useSelector((state) => state.Product);
	const featuresSet = new Set();
	return (
		<div className="flex flex-col gap-y-4">
			<div className="featureTitle text-3xl text-white font-Cabinet font-medium">
				Product Features *
			</div>
			<div>
				{features.map((e) => {
					var i = 0;
					return (
						<div className="grid grid-cols-2 gap-x-4" key={`div${e}`}>
							<label htmlFor={e} className=" cursor-pointer" key={`label${e}`}>
								{e}
							</label>
							<input
								type="checkbox"
								name={e}
								id={e}
								className="m-1 cursor-pointer outline-none checkbox bg-[#d8d1d0]"
								key={e}
								onChange={(x) => {
									if (!x.target.checked) {
										featuresSet.delete(e);
									} else {
										featuresSet.add(e);
									}
									dispatch(
										addProduct({ Code: Code, Data: Array.from(featuresSet) })
									);
									console.log(a);
								}}
							/>
						</div>
					);
				})}
			</div>
			<div className="flex gap-x-2 items-center cursor-pointer">
				<div className="bg-[#d8d1d0] text-black px-3 py-1 rounded-md font-bold">
					+
				</div>
				<div className="underline">Add a new feature</div>
			</div>
		</div>
	);
};

const SelectInput = ({ data, Code }) => {
	const dispatch = useDispatch();
	const a = useSelector((state) => state.Product);

	return (
		<div>
			<div className="text-2xl text-white font-Cabinet">Product Category *</div>
			<div className="bg-[#d8d1d0] px-4 rounded-2xl">
				<select
					name="category"
					id="category"
					className="bg-[#d8d1d0] text-[#302b2f] placeholder:text-[#302b2f79] py-4 px-2 rounded-2xl outline-none w-full font-Cabinet font-bold"
					onChange={(e) => {
						dispatch(addProduct({ Code: Code, Data: e.target.value }));
						console.log(a);
					}}
				>
					{data.map((e) => {
						return (
							<option
								value={e}
								className="bg-[#d8d1d0] text-[#302b2f] placeholder:text-[#302b2f79] py-3 px-2 rounded-2xl outline-none w-full font-Cabinet font-bold"
								key={e}
							>
								{e}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export { InputBox, TextArea, ImageInputBox, CheckBoxInputs, SelectInput };
