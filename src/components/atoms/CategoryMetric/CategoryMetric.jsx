import React from "react";
import './CategoryMetric.scss'


const CategoryMetric = ({title,metric,id})=>
{
    return(
        <>
            <div className="CategoryMetric" id={id}>
                <div className="title-category">{title}</div>
                <div className="number-metric">{metric}</div>
            </div>
        </>
    )
}
export default CategoryMetric