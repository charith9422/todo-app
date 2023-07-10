import axios, { AxiosResponse } from "axios";

// common method for all GET calls
export const getAPI = async <T>(url: string): Promise<T> => {
	try {
		const response: AxiosResponse<T> = await axios.get(
			`${process.env.REACT_APP_API_URL}/${url}`
		);
		return response.data;
	} catch (error) {
		throw new Error("API request failed.");
	}
};
