import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LogSkeleton from "../../../pages/Log/LogSkeleton";
import LoginSkeleton from "../../../pages/Login/LoginSkeleton";
import RecoverAccountSkeleton from "../../../pages/RecoverAccount/RecoverAccountSkeleton";
import VerificationCodeSkeleton from "../../../pages/VerificationCode/VerificationCodeSkeleton";
import NewPasswordSkeleton from "../../../pages/NewPassword/NewPasswordSkeleton";
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

const LogRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/log"
        element={
          <Suspense fallback={<LogSkeleton />}>
            <Log />
          </Suspense>
        }
      />
      <Route
        exact
        path="/login"
        element={
          <Suspense fallback={<LoginSkeleton />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        exact
        path="/recover-account"
        element={
          <Suspense fallback={<RecoverAccountSkeleton />}>
            <RecoverAccount />
          </Suspense>
        }
      />
      <Route
        exact
        path="/verification-code"
        element={
          <Suspense fallback={<VerificationCodeSkeleton />}>
            <VerificationCode />
          </Suspense>
        }
      />
      <Route
        exact
        path="/new-password"
        element={
          <Suspense fallback={<NewPasswordSkeleton />}>
            <NewPassword />
          </Suspense>
        }
      />
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
};

export default LogRoutes;
