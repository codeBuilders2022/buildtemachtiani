import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//Components
import LineTimeSkeleton from "../../../pages/LineTime/LineTimeSkeleton";
import CreateArticleSkeleton from "../../../pages/CreateArticle/CreateArticleSkeleton";
import Page404 from "../../../pages/Page404/Page404";

//Lazy
const CreateArticle = lazy(() =>
  import("../../../pages/CreateArticle/CreateArticle")
);
const LineTime = lazy(() => import("../../../pages/LineTime/LineTime"));

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/dashboard"
        element={
          <Suspense fallback={<></>}>
            <h1>este es auth</h1>
            <h1>este es auth</h1>
            <h1>este es auth</h1>
            <h1>este es auth</h1>
            <h1>este es auth</h1>
            <h1>este es auth</h1>
          </Suspense>
        }
      />
      <Route
        exact
        path="/my-article"
        element={
          <Suspense fallback={<LineTimeSkeleton />}>
            <LineTime />
          </Suspense>
        }
      />
      <Route
        exact
        path="/article-create"
        element={
          <Suspense fallback={<CreateArticleSkeleton />}>
            <CreateArticle />
          </Suspense>
        }
      />

      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
};

export default AuthRoutes;
