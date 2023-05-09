import React from "react";
import './NewPassword.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input, InputPassword } from "../../components";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ColorValidation, SubmitValidation, UpdateValue, ValidationPassword } from "../../utilities/Validations";
import { useEffect } from "react";
import { IncorrectModal } from "../../components/molecules/modals/Modals";
import { changePassword } from "./api";
import { Decrypt } from "../../Api/login/recover_account";


const NewPassword = ({setAuth}) => {
    const navigate = useNavigate()
    const {id,idUser} = useParams()
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
                
            if( ValidationPassword(inputList.confirmPassword.value))
            {

                changePassword(id,inputList,idUser,navigate)
            }
            else
            {
                IncorrectModal(
                    "La contraseña debe contener al menos un dígito, una letra mayúscula y un carácter especial, y tener al menos 8 caracteres.",
                    true
                  );

            }

            

        }
        else {
            IncorrectModal("Las contraseñas no coinciden",true)
        }

    }

    
    return (
        <>
            <div className="NewPassword">
                <LoginCard title={"Actualiza tus accesos"} subTitle="Ingresa la nueva contraseña" logo>
                    <div className="inputs-container">
                        <InputPassword title={"Contraseña"} placeholder={"Contraseña"} id="password" onChange={(e) => { UpdateValue(e, "password", inputList, setInputList) }}></InputPassword>
                        <InputPassword title={"Confirmar contraseña"} placeholder={"Confirmar contraseña"} id="confirmPassword" onChange={(e) => { UpdateValue(e, "confirmPassword", inputList, setInputList) }}></InputPassword>
                    </div>
                    <Button className={"btn_primary"} title="Iniciar sesión" onClick={() => { validationFunction() }}></Button>
                </LoginCard>
            </div>
        </>
    )
}
export default NewPassword