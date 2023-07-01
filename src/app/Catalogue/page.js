import React from "react";
import Catalogue from "../Components/Catalogue/Catalogue";
import { CatalogueData } from "../layout";

const Page = () => {
	/* console.log(CatalogueData); */
	return <Catalogue data={CatalogueData} />;
};

export default Page;
