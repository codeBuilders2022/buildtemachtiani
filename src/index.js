// If you want to start measuring performance in your app, pass a function
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

//Styles primeReact
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

//Componets
import { ContextProvider } from "./contexts/ContextProvider";
import Guest from "./Routes/Guest/Guest";

//Styles
import "./index.css";

export default function RootRoute() {

  return (
    <main>
          <Guest />
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RootRoute />
  </ContextProvider>
);