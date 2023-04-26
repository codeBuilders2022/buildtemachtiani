import React from "react";
import './VerificationCode.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input } from "../../components";
import VerificationCodeInput from "../../components/atoms/VerificationCodeInput/VerificationCodeInput";
import { Skeleton } from "primereact/skeleton";


const VerificationCodeSkeleton = () => {
    return (
        <>
            <div className="VerificationCode">
                <LoginCard skeleton logo>
                    <div className="inputContainer">
                        <VerificationCodeInput skeleton></VerificationCodeInput>
                    </div>
                </LoginCard>
            </div>
        </>
    )
}
export default VerificationCodeSkeleton