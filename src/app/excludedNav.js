"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Components/Navbar/Nav";

const excludedPages = [
	"/Auth/Login",
	"/Auth/Signup",
	"/Admin",
	"/Admin/Products",
	"/Admin/Products/AddProduct",
	"/Admin/Products/EditProduct",
];

const ExcludedNav = ({ children }) => {
	const pathname = usePathname();
	const [noNav, setNoNav] = useState(false);

	// console.log(pathname);
	useEffect(() => {
		if (excludedPages.includes(pathname) || pathname.includes("/Admin")) {
			// console.log(pathname);
			setNoNav(false);
		} else {
			// console.log(pathname);

			setNoNav(true);
		}
	}, [pathname]);

	// console.log(pathname);

	return <>{noNav && children}</>;
};

export default ExcludedNav;
