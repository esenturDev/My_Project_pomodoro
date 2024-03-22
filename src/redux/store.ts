import { configureStore } from "@reduxjs/toolkit";
import { secondTime } from "./tools/secondsSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		secondTime,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type useDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
