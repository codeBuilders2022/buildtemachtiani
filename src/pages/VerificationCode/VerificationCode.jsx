import React from "react";
import './VerificationCode.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input } from "../../components";
import VerificationCodeInput from "../../components/atoms/VerificationCodeInput/VerificationCodeInput";


const VerificationCode = () => {
    return (
        <>
            <div className="VerificationCode">
                <LoginCard className={"inside_verificationCode"} logo title={"Código de recuperación"} subTitle={"Ingresa el código enviado"}>
                    <div className="inputContainer">
                        <VerificationCodeInput></VerificationCodeInput>
                    </div>
                </LoginCard>
            </div>
        </>
    )
}
export default VerificationCode