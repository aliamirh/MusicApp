import { configureStore } from "@reduxjs/toolkit";
import songInfoReducer from "./reducers/currentlyPlayingSongSlice";
export const store = configureStore({
  reducer: { songInfo: songInfoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
