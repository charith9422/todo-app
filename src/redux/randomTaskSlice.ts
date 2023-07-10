import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getAPI } from "../api/apiService";

interface IRandomTaskApiResponse {
	activity: string;
	type: string;
}
interface IRandomTaskApiState {
	data: IRandomTaskApiResponse | null;
	loading: boolean;
	error: string | null;
}
const initialState: IRandomTaskApiState = {
	data: null,
	loading: false,
	error: null,
};
export const fetchData = createAsyncThunk<IRandomTaskApiResponse, void>(
	"fetchData",
	async () => {
		try {
			const response: IRandomTaskApiResponse = await getAPI("activity");
			return response;
		} catch (error: any) {
			throw error.response.data;
		}
	}
);
export const selectRandomTaskSlice = (rootState: RootState) =>
	rootState.randomTask;
// Create the slice
const randomTaskSlice = createSlice({
	name: "randomTask",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchData.fulfilled,
				(state, action: PayloadAction<IRandomTaskApiResponse>) => {
					state.loading = false;
					state.data = action.payload;
				}
			)
			.addCase(fetchData.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const randomTaskActions = randomTaskSlice.actions;
export default randomTaskSlice.reducer;
