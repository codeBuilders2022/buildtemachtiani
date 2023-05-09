import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LogSkeleton from "../../../pages/Log/LogSkeleton";
import LoginSkeleton from "../../../pages/Login/LoginSkeleton";
import RecoverAccountSkeleton from "../../../pages/RecoverAccount/RecoverAccountSkeleton";
import VerificationCodeSkeleton from "../../../pages/VerificationCode/VerificationCodeSkeleton";
import NewPasswordSkeleton from "../../../pages/NewPassword/NewPasswordSkeleton";
import CommitteeSkeleton from "../../../pages/Committee/CommitteeSkeleton";
import Page404 from "../../../pages/Page404/Page404";

const NewPassword = lazy(() =>
  import("../../../pages/NewPassword/NewPassword")
);
const VerificationCode = lazy(() =>
  import("../../../pages/VerificationCode/VerificationCode")
);
const RecoverAccount = lazy(() =>
  import("../../../pages/RecoverAccount/RecoverAccount")
);
const Login = lazy(() => import("../../../pages/Login/Login"));
const Log = lazy(() => import("../../../pages/Log/Log"));
const Committee = lazy(() => import("../../../pages/Committee/Committee"));

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
              <Suspense fallback={<LoginSkeleton/>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/recover-account"
            element={
              <Suspense fallback={<RecoverAccountSkeleton/>}>
                <RecoverAccount/>
              </Suspense>
            }
          />
          <Route
            path="/verification-code/:code/:id/:idUser"
            element={
              <Suspense fallback={<VerificationCodeSkeleton/>}>
                <VerificationCode/>
              </Suspense>
            }
          />
          <Route
            path="/new-password/:id/:idUser"
            element={
              <Suspense fallback={<NewPasswordSkeleton/>}>
                <NewPassword />
              </Suspense>
            }
          />
          <Route
            path="/committee"
            element={
              <Suspense fallback={<CommitteeSkeleton/>}>
              <Committee/>
              </Suspense>
            }
          />
        </Routes>
  );
};

export default LogRoutes;
