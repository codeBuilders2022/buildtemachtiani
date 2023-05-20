import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//Components
import LineTimeSkeleton from "../../../pages/TableArticles/LineTime/LineTimeSkeleton";
import CreateArticleSkeleton from "../../../pages/TableArticles/CreateArticle/CreateArticleSkeleton";
import Page404 from "../../../pages/Page404/Page404";
const TableArticles = lazy(() => import("../../../pages/TableArticles/TableArticles"));
import TableArticlesSkeleton from "../../../pages/TableArticles/TableArticlesSkeleton";

//Lazy
const CreateArticle = lazy(() =>
  import("../../../pages/TableArticles/CreateArticle/CreateArticle")
);
const LineTime = lazy(() => import("../../../pages/TableArticles/LineTime/LineTime"));

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/user/dashboard/:idUser"
        element={
          <Suspense fallback={<TableArticlesSkeleton />}>
            <TableArticles />
          </Suspense>
        }
      />
      <Route
        exact
        path="/user/my-article/:id/:idUser"
        element={
          <Suspense fallback={<LineTimeSkeleton />}>
            <LineTime />
          </Suspense>
        }
      />
      <Route
        exact
        path="/user/article-create/:idUser"
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
