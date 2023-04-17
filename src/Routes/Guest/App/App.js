import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../../../components";
import { useStateContext } from "../../../contexts/ContextProvider";
import "./App.scss";
import Home from "../../../pages/Home/Home";

//Lazy
const Actual = lazy(() => import("../../../pages/Actual/Actual"));
const Investigaciones = lazy(() =>
  import("../../../pages/Investigaciones/Investigaciones")
);
const Instrucciones = lazy(() =>
  import("../../../pages/Instrucciones/Instrucciones")
);
const About = lazy(() => import("../../../pages/About/About"));
const Mision = lazy(() => import("../../../pages/Mision/Mision"));
const Pdf = lazy(() => import("../../../pages/Pdf/Pdf"));
const PageActual = lazy(() => import("../../../pages/PageActual/PageActual"));
const MagazinePolicies = lazy(() =>
  import("../../../pages/MagazinePolicies/MagazinePolicies")
);

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
            <Navbar />
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<></>}>
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="/investigaciones"
                  element={
                    <Suspense fallback={<></>}>
                      <Investigaciones />
                    </Suspense>
                  }
                />
                <Route
                  path="/Instrucciones"
                  element={
                    <Suspense fallback={<></>}>
                      <Instrucciones />
                    </Suspense>
                  }
                />
                <Route
                  path="/About"
                  element={
                    <Suspense fallback={<></>}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="/Mision"
                  element={
                    <Suspense fallback={<></>}>
                      <Mision />
                    </Suspense>
                  }
                />
                <Route
                  path="/ricedut/:id"
                  element={
                    <Suspense fallback={<></>}>
                      <Pdf />
                    </Suspense>
                  }
                />
                <Route
                  path="NumeroActual"
                  element={
                    <Suspense fallback={<></>}>
                      <PageActual />
                    </Suspense>
                  }
                />
                <Route
                  path="/metrics"
                  element={
                    <Suspense fallback={<></>}>
                      <Metrics />
                    </Suspense>
                  }
                />
                <Route
                  path="magazine-policies"
                  element={
                    <Suspense fallback={<></>}>
                      <MagazinePolicies />
                    </Suspense>
                  }
                />
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
