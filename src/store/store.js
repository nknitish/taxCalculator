import { configureStore } from "@reduxjs/toolkit";
import taxReducer from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, taxReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
