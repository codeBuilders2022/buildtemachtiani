import React, { useEffect, useState } from "react";
import './Login.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input, InputPassword } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";
import { useStateContext } from "../../contexts/ContextProvider";
import Back from "../../components/atoms/Back/Back";
import { loginConfir } from "../../Api/login/apiLogic";
import { Encrypt } from "../../utilities/Hooks";
import AnimationLoading from "../../components/atoms/AnimationLoading/AnimationLoading";
import { CorrectModal, IncorrectModal, InfoModal } from "../../components/molecules/modals/Modals";


const Login = () => {
const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
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

    const validationFunction = async () => {
        if (!SubmitValidation(inputList, setInputList)) {
          return;
        }
      
        setLoading(true);
        const data = {
          identifier: inputList.identifier.value,
          password: inputList.password.value
        };
      
        try {
          const resp = await loginConfir(data, navigate);
          if (resp.status === 200) {
            CorrectModal("Credenciales correctas");
            setTimeout(() => {
              window.location.replace(`/user/dashboard/${resp.dtasEncrypt}`);
            }, 3500);
          } else if (resp.response.data.error.name === "ApplicationError") {
            
            InfoModal(
              "Para iniciar sesión, necesitamos que confirmes tu cuenta.",
              " Por favor, sigue las instrucciones en tu correo electrónico para completar el proceso de autenticación. Si necesitas ayuda, contáctanos. ¡Gracias!"
            );
            setLoading(false)
          } else if (resp.response.data.error.name === "ValidationError") {
            IncorrectModal("Credenciales incorrectas");
            setLoading(false)
          }
        } catch (error) {
            console.log(error)
          // Manejar cualquier error de la llamada a loginConfir
        }
      };
      

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
                    {loading ? (
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <AnimationLoading />
                        </div>
                    ):(     
                        <Button className={"btn_primary"} title="Iniciar sesión" onClick={()=>{validationFunction()}}></Button>
                    )}
                    <NavLink to={"/log"}>
                        <div className="register">Aun no tengo una cuenta</div>
                    </NavLink>
                </LoginCard>
            </div>
        </>
    )
}
export default Login