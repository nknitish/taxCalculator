import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <CssBaseline />
    </PersistGate>
    <App />
  </React.StrictMode>
);
