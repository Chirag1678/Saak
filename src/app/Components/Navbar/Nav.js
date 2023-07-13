"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/Logo/Saak.png";
import { useSelector } from "react-redux";
import axios from "axios";

const Nav = () => {
	// const name = useSelector((state) => state);
	// console.log(name);
	var [name, setName] = useState("");
	const handleLoad = async () => {
		await axios.get("http://localhost:8000/api/Auth/Name").then((res) => {
			setName(res.data);
			// console.log(name);
		});
	};
	handleLoad();
	return (
		<div className="relative container mx-auto 2xl:block xl:block lg:block md:hidden sm:hidden hidden">
			<header className="container mx-auto w-full bg-[#393037] z-30 py-8 fixed">
				<nav id="Nav" className="flex justify-between items-center">
					<div className="gap-x-[97px] flex items-center">
						<Link href="/">
							<img
								src="https://res.cloudinary.com/dmgmcljcv/image/upload/v1688019782/Saak_u0haim.png"
								alt="Logo"
								width="100"
								height="100"
							/>
						</Link>
						<div className="flex gap-[30px]">
							<Link href="/about" className=" font-latoLight navActive">
								About
							</Link>
							<Link href="/Dashboard" className=" font-latoLight navOthers">
								Shop Now
							</Link>
							<Link href="/about" className=" font-latoLight navOthers">
								Contact
							</Link>
							<Link href="/about" className=" font-latoLight navOthers">
								Saak Innovation
							</Link>
						</div>
					</div>
					<button className="border-2 border-[#fff] p-[7px_18px] rounded-full flex font-Cabinet font-bold gap-x-[9px] items-center text-[14px]">
						{/* <div className="rounded-full w-[11.25px] h-[11.25px] border-2 border-white bg-[#fff]"></div> */}
						<Link href="/Profile" className="text-white">
							Hi, <span className="underline hover:cursor-pointer">{name}</span>
						</Link>
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Nav;

/* (
								<Link
									href="/Auth/Login"
									className="hover:opacity-40 transition-all"
								>
									Login
								</Link>
							) /
							(
								<Link
									href="/Auth/Signup"
									className="hover:opacity-40 transition-all"
								>
									Signup
								</Link>
							) */
