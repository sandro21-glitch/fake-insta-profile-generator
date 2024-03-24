import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface highlightsState {
  value: number;
}

const initialState: highlightsState = {
  value: 0,
};

export const highlightsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = highlightsSlice.actions;

export default highlightsSlice.reducer;
