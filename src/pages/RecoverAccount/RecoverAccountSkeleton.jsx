import React from "react";
import './RecoverAccount.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";
import { useEffect } from "react";

const RecoverAccountSkeleton = () => {
    return (
        <>
            <div className="RecoverAccount">
                <LoginCard skeleton logo>
                    <div className="inputContainer">
                        <Input skeleton></Input>
                    </div>
                    <div className="buttonContainer">
                        <Button skeleton className={"btn_cancel"} title={"Cancelar"} onClick={()=>{navigate("/login")}}></Button>
                        <Button skeleton className={"btn_primary"} title={"Enviar código"} onClick={()=>{validationFunction()}}></Button>
                    </div>
                </LoginCard>
            </div>
        </>
    )
}
export default RecoverAccountSkeleton