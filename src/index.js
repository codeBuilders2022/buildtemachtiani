// If you want to start measuring performance in your app, pass a function
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

//Componets
import { ContextProvider } from "./contexts/ContextProvider";
import Guest from "./Routes/Guest/Guest";

//Styles
import "./index.css";

export default function RootRoute() {
  const [auth, setAuth] = useState(false);

  return (
    <main>
      {auth ? (
          <h1>Este lado es el autenticado</h1>
      ) : (
          <Guest />
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RootRoute />
  </ContextProvider>
);