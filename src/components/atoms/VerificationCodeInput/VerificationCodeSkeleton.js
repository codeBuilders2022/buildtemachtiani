import React, { useState } from "react";
import './VerificationCodeSkeleton.scss';
import logo from '../../../img/register/logo.png';
import ReactCodeInput from 'react-verification-code-input';
import Button from "../../../globalComponents/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const VerificationCodeSkeleton = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState();
    const [isCliked, setIsCliked] = useState();

    return (
        <>
            <div className="cj-verification-code-skeleton">
                <div className="cj-register">
                    <div className="background">
                        <div className="logo-box">
                            <Skeleton shape="circle" className="logo" width="127px" height="127px"></Skeleton>

                        </div>
                        <div className="body-register">
                            <div className="title-container">
                                <div className="title">
                                    <Skeleton width="150px" height="20px"></Skeleton>
                                </div>
                                <div className="sub-title" style={{ paddingTop: "5px" }}>
                                    <Skeleton width="200px" height="10px"></Skeleton>
                                </div>

                            </div>
                            {isCliked ? <>

                                {
                                    code === "12345" ?

                                       <></>
                                        :
                                        <>
                                            <div className="code-box-red">
                                                <div className="code-border-red">

                                                </div>
                                            </div>
                                        </>

                                }


                            </> :
                                <>
                                    <div className="code-box">
                                        <div className="code-border">
                                            <Skeleton width="330px" height="100px"></Skeleton>
                                        </div>
                                    </div>

                                </>}








                            <div className="buttons-box">
                                <div className="button1" onClick={() => navigate("/")}>
                                    <Skeleton width="150px" height="40px"></Skeleton>

                                </div>
                                <div onClick={() => setIsCliked(1)}>

                                    <Skeleton width="150px" height="40px"></Skeleton>


                                </div>

                            </div>
                            <div className="bottom-link">
                                <Skeleton width="100px" height="10px"></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default VerificationCodeSkeleton;
