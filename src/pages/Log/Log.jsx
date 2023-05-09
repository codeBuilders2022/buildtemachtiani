import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Button, Input, InputPassword, Select, Shedule } from "../../components";
import Back from "../../components/atoms/Back/Back";

//Styles
import "./Log.scss";
import { ColorValidation, SubmitValidation, UpdateValue, ValidationPassword } from "../../utilities/Validations";
import { CorrectModal, IncorrectModal } from "../../components/molecules/modals/Modals";
import { getAxiosCountrys, postAxiosRegister, userAxiosPost } from "../../Api/Register/Register";

const Log = () => {

  const [inputList, setInputList] = useState({
    names: { value: null, validationType: "empty" },
    lastName: { value: null, validationType: "empty" },
    country: { value: null, validationType: "empty" },
    date: { value: null, validationType: "empty" },
    gender: { value: null, validationType: "empty" },
    user: { value: null, validationType: "empty" },
    email: { value: null, validationType: "email" },
    password: { value: null, validationType: "empty" },
    password_confirm: { value: null, validationType: "empty" },
    orcid: { value: null, validationType: "empty" },
    ocupation: { value: null, validationType: "empty" },
    leveAcademic: { value: null, validationType: "empty" },
  });



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


  const handleSubmit = async () => {
    const validate = SubmitValidation(inputList, setInputList);
    const objetData = { "data": {} };
    const keysToTransform = ["country", "gender", "ocupation", "academic_level"];
    if (validate) {
      for (const [key, { value: data }] of Object.entries(inputList)) {
        objetData.data[key] = keysToTransform.includes(key) ? data.name : data;
      }
      try {
        const saveUser = {
          username: inputList.user.value,
          email: inputList.email.value,
          password: inputList.password.value,
        };
        const response = await userAxiosPost("/api/auth/local/register", saveUser);
        if (response.status === 200) {
          const res = await postAxiosRegister("/api/registers", objetData);
          if (res.status === 200) {
            CorrectModal("Registro correctamente");

          } else {
            IncorrectModal("¡Algo salió mal, intentalo más tarde!", true)
          }
        }
      } catch (error) {
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
    { name: "Masculino", code: "masculino" },
    { name: "Femenino", code: "femenino" },
    { name: "Otros", code: "otro" },
  ];

  const academic = [
    { id: 1, name: "Nivel Superior", code: "nivel superior" }
  ]

  const ocupation = [
    { id: 1, name: "Estudiante", code: "estudiante" },
    { id: 2, name: "Investigador", code: "investigador" },
  ]

  const [data, setData] = useState([]);

  useEffect(() => {
    axiosData();
  }, []);

  const axiosData = async () => {
    try {
      const response = await getAxiosCountrys("/api/countries");
      const data = response.data;
      setData(data);
      const newData = data.map(({ id, attributes: { name } }) => ({
        id,
        name,
      }));

      setData(newData);
    } catch (error) {
      IncorrectModal("¡Algo salió mal, intentalo más tarde!", true)
    }
  };

  return (
    <div className="Log_">
      <div className="inside_log">
        <Back className={"btn_return"} url={"/"} />
        <div className="container">
          <div className="tamanio_cards">
            <h1>Datos personales</h1>
            <div className="inside_card">
              <Input title={"Nombre(s)"} placeholder={"Nombre(s)"} id={"names"} onChange={(e) => UpdateValue(e, "names", inputList, setInputList)} />
              <Input title={"Apellidos"} placeholder={"Apellidos"} id="lastName" onChange={(e) => UpdateValue(e, "lastName", inputList, setInputList)} />
              <div className="cnt_selects">
                <Select title={"País"} placeholder={"País"} value={inputList.country.value} options={data} id={"country"} onChange={(e) => UpdateValue(e, "country", inputList, setInputList)} />
                <Select title={"Género"} placeholder={"Género"} options={gender} value={inputList.gender.value} id={"gender"} onChange={(e) => UpdateValue(e, "gender", inputList, setInputList)} />
              </div>
              <Shedule title={"Fecha de nacimiento"} placeholder={"Fecha de nacimiento"} value={inputList.date.value} id={"date"} onChange={(e) => UpdateValue(e, "date", inputList, setInputList)} />
              <div className="cnt_btn">
                <Button title={"Siguiente"} className={"btn_primary"} onCLick={() => handleStepOne()} />
              </div>
            </div>
            {!steps.step_one && <div className="dark:bg-half-transparent-black layer_blur"></div>}
          </div>
          <div className="tamanio_cards">
            <h1>Cuenta</h1>
            <div className="inside_card">
              <Input title={"Usuario"} placeholder={"Usuario"} id={"user"} onChange={(e) => UpdateValue(e, "user", inputList, setInputList)} />
              <Input title={"Correo electrónico"} placeholder={"Correo electrónico"} id={"email"} onChange={(e) => UpdateValue(e, "email", inputList, setInputList)} />
              <div className="instructions_pass">
                <InputPassword title={"Contraseña"} placeholder={"Contraseña"} id={"password"} onChange={(e) => UpdateValue(e, "password", inputList, setInputList)} />
                <div className="desxr_">Utiliza ocho caracteres como mínimo con una combinación de letras, números y símbolos</div>
              </div>

              <InputPassword title={"Confirmar contraseña"} placeholder={"Confirmar contraseña"} id={"confirm_password"} onChange={(e) => UpdateValue(e, "confirm_password", inputList, setInputList)} />
              <div className="cnt_btn btn_second">
                <Button title={"Regresar"} className={"btn_cancel"} onCLick={() => handleReturnOne()} />
                <Button title={"Siguiente"} className={"btn_primary"} onCLick={() => handleStepTwo()} />
              </div>
            </div>
            {!steps.step_two && <div className="dark:bg-half-transparent-black layer_blur"></div>}
          </div>
          <div className="tamanio_cards three_card">
            <div className="inside_three">
              <h1>Tipo de cuenta</h1>
              <div className="inside_card">
                <div className="cnt-orcid">
                  <Input title={"Orcid ID"} placeholder={"Orcid ID"} id={"orcid"} onChange={(e) => UpdateValue(e, "orcid", inputList, setInputList)} />
                  <label className="orcid_">Solo el <a href="https://orcid.org/" className="ur_l">Registro ORCID</a> puede asignar ORCID iDs. Debes aceptar sus
                    estándares para disponer de ORCID iDs e incluir la URL completa
                    (pe. https://orcid.org/0000-0002-1825-0097).
                  </label>
                </div>
                <Select title={"Ocupación"} placeholder={"Ocupación"} options={ocupation} value={inputList.ocupation.value} id={"ocupation"} onChange={(e) => UpdateValue(e, "ocupation", inputList, setInputList)} />
                <Select title={"Nivel académico"} placeholder={"Nivel académico"} options={academic} value={inputList.academic_level.value} id={"academic_level"} onChange={(e) => UpdateValue(e, "academic_level", inputList, setInputList)} />
              </div>
            </div>
            <div className="cnt_btn th_">
              <Button title={"Regresar"} className={"btn_cancel"} onCLick={() => handleReturnTwo()} />
              <Button title={"Crear cuenta"} className={"btn_primary"} onCLick={() => handleSubmit()} />
            </div>
            {!steps.step_three && <div className="dark:bg-half-transparent-black layer_blur"></div>}
          </div>
        </div>
        <div className="dark:text-white Ihave_Account">
          <NavLink className={"link_account"} to={"/login"}>Ya tengo una cuenta</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Log;
