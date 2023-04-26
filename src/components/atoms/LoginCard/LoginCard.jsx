import React from "react";
import './LoginCard.scss'
import logoIcon from '../../../assets/images/logo_dark.png'
import { Skeleton } from "primereact/skeleton";

const LoginCard = ({ children, title, subTitle, logo, className, skeleton }) => {
    return (
        <>
            {
                !skeleton ?
                    <>
                        <div className={`LoginCard ${className}`}>
                            {
                                logo ?
                                    <>
                                        <div className="logo-container">
                                            <img className="logo" src={logoIcon} alt="" />
                                        </div>
                                    </> :
                                    ""
                            }
                            <div className="title-card">{title}</div>
                            <div className="sub-title-card">{subTitle}</div>
                            {children}
                        </div>
                    </> :
                    <>
                        <div className={`LoginCard ${className}`}>
                            {
                                logo ?
                                    <>
                                        <div className="logo-container">
                                            {/* <img className="logo" src={logoIcon} alt="" /> */}
                                            <Skeleton  width="280px" height="90px"></Skeleton>
                                        </div>
                                    </> :
                                    ""
                            }
                            {/* <div className="title-card">{title}</div> */}
                            <Skeleton className="title-card" height="48px"></Skeleton>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "7px" }}>
                                <Skeleton className="sub-title-card" width="50px" height="22px"></Skeleton>
                            </div>
                            {/* <div className="sub-title-card">{subTitle}</div> */}
                            {children}
                        </div>
                    </>
            }

        </>
    )
}
export default LoginCard