"use client";

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: { value: { name: "" } },
	reducers: {
		login: (state, action) => {
			state = action.payload;
			// console.log(state);

			return state;
		},
	},
});

// console.log(userSlice);

export const { login } = userSlice.actions;
// module.exports.userSlice.actions = { login };
// console.log(module.exports);
export default userSlice.reducer;
