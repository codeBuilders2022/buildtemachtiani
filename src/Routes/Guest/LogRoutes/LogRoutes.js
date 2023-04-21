import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LogSkeleton from "../../../pages/Log/LogSkeleton";

const Log = lazy(() => import("../../../pages/Log/Log"));

const LogRoutes = () => {
  return (
        <Routes>
          <Route
            path="/log"
            element={
              <Suspense fallback={<LogSkeleton />}>
                <Log />
              </Suspense>
            }
          />
        </Routes>
  );
};

export default LogRoutes;
