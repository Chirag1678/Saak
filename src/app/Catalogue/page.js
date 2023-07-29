import React from "react";
import Catalogue from "../Components/Catalogue/Catalogue";
import { CatalogueData } from "../layout";
import axios from "axios";

const Page = async () => {
	const { data } = await axios.get("http://localhost:8000/Product/allProducts");
	/* console.log(CatalogueData); */
	return <Catalogue data={data} />;
};

export default Page;
