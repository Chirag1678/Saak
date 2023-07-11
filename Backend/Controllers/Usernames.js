const { User } = require("../Models/Users");

async function findUsername(user) {
	const pipeline = [
		{
			$match: {
				Username: user,
			},
		},
	];
	const foundUser = await User.aggregate(pipeline);
	if (foundUser.length === 0) {
		return false;
	}
	return true;
}

module.exports = { findUsername };
