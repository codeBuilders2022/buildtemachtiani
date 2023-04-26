import React from "react";
import './ExteriorCard.scss'
const ExteriorCard =({children,className})=>
{
    return(
        <>
            <div className={`dark:bg-gray-600 bg-white dark:text-white ExteriorCard ${className}`}>
                {children}
            </div>
        </>
    )
}
export default ExteriorCard