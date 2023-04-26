import React from "react";

import "./LineTime.scss";
import { Skeleton } from "primereact/skeleton";

const LineTimeSkeleton = () => {
  return (
    <div className="dark:bg-gray-600 bg-white dark:text-white LineTime">
      <div style={{marginBottom: 30}}>
        <Skeleton width="300px" height="30px"/>
      </div>
      <div className="cnt_steps bg-slate-100 dark:bg-gray-500">
        <div style={{width: "100%", display: "flex", position: "relative", justifyContent: "space-between", paddingLeft: 60, paddingRight: 60}}>
            {[...Array(5)].map((_, idx) => (
              <Skeleton shape="circle" width="106px" height="106px"/>
            ))}
            <div style={{width: "100%", position: "absolute", left: 0, top: "50%",}}>
              <Skeleton width="100%" height="10px"/>
            </div>
        </div>
      </div>
      <div className="description_s">
        <Skeleton width="80%" height="30px"/>
        <div className="block_descrip">
          <Skeleton width="150px" height="20px"/>
          <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 10}}>
            {[...Array(15)].map((_, idx) => (
              <Skeleton width="100%" height="15px" key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineTimeSkeleton;
