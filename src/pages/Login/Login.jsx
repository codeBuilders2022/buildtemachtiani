import React, { useEffect, useState } from "react";
import './Login.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input, InputPassword } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";
import Back from "../../components/atoms/Back/Back";
import { loginConfir } from "../../Api/login/apiLogic";


const Login = () => {
const navigate = useNavigate()

    const [inputList,setInputList] = useState({
        "identifier":{value:null, validationType:"empty"},
        "password":{value:null, validationType:"empty"},
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

            const data = {
                "identifier":inputList.identifier.value,
                "password":inputList.password.value
            }
            let res;
            loginConfir(data,navigate)
           
        }
    }
    return (
        <>
            <div className="Login">
                <Back className={"back"} url={"/"}></Back>
                <LoginCard title={"Inicio de sesión"} subTitle="Ingresar aquí">
                    <div className="inputs-container">
                        <Input title="Usuario" placeholder={"Usuario"} id="identifier" onChange={(e)=>{UpdateValue(e,"identifier",inputList,setInputList)}}></Input>
                        <InputPassword title={"Contraseña"} placeholder={"Contraseña"} id="password" onChange={(e)=>{UpdateValue(e,"password",inputList,setInputList)}}></InputPassword>
                    </div>
                    <NavLink to={"/recover-account"}>
                        <div className="rememberPassword">Olvidé mi contraseña</div>
                    </NavLink>
                    <Button className={"btn_primary"} title="Iniciar sesión" onClick={()=>{validationFunction()}}></Button>
                    <NavLink to={"/log"}>
                        <div className="register">Aun no tengo una cuenta</div>
                    </NavLink>
                </LoginCard>
            </div>
        </>
    )
}
export default Login