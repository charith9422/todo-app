import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "https://www.boredapi.com/api";

export const get = async <T>(url: string): Promise<T> => {
	try {
		const response: AxiosResponse<T> = await axios.get(
			`${API_BASE_URL}/${url}`
		);
		return response.data;
	} catch (error) {
		throw new Error("API request failed.");
	}
};
