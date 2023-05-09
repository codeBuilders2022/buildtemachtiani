import React from "react";
import './VerificationCode.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import CryptoJS from "crypto-js";
import VerificationCodeInput from "../../components/atoms/VerificationCodeInput/VerificationCodeInput";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Decrypt } from "../../Api/login/recover_account";
const key = process.env.REACT_APP_SECRET_KEY;

const VerificationCode = () => {
    const {code,id,idUser} = useParams()
//decriopt code
    let encriptData = code;
    encriptData = encriptData.replace(/_/g, "/")
    encriptData = Decrypt(encriptData)

    const [codedecript,setCodedecript] = useState(encriptData)

    

    return (
        <>
            <div className="VerificationCode">
                <LoginCard className={"inside_verificationCode"} logo title={"Código de recuperación"} subTitle={"Ingresa el código enviado"}>
                    <div className="inputContainer">
                        <VerificationCodeInput codeApi={codedecript} idencript={id} idUser={idUser}></VerificationCodeInput>
                    </div>
                </LoginCard>
            </div>
        </>
    )
}
export default VerificationCode