import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Second {
	time: number | null;
	time1: number | null;
	time2: number | null;
}

const initialState: Second = {
	time: null,
	time1: null,
	time2: null,
};

const secondReducer = createSlice({
	name: "seconds",
	initialState,
	reducers: {
		pomodoroTime: (state, action: PayloadAction<{ value1: number }>) => {
			state.time = action.payload.value1;
		},
		shortBreakTime: (state, action: PayloadAction<{ value2: number }>) => {
			state.time1 = action.payload.value2;
		},
		longBreakTime: (state, action: PayloadAction<{ value3: number }>) => {
			state.time2 = action.payload.value3;
		},
	},
});

export const { pomodoroTime, shortBreakTime, longBreakTime } =
	secondReducer.actions;
export const secondTime = secondReducer.reducer;
