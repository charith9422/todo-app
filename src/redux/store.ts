import { configureStore } from "@reduxjs/toolkit";
import randomTaskReducer from "./randomTaskSlice";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
	reducer: {
		randomTask: randomTaskReducer,
	},
	middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
