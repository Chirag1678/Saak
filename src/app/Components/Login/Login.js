"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Backbtn from "../../assets/Authentication/backBtn.svg";
import Google from "../../assets/Authentication/google.svg";
import axios from "axios";
import "../Signup/style.css";
import { login } from "./Store/Users";
import { useSelector, useDispatch } from "react-redux";

import { toastSuccess, toastError } from "../Toasts/Toast";

const Login = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const name = useSelector((state) => state.user.value);

	const handleSubmit = (e) => {
		try {
			const User = {
				Email: email,
				Password: password,
			};
			e.preventDefault();

			axios
				.post("http://localhost:8000/api/auth/Login", User)
				.then(async (res) => {
					if (res.status === 200) {
						console.log(res.data.Name);
						toastSuccess("Login Successful");
						const NAME = { value: res.data.Name };
						dispatch(login(NAME));
						// localStorage.setItem("Name", res.data.Name);
						// const name = useSelector((state) => state.user.value);
						// console.log(name);
						setTimeout(() => {
							window.location.href = "/";
						}, 1000);
					} else {
						toastError("Invalid Credentials");
					}
				});
		} catch (e) {
			console.log(e);
			toastError(e.response.data.error);
		}
	};

	return (
		<div className="bg-[url('./assets/Authentication/authBg.png')] h-screen bg-contain bg-no-repeat bg-bottom relative z-90 flex justify-center items-center">
			<div className="bg-[#fff] p-[35px_63px] rounded-2xl flex flex-col gap-y-[20px] cardBg">
				<div className="flex flex-col justify-center gap-y-[20px]">
					<div className="flex justify-between items-center">
						<div className="p-2 backBtn h-fit">
							<div className=" relative p-3 h-fit">
								<Image
									src={Backbtn}
									fill
									className="p-1 h-fit"
									quality={1000}
									alt="G"
								/>
							</div>
						</div>
						<div className="title font-Cabinet text-6xl text-[#000] font-bold">
							Login
						</div>
						<div></div>
					</div>
					<div className="loginGoogle flex w-full justify-center items-center gap-2 px-16 border-2 border-black">
						<div className="p-1 h-fit">
							<div className=" relative p-5 h-fit">
								<Image src={Google} fill className="p-1 h-fit" quality={1000} />
							</div>
						</div>
						<div className="text-[#393037] text-base font-bold font-Cabinet">
							Login with google
						</div>
					</div>
				</div>

				<div className="orDiv">
					<div className="flex justify-between items-center gap-x-[14px]">
						<div className="w-full">
							<hr className="h-1 bg-black" />
						</div>
						<div className="orText font-Cabinet text-base text-black font-bold">
							or
						</div>
						<div className="w-full">
							<hr className="h-1 bg-black" />
						</div>
					</div>
				</div>

				<div className="formDiv">
					<form action="">
						<div className="flex flex-col gap-y-[20px]">
							<div className="flex flex-col gap-y-[0px]">
								<div className="font-Cabinet text-base text-[#393037] font-bold">
									Email
								</div>
								<input
									type="email"
									className="outline-none border-2 border-[#393037] rounded-lg p-[10px] text-base font-lato text-[#393037] font-normal focus:border-[#fa645c] transition-all duration-75"
									placeholder="example@gmail.com"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="flex flex-col gap-y-[0px]">
								<div className="font-Cabinet text-base text-[#393037] font-bold">
									Password
								</div>
								<input
									type="password"
									className="outline-none border-2 border-[#393037] rounded-lg p-[10px] text-base font-lato text-[#393037] font-normal focus:border-[#fa645c] transition-all duration-75"
									placeholder="example1234"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="flex justify-center items-center">
								<button
									className="SignupBtnBg text-[#fff] rounded-lg p-[10px_20px] text-base font-Cabinet font-bold w-full"
									onClick={handleSubmit}
								>
									Login
								</button>
							</div>

							<div className="flex justify-start items-center">
								<div className="font-lato text-base text-[#393037] underline font-bold">
									<Link href="/Signup">Don't have an account? </Link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
