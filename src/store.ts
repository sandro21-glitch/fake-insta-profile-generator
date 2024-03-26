import { configureStore } from "@reduxjs/toolkit";
import highlightsReducer from "./features/slices/highlightsSlice";
import postsReducer from "./features/slices/postsSlice";
export const store = configureStore({
  reducer: {
    highlights: highlightsReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
