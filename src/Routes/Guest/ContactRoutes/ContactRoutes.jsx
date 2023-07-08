import React, { Suspense } from "react"
import { lazy } from "react";
import { Route, Routes } from "react-router-dom"
const Contact = lazy(()=>import("../../../pages/Contact/Contact")); 
import ContactSkeleton from "../../../pages/Contact/ContactSkeleton"




const ContactRoutes = ()=>
{
    return(
        <>
            <Routes>
                <Route
                 exact
                 path="/contact"
                 element={
                 <Suspense fallback={<ContactSkeleton></ContactSkeleton>}>
                     {/* <Contact></Contact> */}
                     <Contact></Contact>
                 </Suspense>
                 }
                >

                </Route>
            </Routes>
        </>
    )
}
export default ContactRoutes 