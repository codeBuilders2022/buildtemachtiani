import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LogSkeleton from "../../../pages/Log/LogSkeleton";
import LoginSkeleton from "../../../pages/Login/LoginSkeleton";
import RecoverAccountSkeleton from "../../../pages/RecoverAccount/RecoverAccountSkeleton";
import VerificationCodeSkeleton from "../../../pages/VerificationCode/VerificationCodeSkeleton";
import NewPasswordSkeleton from "../../../pages/NewPassword/NewPasswordSkeleton";

const NewPassword = lazy(()=>import("../../../pages/NewPassword/NewPassword"));
const VerificationCode = lazy(()=>import("../../../pages/VerificationCode/VerificationCode"));
const RecoverAccount = lazy(()=>import("../../../pages/RecoverAccount/RecoverAccount"));
const Login = lazy(()=>import("../../../pages/Login/Login"));
const Log = lazy(() => import("../../../pages/Log/Log"));

const LogRoutes = ({setAuth}) => {
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
                <Login setAuth={setAuth}/>
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
            path="/verification-code"
            element={
              <Suspense fallback={<VerificationCodeSkeleton/>}>
                <VerificationCode/>
              </Suspense>
            }
          />
          <Route
            path="/new-password"
            element={
              <Suspense fallback={<NewPasswordSkeleton/>}>
                <NewPassword setAuth={setAuth}/>
              </Suspense>
            }
          />
        </Routes>
  );
};

export default LogRoutes;
