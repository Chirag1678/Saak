"use client";
import React, { useState } from "react";
import axios from "axios";

const LikeIcon = ({ data, like }) => {
	const [liked, setLiked] = useState("#d8d1d0");

	return (
		<div className="">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				onClick={() => {
					setLiked("#cb492b");
					// axios
					// 	.post("http://localhost:8000/Product/like", {
					// 		PCode: data.PCode,
					// 	})
					// 	.then((response) => {
					// 		console.log(response);
					// 	})
					// 	.catch((error) => {
					// 		console.log(error);
					// 	});
				}}
			>
				<path
					d="M19.388 2.40003C18.8772 1.88904 18.2708 1.48368 17.6033 1.20712C16.9359 0.930555 16.2205 0.788208 15.498 0.788208C14.7755 0.788208 14.0601 0.930555 13.3926 1.20712C12.7252 1.48368 12.1187 1.88904 11.608 2.40003L10.548 3.46003L9.48797 2.40003C8.45628 1.36834 7.057 0.788743 5.59797 0.788743C4.13894 0.788743 2.73966 1.36834 1.70797 2.40003C0.676278 3.43173 0.0966797 4.831 0.0966797 6.29003C0.0966797 7.74907 0.676278 9.14834 1.70797 10.18L10.548 19.02L19.388 10.18C19.899 9.66928 20.3043 9.06285 20.5809 8.39539C20.8574 7.72793 20.9998 7.01252 20.9998 6.29003C20.9998 5.56755 20.8574 4.85214 20.5809 4.18468C20.3043 3.51722 19.899 2.91079 19.388 2.40003Z"
					fill={`${liked}`}
				/>
			</svg>
		</div>
	);
};

export default LikeIcon;
