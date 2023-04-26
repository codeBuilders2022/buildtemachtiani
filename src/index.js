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
import Auth from "./Routes/Auth/Auth";

export default function RootRoute() {
  const [auth, setAuth] = useState(false);

  return (
    <main>
      {auth ? (
          // <h1>Este lado es el autenticado</h1>
          <Auth></Auth>
      ) : (
          <Guest setAuth={setAuth}/>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RootRoute />
  </ContextProvider>
);