import React from "react";
import Banner from "../../assets/images/banner.png";
import { MisionVision } from "../../data/dummy";
import Grid from "../../components/atoms/Grid/Grid";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";
import { Skeleton } from "primereact/skeleton";

const MisionSkeleton = () => {
  return (
      <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 p-2 md:p-10 bg-white rounded-3xl">
        <Grid>
            <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 20}}>
                <Skeleton width="30%" height="20px"/>
                <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 10}}>
                    {[...Array(20)].map((_, idx) => (
                        <Skeleton key={idx} width="100%" height="15px"/>
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

export default MisionSkeleton;
