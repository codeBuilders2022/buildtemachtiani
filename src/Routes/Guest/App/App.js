import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

//Styles
import "./App.scss";
// Skeletons
import LineTimeSkeleton from "../../../pages/LineTime/LineTimeSkeleton";
import ArticlesSkeleton from "../../../pages/Home/Articles/ArticlesSkeleton";
import HomeSkeleton from "../../../pages/Home/HomeSkeleton"
import TableArticlesSkeleton from "../../../pages/TableArticles/TableArticlesSkeleton";

//Lazy
const LineTime = lazy(() => import("../../../pages/LineTime/LineTime"));
const Metrics = lazy(() => import("../../../pages/Metrics/Metrics"));
const Articles = lazy(() => import("../../../pages/Home/Articles/Articles"));
const Home = lazy(() => import("../../../pages/Home/Home"));
const Instrucciones = lazy(() => import("../../../pages/Instrucciones/Instrucciones"));
const About = lazy(() => import("../../../pages/About/About"));
const Mision = lazy(() => import("../../../pages/Mision/Mision"));
const MagazinePolicies = lazy(() => import("../../../pages/MagazinePolicies/MagazinePolicies"));
const TableArticles = lazy(() => import("../../../pages/TableArticles/TableArticles"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<HomeSkeleton />}>
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
          <Suspense fallback={<ArticlesSkeleton />}>
            <Articles />
          </Suspense>
        }
      />
      <Route
        path="/articles"
        element={
          <Suspense fallback={<TableArticlesSkeleton />}>
            <TableArticles />
          </Suspense>
        }
      />
      {/* <Route
        path="/my-article"
        element={
          <Suspense fallback={<LineTimeSkeleton />}>
            <LineTime />
          </Suspense>
        }
      /> */}
    </Routes>
  );
};

export default App;
