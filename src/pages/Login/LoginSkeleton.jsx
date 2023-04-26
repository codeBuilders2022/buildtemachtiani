import React, { useEffect, useState } from "react";
import './Login.scss'
import LoginCard from "../../components/atoms/LoginCard/LoginCard";
import { Button, Input, InputPassword } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";
import Back from "../../components/atoms/Back/Back";
import { Skeleton } from "primereact/skeleton";


const LoginSkeleton = () => {
    return (
        <>
            <div className="Login">
                <Back skeleton className={"back"}></Back>
                <LoginCard skeleton title={"Inicio de sesión"} subTitle="Ingresar aquí">
                    <div className="inputs-container">
                        <Input skeleton></Input>
                        <InputPassword skeleton></InputPassword>
                    </div>
                    <NavLink to={"/recover-account"}>
                        <div className="rememberPassword" style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Skeleton width="150px" height="16px"></Skeleton>
                        </div>
                    </NavLink>
                    <Button skeleton className={"btn_primary"} title="Iniciar sesión" onCLick={() => { validationFunction() }}></Button>
                    {/* <NavLink to={"/log"}>
                    </NavLink> */}
                    <div style={{ display: "flex", justifyContent: "center",width:"100%",marginTop:"10px" }}>
                        <Skeleton width="150px" height="16px"></Skeleton>
                    </div>
                </LoginCard>
            </div>
        </>
    )
}
export default LoginSkeleton