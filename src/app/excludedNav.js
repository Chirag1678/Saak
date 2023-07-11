"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Components/Navbar/Nav";

const excludedPages = ["/Auth/Login", "/Auth/Signup"];

const ExcludedNav = ({ children }) => {
	const pathname = usePathname();
	const [noNav, setNoNav] = useState(false);

	useEffect(() => {
		if (excludedPages.includes(pathname)) {
			setNoNav(false);
		} else {
			setNoNav(true);
		}
	}, [usePathname()]);

	return <>{noNav && children}</>;
};

export default ExcludedNav;
