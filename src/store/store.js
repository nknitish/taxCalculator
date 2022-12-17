import { configureStore } from "@reduxjs/toolkit";
import taxReducer from "./reducer";
export const store = configureStore({
  reducer: taxReducer,
});
