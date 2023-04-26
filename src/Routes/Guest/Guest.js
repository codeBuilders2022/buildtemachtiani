import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";

import Paleta_color from '../../assets/images/Paleta_color.png'


import App from "./App/App";
import { Footer, Navbar, ThemeSettings } from "../../components";
import { useEffect } from "react";
import LogRoutes from "./LogRoutes/LogRoutes";
import Navbarr from "../../components/molecules/Navbarr/Navbarr";

const Guest = ({setAuth}) => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    setCurrentColor,
    setCurrentMode,
  } = useStateContext();


  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }

  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <img src={Paleta_color} className="h-10 w-10"></img>
              {/* <FiSettings /> */}
            </button>
          </div>
          <div
            // De esta clase cambias el color del fondo
            className={`dark:bg-gray-800 bg-slate-100 min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            {/* <Navbar /> */}
            <Navbarr />
            <>
              {themeSettings && <ThemeSettings />}

              <App />
              <LogRoutes setAuth={setAuth}/>
              
            </>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Guest;
