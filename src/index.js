// If you want to start measuring performance in your app, pass a function
import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
