import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const PrivacyPolicies = lazy(() => import("../../../pages/PrivacyPolicies/PrivacyPolicies"));
const FAQ = lazy(() => import("../../../pages/FAQ/FAQ"));



const Legals = () => {
    return (
        <Routes>
            <Route
                exact
                path="/frequent-questions"
                element={
                <Suspense fallback={<></>}>
                    <FAQ />
                </Suspense>
                }
            />
            <Route
                exact
                path="/privacy-policies"
                element={
                <Suspense fallback={<></>}>
                    <PrivacyPolicies />
                </Suspense>
                }
            />
        </Routes>

            
    )
}

export default Legals;