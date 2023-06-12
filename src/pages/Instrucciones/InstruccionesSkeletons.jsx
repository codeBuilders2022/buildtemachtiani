import React from "react";
import Grid from "../../components/atoms/Grid/Grid";
import { Skeleton } from "primereact/skeleton";

const InstruccionesSkeletons = () => {
  return (
    <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex">
      <Grid>
        <div>
        <div style={{display: "flex", flexDirection: "column", marginBottom: 30, gap: 20}}>
            <Skeleton width="80%" height="20px"/>
            <Skeleton width="40%" height="20px"/>
        </div>
        <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl mb-10">
          <Skeleton width="70%" height="30px"/>
          <div style={{display: "flex", flexDirection: "column", gap: 10, marginTop: 15, marginBottom: 15}}>
            {[...Array(5)].map((_, idx) => (
                <Skeleton key={idx} width="100%" height="15px"/>
            ))}
          </div>
          <div className="flex justify-center items-center pb-10">
            <div className="md:w-4/5 text-black">
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div style={{width: "80%", height: 200, border: 1, borderStyle: "solid", borderColor: "#B5B2B2", marginBottom: 5}}>
                        {[...Array(5)].map((_, idx) => (
                            <div key={idx} style={{width: "100%", height: 35, display: "flex", padding: "0 30px", alignItems: "center", justifyContent: "space-between", borderBottom: 1, borderStyle: "solid", borderColor: "#B5B2B2"}}>
                                {[...Array(4)].map((_, idx) => (
                                    <Skeleton key={idx} width="45px" height="15px"/>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <Skeleton width="60%" height="15px"/>
            </div>
          </div>
        </div>
        <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl opacity-90 mb-8">
            <Skeleton width="70%" height="30px"/>
            <div style={{display: "flex", flexDirection: "column", gap: 10, marginTop: 15, marginBottom: 15}}>
                {[...Array(15)].map((_, idx) => (
                    <Skeleton key={idx} width="100%" height="15px"/>
                ))}
            </div>
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

export default InstruccionesSkeletons;
