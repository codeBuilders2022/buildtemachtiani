import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import { Skeleton } from "primereact/skeleton";

const AboutSkeletons = () => {

  return (
    <div className="dark:bg-gray-600 dark:text-white md:mt-32 m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Grid>
      <div className="w-full">
        <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 10, marginBottom: 40}}>
            <Skeleton width="20%" height="15px"/>
            <Skeleton width="100%" height="15px"/>
        </div>
        <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 10}}>
            {[...Array(20)].map((_, idx) => (
                <Skeleton width="100%" height="15px"/>
            ))}
        </div>
      </div>
      {/* Sidebar */}
      <div style={{width: "100%"}}>
            <Skeleton width="80%" height="20px"/>
            <div style={{padding: "20px 5px", borderTop: 3, borderStyle: "solid", borderColor: "#B5B2B2", marginTop: 20, display: "flex", flexDirection: "column", gap: 10}}>
                {[...Array(4)].map((_, idx) => (
                    <Skeleton key={idx} width="70%" height="20px"/>
                ))}
            </div>
            <div style={{width: "100%", padding: "10px", display: "flex", justifyContent: "center", border: 1, borderStyle: "solid", borderColor: "#B5B2B2"}}>
                <Skeleton width="80%" height="15px"/>
            </div>
            <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 10, marginTop: 30}}>
                <Skeleton width="70%" height="20px"/>
                <div style={{width: "100%", height: 200, border: 1, borderStyle: "solid", borderColor: "#B5B2B2"}}></div>
            </div>
        </div>
      </Grid>
    </div>
  );
};

export default AboutSkeletons;
