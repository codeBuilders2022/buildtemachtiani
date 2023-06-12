import React, { useRef } from "react";

import "./MagazinePolicies.scss";
import Cards from "../../components/atoms/Cards/Cards";
import Grid from "../../components/atoms/Grid/Grid";
import { Skeleton } from "primereact/skeleton";

const MagazinePoliciesSkeleton = () => {
  return (
    <div className="dark:bg-gray-600 dark:text-white MagazinePolicies">
      <Grid>
        <div>
            <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 10, marginBottom: 30}}>
                <Skeleton width="20%" height="20px"/>
                <Skeleton width="30%" height="20px"/>
            </div>
          <Cards className={"inside_magazine"}>
            <div className="sesion_opt" style={{display: "flex", flexDirection: "column", gap: 10}}>
              {[...Array(9)].map((_, idx) => (
                <Skeleton key={idx} width="40%" height="15px"/>
              ))}
            </div>
            <div className="secct1_" id="1">
              <Skeleton width="40%" height="25px"/>
              <div style={{display: "flex", flexDirection: "column", gap: 10}}>
                {[...Array(35)].map((_, idx) => (
                    <Skeleton width="100%" height="15px"/>
                ))}
              </div>
            </div>
          </Cards>
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

export default MagazinePoliciesSkeleton;
