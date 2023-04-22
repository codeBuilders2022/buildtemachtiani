import React from "react";
import "./Log.scss";
import { Skeleton } from "primereact/skeleton";

const LogSkeleton = () => {

  return (
    <div className="Log_">
      <div className="inside_log">
        <div className="container">
            <div className="tamanio_cards">
                <Skeleton width="250px" height="40px"/>
                <div className="inside_card">
                    <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    <div className="cnt_selects">
                    <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    <div className="cnt_btn">
                        <Skeleton width="172px" height="45px"/>
                    </div>
                </div>
            </div>
            <div className="tamanio_cards">
            <Skeleton width="150px" height="40px"/>
                <div className="inside_card">
                <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                        <Skeleton width="80px" height="10px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                    <div className="cnt_btn btn_second">
                        <Skeleton width="100%" height="45px"/>
                        <Skeleton width="100%" height="45px"/>
                    </div>
                </div>
            </div>
            <div className="tamanio_cards three_card">
                <div className="inside_three">
                    <Skeleton width="300px" height="40px"/>
                    <div className="inside_card">
                        <div className="cnt-orcid" style={{marginTop: 50}}>
                            <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                                <Skeleton width="80px" height="10px"/>
                                <Skeleton width="100%" height="45px"/>
                            </div>
                            <div style={{paddingLeft: 12, display: "flex", flexDirection: "column", gap: 4}}>
                                {[...Array(3)].map((_, idx) => (
                                    <Skeleton width="100%" height="8px" key={idx}/>
                                ))}
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                            <Skeleton width="80px" height="10px"/>
                            <Skeleton width="100%" height="45px"/>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                            <Skeleton width="80px" height="10px"/>
                            <Skeleton width="100%" height="45px"/>
                        </div>
                    </div>
                </div>
                <div className="cnt_btn th_">
                    <Skeleton width="100%" height="45px"/>
                    <Skeleton width="100%" height="45px"/>
                </div>
            </div>
        </div>
        <div className="dark:text-white Ihave_Account">
            <Skeleton width="200px" height="15px"/>
        </div>
      </div>
    </div>
  );
};

export default LogSkeleton;
