import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Log = lazy(() => import("../../../pages/Log/Log"));

const LogRoutes = () => {
  return (
        <Routes>
          <Route
            path="/log"
            element={
              <Suspense fallback={<></>}>
                <Log />
              </Suspense>
            }
          />
        </Routes>
  );
};

export default LogRoutes;
