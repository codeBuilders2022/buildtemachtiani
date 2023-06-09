import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Button, Input, InputPassword, Select, Shedule } from "../../components";
import Back from "../../components/atoms/Back/Back";

//Styles
import "./Log.scss";
import { ColorValidation, SubmitValidation, UpdateValue, ValidationPassword } from "../../utilities/Validations";
import { CorrectModal, IncorrectModal, RegistroModal } from "../../components/molecules/modals/Modals";
import { getAxiosCountrys, postAxiosRegister, userAxiosPost } from "../../Api/Register/Register";
import { Encrypt } from "../../utilities/Hooks";
import AnimationLoading from "../../components/atoms/AnimationLoading/AnimationLoading";
import { Helmet } from "react-helmet";

const Log = () => {

  const [loading, setLoading] = useState(false)
  const [inputList, setInputList] = useState({
    names: { value: null, validationType: "empty" },
    lastName: { value: null, validationType: "empty" },
    country: { value: null, validationType: "empty" },
    birthdate : { value: null, validationType: "empty" },
    gender: { value: null, validationType: "empty" },
    user: { value: null, validationType: "empty" },
    email: { value: null, validationType: "email" },
    password: { value: null, validationType: "empty" },
    confirm_password: { value: null, validationType: "empty" },
    orcid: { value: null, validationType: "empty" },
    ocupation: { value: null, validationType: "empty" },
    institute: {value: null, validationType: "empty"},
    academic_level: { value: null, validationType: "empty" },
  });
  const [contriesOptions, setContriesOptions] = useState(null)

  useEffect(() => {
    for (const propertyName in inputList) {
      if (document.getElementById(propertyName)) {
        ColorValidation(propertyName, inputList);
      }
      if (propertyName === "email") {
        ColorValidation(propertyName, inputList, "email");
      }
    }
  }, [inputList]);


  const [completedRegister, setCompletedRegister] = useState(false)

  const handleSubmit = async () => {
    const type = Encrypt(process.env.REACT_APP_ACCOUNTTYPE)
    const validate = SubmitValidation(inputList, setInputList);
    const objetData = { "data": {} };
    const keysToTransform = ["country", "gender", "ocupation", "academic_level"];
    if (validate) {
      setLoading(true)
      try {
        const saveUser = {
          username: inputList.user.value,
          email: inputList.email.value,
          password: inputList.password.value,
          accounttype: type
        };

        const response = await userAxiosPost("/api/auth/local/register", saveUser);
        objetData.data.userId = response.data.user.id
        for (const [key, { value: data }] of Object.entries(inputList)) {
          objetData.data[key] = keysToTransform.includes(key) ? data : data;
        }
        if (response.status === 200) {
          const res = await postAxiosRegister("/api/registers", objetData);
          if (res.status === 200) {
            RegistroModal("¡Gracias por registrarte!", "Revisa tu correo para confirmar tu cuenta haciendo clic en el enlace de confirmación. ¡Bienvenido/a a nuestra comunidad en línea!");
            setTimeout(() => {
              setCompletedRegister(true)
            }, 5000)
          } else {
            setLoading(false)
            IncorrectModal("¡Algo salió mal, intentalo más tarde!", true)
          }
        }

        if (response.status === 400) {
          setLoading(false)
          IncorrectModal(`Se envio una correo de confimacion a la siguiente direccion: ${inputList.email.value}`)
        }
      } catch (error) {
        setLoading(false)
        IncorrectModal("El correo electrónico o el nombre de usuario ya están en uso", true);
      }
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
    const validate = ValidationPassword(inputList.password.value);
    if (!validate) {
      IncorrectModal(
        "La contraseña debe contener al menos un dígito, una letra mayúscula y un carácter especial, y tener al menos 8 caracteres.",
        true
      );
    } else if (inputList.password.value !== inputList.confirm_password.value) {
      IncorrectModal("Las contraseñas no coinciden", true);
    } else {
      setSteps((prevState) => ({
        ...prevState,
        step_three: true,
        step_two: false,
      }));
    }
  }

  const handleReturnTwo = () => {
    setSteps(prevState => ({
      ...prevState,
      step_three: false,
      step_two: true
    }));
  }

  const gender = [
    { value: "Masculino", code: "masculino" },
    { value: "Femenino", code: "femenino" },
    { value: "Otros", code: "otro" },
  ];

  const academic = [
    { id: 1, value: "Licenciatura ", code: "Licenciatura " },
    { id: 2, value: "Maestría", code: "mastria" },
    { id: 3, value: "Doctorado", code: "doctorado" }, 
  ]

  const ocupation = [
    { id: 2, value: "Investigador(a)", code: "investigador" },
    { id: 2, value: "Estudiante", code: "estudiante" },
  ]

  useEffect(() => {
    axiosCountries();
}, []);


const axiosCountries = async () => {
    try {
        const response = await getAxiosCountrys();         
        setContriesOptions(response);
    } catch (error) {
        IncorrectModal("¡Algo salió mal, intentalo más tarde!", true)
    }
};

  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Revista Temachtiani</title>
      </Helmet>
      <div className="Log_">
        <div className={`inside_log ${completedRegister && "hiddenMenu"}`}>
          <Back className={"btn_return"} url={"/"} />
          <div className="container">
            <div className="tamanio_cards">
              <h1>Datos personales</h1>
              <div className="inside_card">
                <Input title={"Nombre(s)"} placeholder={"Nombre(s)"} id={"names"} onChange={(e) => UpdateValue(e, "names", inputList, setInputList)} />
                <Input title={"Apellidos"} placeholder={"Apellidos"} id="lastName" onChange={(e) => UpdateValue(e, "lastName", inputList, setInputList)} />
                <div className="cnt_selects">
                  <Select title={"País"} placeholder={"País"} value={inputList.country.value} options={contriesOptions} id={"country"} onChange={(e) => UpdateValue(e, "country", inputList, setInputList)} />
                  <Select title={"Género"} placeholder={"Género"} options={gender} value={inputList.gender.value} id={"gender"} onChange={(e) => UpdateValue(e, "gender", inputList, setInputList)} />
                </div>
                <Input type="date" title={"Fecha de nacimiento"} placeholder={"Fecha de nacimiento"} value={inputList.birthdate.value} id={"birthdate"} onChange={(e) => UpdateValue(e, "birthdate", inputList, setInputList)} />
                <div className="cnt_btn">
                  <Button title={"Siguiente"} className={"btn_primary"} onClick={() => handleStepOne()} />
                </div>
              </div>
              {!steps.step_one && <div className="dark:bg-half-transparent-black bg-half-transparent-white layer_blur"></div>}
            </div>
            <div className="tamanio_cards">
              <h1>Cuenta</h1>
              <div className="inside_card">
                <Input title={"Usuario"} placeholder={"Usuario"} id={"user"} onChange={(e) => UpdateValue(e, "user", inputList, setInputList)} />
                <Input title={"Correo electrónico"} placeholder={"Correo electrónico"} id={"email"} onChange={(e) => UpdateValue(e, "email", inputList, setInputList)} />
                <div className="instructions_pass">
                  <InputPassword title={"Contraseña"} placeholder={"Contraseña"} id={"password"} onChange={(e) => UpdateValue(e, "password", inputList, setInputList)} />
                  <div className="desxr_">Utiliza ocho caracteres como mínimo con una combinación de una letra, un número y un símbolo</div>
                </div>
                <InputPassword title={"Confirmar contraseña"} placeholder={"Confirmar contraseña"} id={"confirm_password"} onChange={(e) => UpdateValue(e, "confirm_password", inputList, setInputList)} />
                <div className="cnt_btn btn_second">
                  <Button title={"Regresar"} className={"btn_cancel"} onClick={() => handleReturnOne()} />
                  <Button title={"Siguiente"} className={"btn_primary"} onClick={() => handleStepTwo()} />
                </div>
              </div>

              {!steps.step_two && <div className="dark:bg-half-transparent-black bg-half-transparent-white layer_blur"></div>}
          
          </div>
            <div className="tamanio_cards three_card">
              <div className="inside_three">
                <h1>Tipo de cuenta</h1>
                <div className="inside_card inside_card_three">
                  <div className="cnt-orcid">
                    <Input title={"Orcid ID"} placeholder={"Orcid ID"} id={"orcid"} onChange={(e) => UpdateValue(e, "orcid", inputList, setInputList)} />
                    <label className="orcid_">Solo el <a href="https://orcid.org/" style={{color: "blue"}} target="_blank" rel="noreferrer">Registro ORCID</a> puede asignar ORCID iDs. Debes aceptar sus
                      estándares para disponer de ORCID iDs e incluir la URL completa
                      (pe. https://orcid.org/0000-0002-1825-0097).
                    </label>
                  </div>
                  <Input title={"Instituto"} placeholder={"Instituto" } id={"institute"} onChange={(e) => UpdateValue(e, "institute", inputList, setInputList)}/>
                  <Select title={"Ocupación"} placeholder={"Ocupación"} options={ocupation} value={inputList.ocupation.value} id={"ocupation"} onChange={(e) => UpdateValue(e, "ocupation", inputList, setInputList)} />
                  <Select title={"Nivel académico"} placeholder={"Nivel académico"} options={academic} value={inputList.academic_level.value} id={"academic_level"} onChange={(e) => UpdateValue(e, "academic_level", inputList, setInputList)} />
                </div>
              </div>
              <div className="cnt_btn th_">
                {loading ? (
                  <AnimationLoading />
                ):(
                  <>
                    <Button title={"Regresar"} className={"btn_cancel"} onClick={() => handleReturnTwo()} />
                    <Button title={"Crear cuenta"} className={"btn_primary"} onClick={() => handleSubmit()} />
                  </>
                )}
              </div>
              {!steps.step_three && <div className="dark:bg-half-transparent-black bg-half-transparent-white layer_blur"></div>}
            </div>
          </div>
          <div className="dark:text-white Ihave_Account">
            <NavLink className={"link_account"} to={"/login"}>Ya tengo una cuenta</NavLink>
          </div>
        </div>
        <div className={`hiddenDiv dark:text-white ${completedRegister && "completedRegister"}`}>
              <label htmlFor="">¡Registro Completo!</label>
            Revisa tu bandeja de correo electrónico:{" "} <b>{inputList.email.value}</b>
        </div>
      </div>
    </>
  );
};

export default Log;
