import React from "react";
import './CategoryMetric.scss'


const CategoryMetric = ({title,metric,id, style})=>
{
    return(
        <>
            <div className="CategoryMetric" id={id} style={style}>
                <div className="title-category">{title}</div>
                <div className="number-metric">{metric}</div>
            </div>
        </>
    )
}
export default CategoryMetric