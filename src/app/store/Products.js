"use client";

import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "product",
	initialState: {
		Product: {
			PCode: "",
			PName: "",
			PPrice: 0,
			PFeatures: [],
			PDescription: "",
			PImages: {
				MainImg: "",
				Img1: "",
				Img2: "",
				Img3: "",
				Img4: "",
			},
			PStock: 0,
			PCategory: "Normal",
			PBrand: "",
			PReviews: [],
			PWeight: 0,
			PLength: 0,
			PWidth: 0,
			PHeight: 0,
			PWarranty: 0,
		},
	},
	reducers: {
		addProduct: (state, action) => {
			const Code = action.payload.Code;
			const Data = action.payload.Data;
			state.Product[Code] = Data;

			return state;
		},

		editProduct: (state, action) => {
			const Code = action.payload.Code;
			const Data = action.payload.Data;
			state.Product[Code] = Data;

			return state;
		},

		clearState: (state, action) => {
			state.Product = {};
			return state;
		},
	},
});

export const { addProduct, editProduct, clearState } = productSlice.actions;
export default productSlice.reducer;
