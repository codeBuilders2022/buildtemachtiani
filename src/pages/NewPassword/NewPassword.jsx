import React from "react";
import './NewPassword.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input, InputPassword } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";
import { useEffect } from "react";


const NewPassword = () => {
    const navigate = useNavigate()

    const [inputList, setInputList] = useState({
        password: { value: null, validationType: "email" },
        confirmPassword: { value: null, validationType: "email" },

    })

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList)
            }
        }
    }, [inputList])

    const validationFunction = () => {
        if (SubmitValidation(inputList, setInputList)) {

        }

        if (inputList.password.value == inputList.confirmPassword.value && inputList.password.value) {
            navigate("/")
        }
        else {
            alert("ingrese las contraseñas iguales")
        }

    }
    return (
        <>
            <div className="NewPassword">
                <LoginCard title={"Actualiza tus accesos"} subTitle="Ingresa la nueva contraseña">
                    <div className="inputs-container">
                        <InputPassword title={"Contraseña"} placeholder={"Contraseña"} id="password" onChange={(e) => { UpdateValue(e, "password", inputList, setInputList) }}></InputPassword>
                        <InputPassword title={"Confirmar contraseña"} placeholder={"Confirmar contraseña"} id="confirmPassword" onChange={(e) => { UpdateValue(e, "confirmPassword", inputList, setInputList) }}></InputPassword>
                    </div>
                    <Button className={"btn_primary"} title="Iniciar sesión" onCLick={() => { validationFunction() }}></Button>
                </LoginCard>
            </div>
        </>
    )
}
export default NewPassword