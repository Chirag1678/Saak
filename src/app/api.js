const BASE_URL = "http://localhost:8000/api/";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
