import axios, { AxiosResponse } from "axios";

const apiService = axios.create({
	baseURL: "https://www.boredapi.com/api", // Replace with your API base URL
});

export const get = async <T>(endpoint: string): Promise<T> => {
	try {
		const response: AxiosResponse<T> = await apiService.get(endpoint);
		return response.data;
	} catch (error: any) {
		throw error.response.data;
	}
};

export default apiService;
