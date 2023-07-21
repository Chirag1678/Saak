import React from "react";
import Image from "next/image";
import CartQuantity from "./CartQuantity";

const CartCard = () => {
	return (
		<div className="cartItem flex items-center justify-between">
			<div className="flex items-center">
				<div className="cartItemImg relative rounded-2xl h-32 w-48 flex justify-start">
					<Image
						src={
							"https://res.cloudinary.com/dmgmcljcv/image/upload/v1689799786/fpy7vufa50q0i8ikomxt.png"
						}
						fill
						className="object-contain rounded-xl h-fit w-fit p-4"
					/>
				</div>
				<div className="flex flex-col gap-y-4">
					<div className="cartItemName font-Cabinet font-bold text-base text-white">
						Product Name
					</div>
					<div className="cartItemPrice font-Cabinet font-bold text-base text-white">
						$100
					</div>
				</div>
			</div>

			<CartQuantity currQuantity={1} />
		</div>
	);
};

export default CartCard;
