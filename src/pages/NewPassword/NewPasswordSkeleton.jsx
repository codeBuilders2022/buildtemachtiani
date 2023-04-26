import React from "react";
import './NewPassword.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input, InputPassword } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";
import { useEffect } from "react";


const NewPasswordSkeleton = () => {
    
    return (
        <>
            <div className="NewPassword">
                <LoginCard skeleton logo>
                    <div className="inputs-container">
                        <InputPassword skeleton></InputPassword>
                        <InputPassword skeleton></InputPassword>
                    </div>
                    <Button skeleton></Button>
                </LoginCard>
            </div>
        </>
    )
}
export default NewPasswordSkeleton