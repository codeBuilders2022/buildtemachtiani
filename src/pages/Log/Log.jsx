import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Button, Input, InputPassword, Select, Shedule } from "../../components";
import Back from "../../components/atoms/Back/Back";

//Styles
import "./Log.scss";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";

const Log = () => {

    const [date, setDate] = useState(null);
    const [level, setLevel] = useState(null)
    const [ocupat, setOcupat] = useState(null)
    const [genderOption, setGenderOption] = useState(null)
    const [country, setCountry] = useState(null)

    const [inputList, setInputList] = useState({
        names: { value: null, validationType: "empty" },
        // lastName: { value: null, validationType: "empty" },
        // country: { value: null, validationType: "empty" },
        // date: { value: null, validationType: "empty" },
        // gender: { value: null, validationType: "empty" },
        // user: { value: null, validationType: "empty" },
        // email: { value: null, validationType: "email" },
        // password: { value: null, validationType: "empty" },
        // password_confirm: { value: null, validationType: "empty" },
        // orcid: { value: null, validationType: "empty" },
        // ocupation: { value: null, validationType: "empty" },
        // leveAcademic: { value: null, validationType: "empty" },
    });

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
            // if (propertyName === "email") {
            //     ColorValidation(propertyName, inputList, "email");
            // }
        }
    }, [inputList]);

      const handleSubmit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            alert("Todo salio correctamente")
        }
      }
      

    const [steps, setSteps] = useState({
        step_one: true,
        step_two: false,
        step_three: false
    })

    const handleStepOne = () => {
        setSteps(prevState => ({
            ...prevState,
            step_one: false,
            step_two: true
          }));
    }

    const handleReturnOne = () => {
        setSteps(prevState => ({
            ...prevState,
            step_one: true,
            step_two: false
          }));
    }

    const handleStepTwo = () => {
        setSteps(prevState => ({
            ...prevState,
            step_three: true,
            step_two: false
          }));
    }

    const handleReturnTwo = () => {
        setSteps(prevState => ({
            ...prevState,
            step_three: false,
            step_two: true
          }));
    }

    const gender = [
        { name: "Masculino", code: "masculino" },
        { name: "Femenino", code: "femenino" },
        { name: "Otros", code: "otro" },
    ];

    const academic = [
        {id: 1, name: "Nivel Superior", code: "nivel superior"}
    ]

    const ocupation = [
        {id: 1, name: "Estudiante", code: "estudiante"},
        {id: 2, name: "Investigador", code: "investigador"},
    ]

  return (
    <div className="Log_">
      <div className="inside_log">
        <Back className={"btn_return"} url={"/"} />
        <div className="container">
            <div className="tamanio_cards">
                <h1>Datos personales</h1>
                <div className="inside_card">
                    <Input title={"Nombre(s)"} placeholder={"Nombre(s)"} id={"names"} onChange={(e) => UpdateValue(e, "names", inputList, setInputList)}/>
                    <Input title={"Apellidos"} placeholder={"Apellidos"}/>
                    <div className="cnt_selects">
                        <Select title={"País"} placeholder={"País"} value={country} setValue={setCountry}/>
                        <Select title={"Género"} placeholder={"Género"} options={gender} value={genderOption} setValue={setGenderOption}/>
                    </div>
                    <Shedule title={"Fecha de nacimiento"} placeholder={"Fecha de nacimiento"} value={date} setValue={setDate}/>
                    <div className="cnt_btn">
                        <Button title={"Siguiente"} className={"btn_primary"} onCLick={() => handleStepOne()}/>
                    </div>
                </div>
                { !steps.step_one && <div className="dark:bg-half-transparent-black layer_blur"></div> }
            </div>
            <div className="tamanio_cards">
                <h1>Cuenta</h1>
                <div className="inside_card">
                    <Input title={"Usuario"} placeholder={"Usuario"}/>
                    <Input title={"Correo electrónico"} placeholder={"Correo electrónico"}/>
                    <InputPassword title={"Contraseña"}/>
                    <InputPassword title={"Confirmar contraseña"}/>
                    <div className="cnt_btn btn_second">
                        <Button title={"Regresar"} className={"btn_cancel"} onCLick={() => handleReturnOne()}/>
                        <Button title={"Siguiente"} className={"btn_primary"} onCLick={() => handleStepTwo()}/>
                    </div>
                </div>
                { !steps.step_two && <div className="dark:bg-half-transparent-black layer_blur"></div> }
            </div>
            <div className="tamanio_cards three_card">
                <div className="inside_three">
                    <h1>Tipo de cuenta</h1>
                    <div className="inside_card">
                        <div className="cnt-orcid">
                            <Input title={"Orcid ID"} placeholder={"Orcid ID"}/>
                            <label className="orcid_">Solo el <a href="https://orcid.org/" className="ur_l">Registro ORCID</a> puede asignar ORCID iDs. Debes aceptar sus 
                                    estándares para disponer de ORCID iDs e incluir la URL completa 
                                    (pe. https://orcid.org/0000-0002-1825-0097).
                            </label>
                        </div>
                        <Select title={"Ocupación"} placeholder={"Ocupación"} options={ocupation} value={ocupat} setValue={setOcupat}/>
                        <Select title={"Nivel académico"} placeholder={"Nivel académico"} options={academic} value={level} setValue={setLevel}/>
                    </div>
                </div>
                <div className="cnt_btn th_">
                    <Button title={"Regresar"} className={"btn_cancel"} onCLick={() => handleReturnTwo()}/>
                    <Button title={"Crear cuenta"} className={"btn_primary"} onCLick={() => handleSubmit()}/>
                </div>
                { !steps.step_three && <div className="dark:bg-half-transparent-black layer_blur"></div> }
            </div>
        </div>
        <div className="dark:text-white Ihave_Account">
            <NavLink className={"link_account"}>Ya tengo una cuenta</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Log;
