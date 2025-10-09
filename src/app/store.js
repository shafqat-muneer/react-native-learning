import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "../features/habitsReducer";

export const store = configureStore({
  reducer: {
    app: habitsReducer,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
