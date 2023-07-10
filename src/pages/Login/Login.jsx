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
import { getAxiosData } from "../../Api/Committee/Committee";
import { Helmet } from "react-helmet";


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

    const validationFunction = async (e) => {
        e.preventDefault();
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
            const id = resp.id
            const myDtas = await getAxiosData(`/api/users/${id}?populate=register`)
            const register = myDtas.register;
            const arrayDtas = {
              name: register.names + " " + register.lastName,
              email: register.email,
              letter: register.names.charAt(0)
            }
            CorrectModal("Credenciales correctas");
            localStorage.setItem("userDatasW", JSON.stringify(arrayDtas))
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
        }
      };
      

    return (
        <>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Revista Temachtiani</title>
          </Helmet>
            <div className="Login">
                <Back className={"back"} url={"/"}></Back>
                <form onSubmit={validationFunction} className="form_class">
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
                            <Button type={"submit"} className={"btn_primary"} title="Iniciar sesión"></Button>
                        )}
                        <NavLink to={"/log"}>
                            <div className="register">Aun no tengo una cuenta</div>
                        </NavLink>
                    </LoginCard>
                </form>
            </div>
        </>
    )
}
export default Login