import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../../pages/Login/Login";
import RecoverAccount from "../../../pages/RecoverAccount/RecoverAccount";
import VerificationCode from "../../../pages/VerificationCode/VerificationCode";
import NewPassword from "../../../pages/NewPassword/NewPassword";
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
          <Route
            path="/login"
            element={
              <Suspense fallback={<></>}>
                <Login/>
              </Suspense>
            }
          />
          <Route
            path="/recover-account"
            element={
              <Suspense fallback={<></>}>
                <RecoverAccount></RecoverAccount>
              </Suspense>
            }
          />
          <Route
            path="/verification-code"
            element={
              <Suspense fallback={<></>}>
                <VerificationCode></VerificationCode>
              </Suspense>
            }
          />
          <Route
            path="/new-password"
            element={
              <Suspense fallback={<></>}>
                <NewPassword></NewPassword>
              </Suspense>
            }
          />
        </Routes>
  );
};

export default LogRoutes;
