import { Product } from "../../models/Product.model";

async function admnProds() {
	const pipeline = [
		{
			$project: {
				PName: 1,
				PPrice: 1,
				PStock: 1,
				PCategory: 1,
				PCode: 1,
			},
		},
		{
			$match: {},
		},
	];

	const products = await Product.aggregate(pipeline);

	return products;
}

export { admnProds };
