import React from "react";
import EditProd from "../../../../Components/AdminComponents/EditProduct/EditProd";
import axios from "axios";

const Page = ({ params }) => {
	const taker = async (slug) => {
		const response = await axios.post(`/Product/Find/${slug}`, { PCode: slug });
		return response;
	};
	return (
		<div>
			<EditProd PCode={params.slug} />
		</div>
	);
};

export default Page;
