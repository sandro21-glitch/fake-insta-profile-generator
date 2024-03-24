import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';
interface highlightsTypes {
  id: string;
  name: string;
  image: string;
}

export interface highlightsState {
  highlights: highlightsTypes[];
}

const initialState: highlightsState = {
  highlights: [],
};

export const highlightsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = highlightsSlice.actions;

export default highlightsSlice.reducer;
