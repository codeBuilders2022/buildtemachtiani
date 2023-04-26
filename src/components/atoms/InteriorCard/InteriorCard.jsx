import React from "react";
import './InteriorCard.scss'
const InteriorCard =({children,className})=>
{
    return(
        <>
            <div className={`InteriorCard bg-slate-100 dark:bg-gray-500 ${className}`}>
                {children}
            </div>
        </>
    )
}
export default InteriorCard