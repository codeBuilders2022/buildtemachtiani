import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

//Styles
import "./App.scss";
// Skeletons
import ArticlesSkeleton from "../../../pages/Home/Articles/ArticlesSkeleton";
import HomeSkeleton from "../../../pages/Home/HomeSkeleton";
import InstruccionesSkeletons from "../../../pages/Instrucciones/InstruccionesSkeletons";
import AboutSkeletons from "../../../pages/About/AboutSkeletons";
import MisionSkeleton from "../../../pages/Mision/MisionSkeleton";
import MagazinePoliciesSkeleton from "../../../pages/MagazinePolicies/MagazinePoliciesSkeleton";

//Lazy
const Metrics = lazy(() => import("../../../pages/Metrics/Metrics"));
const Articles = lazy(() => import("../../../pages/Home/Articles/Articles"));
const Home = lazy(() => import("../../../pages/Home/Home"));
const Instrucciones = lazy(() =>
  import("../../../pages/Instrucciones/Instrucciones")
);
const About = lazy(() => import("../../../pages/About/About"));
const Mision = lazy(() => import("../../../pages/Mision/Mision"));
const MagazinePolicies = lazy(() =>
  import("../../../pages/MagazinePolicies/MagazinePolicies")
);
const TableArticles = lazy(() =>
  import("../../../pages/TableArticles/TableArticles")
);

const App = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Suspense fallback={<HomeSkeleton />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        exact
        path="/guide-authors"
        element={
          <Suspense fallback={<InstruccionesSkeletons />}>
            <Instrucciones />
          </Suspense>
        }
      />
      <Route
        exact
        path="/about"
        element={
          <Suspense fallback={<AboutSkeletons />}>
            <About />
          </Suspense>
        }
      />
      <Route
        exact
        path="/mission-vision"
        element={
          <Suspense fallback={<MisionSkeleton />}>
            <Mision />
          </Suspense>
        }
      />
      <Route
        exact
        path="/metrics"
        element={
          <Suspense fallback={<></>}>
            <Metrics />
          </Suspense>
        }
      />
      <Route
        exact
        path="/magazine-policies"
        element={
          <Suspense fallback={<MagazinePoliciesSkeleton />}>
            <MagazinePolicies />
          </Suspense>
        }
      />
      <Route
        exact
        path="/article/:id"
        element={
          <Suspense fallback={<ArticlesSkeleton />}>
            <Articles />
          </Suspense>
        }
      />

      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
};

export default App;
