import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SkeletonsLegals from "../../../pages/PrivacyPolicies/SkeletonsLegals";
const LegalNotices = lazy(() => import("../../../pages/LegalNotices/LegalNotices"));
const AboutCookies = lazy(() => import("../../../pages/AboutCookies/AboutCookies"));
const PrivacyPolicies = lazy(() => import("../../../pages/PrivacyPolicies/PrivacyPolicies"));
const Faq = lazy(() => import("../../../pages/Faq/Faq"));

const Legals = () => {
    return (
        <Routes>
            <Route
                exact
                path="/frequent-questions"
                element={
                <Suspense fallback={<></>}>
                    <Faq />
                </Suspense>
                }
            />
            <Route
                exact
                path="/privacy-policies"
                element={
                <Suspense fallback={<SkeletonsLegals />}>
                    <PrivacyPolicies />
                </Suspense>
                }
            />
            <Route
                exact
                path="/about-cookies"
                element={
                <Suspense fallback={<SkeletonsLegals />}>
                    <AboutCookies />
                </Suspense>
                }
            />
            <Route
                exact
                path="/legal-notices"
                element={
                <Suspense fallback={<SkeletonsLegals />}>
                    <LegalNotices />
                </Suspense>
                }
            />
        </Routes>

            
    )
}

export default Legals;