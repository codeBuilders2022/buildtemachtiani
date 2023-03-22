import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

import {
  Investigaciones,
  About,
  Instrucciones,
  Mision,
  Actual,
  Pdf,
  PageActual,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

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
              <FiSettings />
            </button>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-sky-900 ease-in-out duration-75">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            // De esta clase cambias el color del fondo
            className={`dark:bg-gray-800 bg-slate-100 min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-slate-100 dark:bg-gray-800 navbar w-full ">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Mis paginas */}
                <Route path="/" element={<Actual />} />
                <Route path="/investigaciones" element={<Investigaciones />} />
                <Route path="/Instrucciones" element={<Instrucciones />} />
                <Route path="/About" element={<About />} />
                <Route path="/Mision" element={<Mision />} />
                <Route path="/ricedut/:id" element={<Pdf />} />
                <Route path="/NumeroActual" element={<PageActual />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
