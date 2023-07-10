import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "https://www.boredapi.com/api";

// common method for all GET calls
export const getAPI = async <T>(url: string): Promise<T> => {
	try {
		const response: AxiosResponse<T> = await axios.get(
			`${API_BASE_URL}/${url}`
		);
		return response.data;
	} catch (error) {
		throw new Error("API request failed.");
	}
};
