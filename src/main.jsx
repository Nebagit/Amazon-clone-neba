import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import reducer, { initialState } from "./Components/reducer.jsx";
import { StateProvider } from "./Components/StateProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);
