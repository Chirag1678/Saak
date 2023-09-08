"use client";

import React from "react";

// InputBox.js
const InputBox = ({
	Code,
	title,
	type,
	required,
	placeholder,
	onChange, // Add the onChange prop
	name,
	value,
	...otherProps
}) => {
	return (
		<>
			<div className="font-Cabinet font-bold text-black text-3xl">
				{title}
				<div>
					<input
						className="bg-[#d8d1d0] text-[#302b2f] placeholder:text-[#302b2f79] py-1 px-2 text-xl border-b-2 border-black  outline-none w-full font-Cabinet font-bold"
						type={type}
						required={required}
						placeholder={placeholder}
						name={name}
						value={value}
						onChange={onChange} // Use the onChange prop here
						{...otherProps}
					/>
				</div>
			</div>
		</>
	);
};

const TextArea = ({
	title,
	required,
	placeholder,
	Code,
	onChange,
	...otherProps
}) => {
	return (
		<div>
			<div className="font-Cabinet font-bold text-black text-3xl">{title}</div>
			<textarea
				className="bg-[#d8d1d0] text-[#302b2f] placeholder:text-[#302b2f79] py-3 px-2 outline-none w-full font-Cabinet font-bold border-black border-2"
				required={required}
				placeholder={placeholder}
				rows={3}
				onChange={onChange} // Use the onChange prop here
				{...otherProps}
			/>
		</div>
	);
};

const ImageInputBox = ({
	title,
	type,
	required,
	placeholder,
	name,
	Code,
	...otherProps
}) => {
	return (
		<div className="text-white text-2xl flex flex-col w-12">
			<input
				type="file"
				name={name}
				id={title}
				placeholder={placeholder}
				className={`before:content-['${placeholder}'] imgInput hidden`}
				onChange={async (e) => {
					handleImageChange(e);
				}}
				{...otherProps}
			/>
			<label
				htmlFor={title}
				className="text-[#fff] rounded-2xl outline-none w-full font-Cabinet font-bold text-sm"
			>
				<div className="bg-[#302b2f] px-1 py-1 text-[#d8d1d0] flex justify-center text-3xl font-normal rounded-md">
					+
				</div>
				<div className="text-center text-black">{title}</div>
			</label>
		</div>
	);
};

const SelectInput = ({ data, Code, onChange, value, ...otherProps }) => {
	return (
		<div>
			<div className="font-Cabinet font-bold text-black text-3xl">
				Product Category *
			</div>
			<div className="bg-[#d8d1d0] px-0 rounded-2xl">
				<select
					name="category"
					id="category"
					className="bg-[#d8d1d0] text-[#302b2f] placeholder:text-[#302b2f79] border-b-2 border-black py-2 px-2  outline-none w-full font-Cabinet font-bold text-xl"
					onChange={onChange}
					value={value}
					{...otherProps}
				>
					{data.map((e) => {
						return (
							<option
								value={e}
								key={e}
								className="bg-[#d8d1d0] text-[#302b2f] placeholder:text-[#302b2f79] py-3 px-2 rounded-2xl outline-none w-full font-Cabinet font-bold"
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

const CheckBoxInputs = ({ features, Code }) => {
	const featuresSet = new Set();
	return (
		<div className="flex flex-col gap-y-4">
			<div className="font-Cabinet font-bold text-black text-3xl">
				Product Features *
			</div>
			<div>
				{features.map((e) => {
					var i = 0;
					return (
						<div className="grid grid-cols-2 gap-x-4" key={`div${e}`}>
							<label
								htmlFor={e}
								className=" cursor-pointer text-black"
								key={`label${e}`}
							>
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
								}}
							/>
						</div>
					);
				})}
			</div>
			<div className="flex gap-x-2 items-center cursor-pointer">
				<div className="bg-[#302b2f] text-[#d8d1d0] px-3 py-1 rounded-md font-bold">
					+
				</div>
				<div className="underline text-black">Add a new feature</div>
			</div>
		</div>
	);
};

export { InputBox, TextArea, ImageInputBox, SelectInput, CheckBoxInputs };
