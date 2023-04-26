import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LineTimeSkeleton from "../../pages/LineTime/LineTimeSkeleton";
import { lazy } from "react";
import CreateArticleSkeleton from "../../pages/CreateArticle/CreateArticleSkeleton";
const CreateArticle =lazy(()=>import("../../pages/CreateArticle/CreateArticle"));
const LineTime = lazy(()=>import("../../pages/LineTime/LineTime"));

const AuthRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
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
                path="/my-article"
                element={
                    <Suspense fallback={<LineTimeSkeleton />}>
                        <LineTime />
                    </Suspense>
                }
            />
             <Route
                path="/article-create"
                element={
                    <Suspense fallback={<CreateArticleSkeleton/>}>
                        <CreateArticle/>
                    </Suspense>
                }
            />

        </Routes>
    );
}
export default AuthRoutes