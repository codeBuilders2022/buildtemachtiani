import React from "react";
import "./Articles.scss";
import { Skeleton } from "primereact/skeleton";

const ArticlesSkeleton = () => {
  return (
    <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex">
      {/* <Grid> */}
        <div style={{width: "100%"}}>
          <div className="flex items-center w-full">
            <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 8, marginBottom: 40}}>
                <Skeleton width="80%" height="40px"/>
                <Skeleton width="200px" height="25px"/>
            </div>
          </div>
          <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl mb-10 Articles_">
            <div className="secct1_s">
              <Skeleton width="200px" height="30px"/>
              <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 8}}>
                {[...Array(20)].map((_, idx) => (
                    <Skeleton width="100%" height="15px" key={idx}/>
                ))}
              </div>
              <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 8}}>
                {[...Array(15)].map((_, idx) => (
                    <Skeleton width="100%" height="15px" key={idx}/>
                ))}
              </div>
              <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 8}}>
                {[...Array(15)].map((_, idx) => (
                    <Skeleton width="100%" height="15px" key={idx}/>
                ))}
              </div>
              <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 8}}>
                {[...Array(15)].map((_, idx) => (
                    <Skeleton width="100%" height="15px" key={idx}/>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ArticlesSkeleton;
