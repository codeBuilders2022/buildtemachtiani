import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

//Styles
import "./App.scss";

const Metrics = lazy(() => import("../../../pages/Metrics/Metrics"));
const Articles = lazy(() => import("../../../pages/Home/Articles/Articles"));
const Home = lazy(() => import("../../../pages/Home/Home"));
const Instrucciones = lazy(() => import("../../../pages/Instrucciones/Instrucciones"));
const About = lazy(() => import("../../../pages/About/About"));
const Mision = lazy(() => import("../../../pages/Mision/Mision"));
const MagazinePolicies = lazy(() => import("../../../pages/MagazinePolicies/MagazinePolicies"));


const App = () => {
  return (
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
  );
};

export default App;
