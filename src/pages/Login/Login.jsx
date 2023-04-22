import React, { useEffect, useState } from "react";
import './Login.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input, InputPassword } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utiles/Validations";


const Login = () => {
const navigate = useNavigate()

    const [inputList,setInputList] = useState({
        user:{value:null, validationType:"empty"},
        password:{value:null, validationType:"empty"},
    })

    useEffect(()=>
    {
        for(const propertyName in inputList)
        {
            if(document.getElementById(propertyName))
            {
                ColorValidation(propertyName,inputList)
            }
        }
    },[inputList])

    const validationFunction =()=>
    {
        if(SubmitValidation(inputList,setInputList))
        {
            // ----------------------------------------------------------------------------poner ruta de auth cuado ya este
            alert("acaba de iniciar sesión")
            navigate("/#")
        }
    }
    return (
        <>
            <div className="Login">
                <LoginCard title={"Inicio de sesión"} subTitle="Ingresar aquí">
                    <div className="inputs-container">
                        <Input title="Usuario" placeholder={"Usuario"} id="user" onChange={(e)=>{UpdateValue(e,"user",inputList,setInputList)}}></Input>
                        <InputPassword title={"Contraseña"} placeholder={"Contraseña"} id="password" onChange={(e)=>{UpdateValue(e,"password",inputList,setInputList)}}></InputPassword>
                    </div>
                    <NavLink to={"/recover-account"}>
                        <div className="rememberPassword">Olvidé mi contraseña</div>
                    </NavLink>
                    <Button className={"btn_primary"} title="Iniciar sesión" onCLick={()=>{validationFunction()}}></Button>
                    <NavLink to={"/log"}>
                        <div className="register">Aun no tengo una cuenta</div>
                    </NavLink>
                </LoginCard>
            </div>
        </>
    )
}
export default Login