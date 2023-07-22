"use client";

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: { value: {} },
	reducers: {
		login: (state, action) => {
			state.value["NAME"] = action.payload.NAME;
			state.value["USERNAME"] = action.payload.USERNAME;
			localStorage.setItem("USERNAME", action.payload.USERNAME);
			localStorage.setItem("NAME", action.payload.NAME);
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
