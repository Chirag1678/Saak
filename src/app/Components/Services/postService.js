import axios from "axios";

class Post {
	create(formData) {
		const url = "http://localhost:3000/create";
		const config = {
			headers: { "content-type": "multipart/form-data" },
		};
		return axios.post(url, formData, config);
	}
}

export default new Post();
