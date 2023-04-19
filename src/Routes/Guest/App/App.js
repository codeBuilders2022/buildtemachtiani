import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../../../components";
import { useStateContext } from "../../../contexts/ContextProvider";
import "./App.scss";
import Home from "../../../pages/Home/Home";
import Metrics from "../../../pages/Metrics/Metrics";
import Articles from "../../../pages/Home/Articles/Articles";

//Lazy
// const Investigaciones = lazy(() =>
//   import("../../../pages/Investigaciones/Investigaciones")
// );
const Instrucciones = lazy(() =>
  import("../../../pages/Instrucciones/Instrucciones")
);
const About = lazy(() => import("../../../pages/About/About"));
const Mision = lazy(() => import("../../../pages/Mision/Mision"));
// const Pdf = lazy(() => import("../../../pages/Pdf/Pdf"));
// const PageActual = lazy(() => import("../../../pages/PageActual/PageActual"));
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
                  path="/guide-authors"
                  element={
                    <Suspense fallback={<></>}>
                      <Instrucciones />
                    </Suspense>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Suspense fallback={<></>}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="/mission-vision"
                  element={
                    <Suspense fallback={<></>}>
                      <Mision />
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
                  path="/magazine-policies"
                  element={
                    <Suspense fallback={<></>}>
                      <MagazinePolicies />
                    </Suspense>
                  }
                />
                <Route
                  path="/article"
                  element={
                    <Suspense fallback={<></>}>
                      <Articles />
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
