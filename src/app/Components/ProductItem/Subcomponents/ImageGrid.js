"use client";

import React, { useEffect } from "react";
import Grid1 from "./ImageGrids/Grid1";
import Grid2 from "./ImageGrids/Grid2";
import Grid3 from "./ImageGrids/Grid3";
import Grid4 from "./ImageGrids/Grid4";
import Grid5 from "./ImageGrids/Grid5";

const ImageGrid = ({ data }) => {
	var numImages = 0;

	// console.log(Object.values(data));
	Object.values(data).forEach((e) => {
		if (typeof e === "string") {
			numImages += 1;
		}
	});
	// console.log(numImages);

	if (numImages === 1) {
		return <Grid1 props={data} />;
	} else if (numImages === 2) {
		return <Grid2 props={data} />;
	} else if (numImages === 3) {
		return <Grid3 props={data} />;
	} else if (numImages === 4) {
		return <Grid4 props={data} />;
	} else if (numImages === 5) {
		return <Grid5 props={data} />;
	}
};

export default ImageGrid;
