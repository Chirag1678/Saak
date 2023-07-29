"use client";

import React, { useState } from "react";
import "./style.css";
import Backbtn from "../../assets/Authentication/backBtn.svg";
import Google from "../../assets/Authentication/google.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toastSuccess, toastError } from "../Toasts/Toast";
import { signIn, useSession } from "next-auth/react";
import { opacity } from "@cloudinary/url-gen/actions/adjust";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passStrength, setPassStrength] = useState("Weak");
	let [username, setUsername] = useState("");
	const [isAvailable, setIsAvailable] = useState("Unavailable");
	const [disabled, setDisabled] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		var NewUser;
		if (session) {
			NewUser = {
				Name: session.user.name,
				Email: session.user.email,
				Username: username,
				Password: password,
			};
		} else {
			NewUser = {
				Name: name,
				Email: email,
				Username: username,
				Password: password,
			};
		}

		console.log(NewUser);

		try {
			const res = await axios.post(
				"http://localhost:8000/api/Auth/Signup",
				NewUser
			);
			if (res.status === 200) {
				toastSuccess("Signup Successful");
				setTimeout(() => {
					window.location.href = "/";
				}, 1000);
			} else {
				toastError("Signup Failed");
				window.location.href = "/Auth/Signup";
			}
		} catch (err) {
			console.log(err);
			toastError("Signup Failed");
		}
	};

	const handleUsername = async (user) => {
		document.querySelector(".isAvailable").classList.remove("hidden");
		setUsername(user);

		console.log(username);

		if (username.length > 4 && username.includes(" ") === false) {
			try {
				await axios
					.post("http://localhost:8000/api/Username/check", {
						Username: username,
					})
					.then((res) => {
						console.log(res);
						if (res.status === 201) {
							setIsAvailable("Available");
						} else {
							setIsAvailable("Unavailable");
						}
					})
					.catch((err) => {
						setIsAvailable("Unavailable");
						console.log(err);
					});
				return;
			} catch (err) {
				setIsAvailable(`Unavailable`);
				console.log(err);
				return;
			}
		} else {
			setIsAvailable("Unavailable");
			return;
		}
	};

	const { data: session } = useSession();

	const handleGoogleLogin = () => {
		signIn("google", { callbackUrl: "http://localhost:3000/Auth/Signup" });
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
								/>
							</div>
						</div>
						<div className="title font-Cabinet text-6xl text-[#000] font-bold">
							Signup
						</div>
						<div></div>
					</div>
					<button
						className="loginGoogle flex w-full justify-center items-center gap-2 px-16 border-2 border-black"
						onClick={() => handleGoogleLogin()}
					>
						<div className="p-1 h-fit">
							<div className=" relative p-5 h-fit">
								<Image src={Google} fill className="p-1 h-fit" quality={1000} />
							</div>
						</div>
						<div className="text-[#393037] text-base font-bold font-Cabinet">
							Signup with google
						</div>
					</button>
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
					<form>
						<div className="flex flex-col gap-y-[20px]">
							<div className="flex flex-col gap-y-[0px]">
								<div className="font-Cabinet text-base text-[#393037] font-bold">
									Name
								</div>
								<input
									type="text"
									className={`outline-none border-2 border-[#393037] rounded-lg p-[10px] text-base font-Cabinet text-[#393037] font-bold focus:border-[#fa645c] transition-all duration-75 disabled:opacity-50`}
									onChange={(e) => {
										setName(e.target.value);
									}}
									value={session ? session.user.name : name}
									onLoad={
										session
											? () => setName(session.user.name)
											: () => setName("")
									}
									disabled={session ? "disabled" : ""}
								/>
							</div>

							<div className="flex flex-col gap-y-[0px]">
								<div className="flex justify-between">
									<div className="font-Cabinet text-base text-[#393037] font-bold">
										Username
									</div>
									<div className=" isAvailable text-black hidden">
										{isAvailable}
									</div>
								</div>
								<input
									type="text"
									className="outline-none border-2 border-[#393037] rounded-lg p-[10px] text-base font-Cabinet text-[#393037] font-bold focus:border-[#fa645c] transition-all duration-75"
									onChange={(e) => {
										// console.log(e.target.value);
										e.persist();
										handleUsername(e.target.value);
									}}
									onFocus={(e) => {
										handleUsername(e.target.value);
									}}
								/>
							</div>

							<div className="flex flex-col gap-y-[0px]">
								<div className="font-Cabinet text-base text-[#393037] font-bold">
									Email
								</div>
								<input
									type="email"
									className="outline-none border-2 border-[#393037] rounded-lg p-[10px] text-base font-Cabinet text-[#393037] font-bold focus:border-[#fa645c] transition-all duration-75 disabled:opacity-50"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									value={session ? session.user.email : email}
									onLoad={
										session
											? () => setEmail(session.user.email)
											: () => setEmail("")
									}
									disabled={session ? "disabled" : ""}
								/>
							</div>

							<div className="flex flex-col gap-y-[0px]">
								<div className="flex justify-between">
									<div className="font-Cabinet text-base text-[#393037] font-bold">
										Password
									</div>
									<div className=" isAvailable text-black hidden">
										{passStrength}
									</div>
								</div>
								<input
									type="password"
									className="outline-none border-2 border-[#393037] rounded-lg p-[10px] text-base font-Cabinet text-[#393037] font-bold focus:border-[#fa645c] transition-all duration-75"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									value={password}
								/>
							</div>

							<div className="flex justify-center items-center">
								<button
									className="SignupBtnBg text-[#fff] rounded-lg p-[10px_20px] text-base font-Cabinet font-bold w-full"
									type="submit"
									onClick={handleSubmit}
								>
									Signup
								</button>
							</div>

							<div className="flex justify-start items-center">
								<div className="font-lato text-base text-[#393037] underline font-bold">
									<Link href="/Signup">Have an account already? </Link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
