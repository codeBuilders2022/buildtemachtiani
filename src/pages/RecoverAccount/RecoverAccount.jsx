import React from "react";
import './RecoverAccount.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";
import { useEffect } from "react";

const RecoverAccount = () => {
    const navigate = useNavigate()

    const [inputList,setInputList] = useState({
        email:{value:null, validationType:"email"},
        
    })

    useEffect(()=>
    {
        for(const propertyName in inputList)
        {
            if(document.getElementById(propertyName))
            {
                ColorValidation(propertyName,inputList,"email")
            }
        }
    },[inputList])

    const validationFunction =()=>
    {
        if(SubmitValidation(inputList,setInputList))
        {
            navigate("/verification-code")
        }
    }
    return (
        <>
            <div className="RecoverAccount">
                <LoginCard logo title={"Recuperar cuenta"} subTitle={"Actualiza tus accesos"}>
                    <div className="inputContainer">
                        <Input title={"Correo electrónico"} placeholder={"Correo electrónico"} id="email" onChange={(e)=>{UpdateValue(e,"email",inputList,setInputList)}}></Input>
                    </div>
                    <div className="buttonContainer">
                        <Button className={"btn_cancel"} title={"Cancelar"} onClick={()=>{navigate("/login")}}></Button>
                        <Button className={"btn_primary"} title={"Enviar código"} onClick={()=>{validationFunction()}}></Button>
                    </div>
                </LoginCard>
            </div>
        </>
    )
}
export default RecoverAccount