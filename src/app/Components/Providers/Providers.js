"use client";

import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../Login/Store/Users";

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export function Providers({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
