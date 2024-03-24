import { configureStore } from "@reduxjs/toolkit";
import highlightsSlice from "./features/slices/highlightsSlice";
export const store = configureStore({
  reducer: {
    highlights: highlightsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
