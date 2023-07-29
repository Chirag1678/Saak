import React from "react";
import axios from "axios";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { usePathname, useRouter } from "next/navigation";

const Page = async ({ params }) => {
	// const router = usePathname();

	// console.log(response);
	// console.log(params.slug);
	return <ProductItem PCode={params.slug} />;
};

export default Page;
