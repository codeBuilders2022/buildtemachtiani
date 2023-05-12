import React, { useEffect, useState } from "react";
import './CreateArticle.scss'
import ExteriorCard from "../../components/atoms/ExteriorCard/ExteriorCard";
import Back from "../../components/atoms/Back/Back";
import { Button, Header, Input, Select } from "../../components";
import InteriorCard from "../../components/atoms/InteriorCard/InteriorCard";
import UploadWord from "../../components/molecules/UploadWord/UploadWord";
import { ColorValidation, SubmitValidation, SubmitValidationStaking, UpdateValue, UpdateValueStaking } from "../../utilities/Validations";
import { CorrectModal, IncorrectModal } from "../../components/molecules/modals/Modals";
import { json, useNavigate } from "react-router-dom";
import { uploadArticle } from "./api";

const CreateArticle = () => {
    const [word, setWord] = useState(null)
    const [textAreaConter, setTextAreaConter] = useState("")
    const [textAreaConterword, setTextAreaConterword] = useState(0)
    const navigate = useNavigate()
    const [inputList, setInputList] = useState({
        word: { value: null, validationType: "empty" },
        autor: { value: null, validationType: "empty" },
        name: { value: null, validationType: "empty" },
        resume: { value: null, validationType: "empty" },
        idiom: { value: null, validationType: "empty" },
        claveWord: { value: null, validationType: "empty" },
        interesConflict: { value: null, interesConflict: "empty" },
    })


    //----------------------------------------------------------------------------------------------------->>>>>>> STAKING INPUT LOGIC <<<<<<<<<<<<<<<<<-----------------------
    //NESECITAMOS UNA VARIABLE QUE LLEVE LA CUENTA DEL SIGUIENTE ELEMENTO A AÑADIR
    const [counterStaking, setCounterStaking] = useState(0)
    //SE DELARARA ASI EL INPUT LIST YA QUE ES UN ARREGLO DINAMICO NECESITAMOS PONERLE UN CONTADOR 
    const [inputListstaking, setinputListstaking] = useState([
        {
            [`nameStaking${counterStaking}`]: { value: null, validationType: "empty" },
            [`lastName${counterStaking}`]: { value: null, validationType: "empty" },
            [`Orcid${counterStaking}`]: { value: null, validationType: "empty" },
            [`Titulo${counterStaking}`]: { value: null, validationType: "empty" },
            [`Email${counterStaking}`]: { value: null, validationType: "empty" },
            [`pais${counterStaking}`]: { value: null, validationType: "empty" },
        }
    ])

    //funcion para añadir nuevo elemento al arreglo 
    const addNewElement = () => {
        //se coloca la nueva funcion SubmitValidationStaking para validar staking inputs
        if (SubmitValidationStaking(inputListstaking, setinputListstaking)) {
            let newCont = counterStaking;
            // se agrega nuevo elemento sumando uno al contador gloval counterStaking
            newCont = newCont + 1 
            let inputListstakingCopy = [...inputListstaking];
            inputListstakingCopy.push({
                [`nameStaking${newCont}`]: { value: null, validationType: "empty" },
                [`lastName${newCont}`]: { value: null, validationType: "empty" },
                [`Orcid${newCont}`]: { value: null, validationType: "empty" },
                [`Titulo${newCont}`]: { value: null, validationType: "empty" },
                [`Email${newCont}`]: { value: null, validationType: "empty" },
                [`pais${newCont}`]: { value: null, validationType: "empty" },
            })
            setinputListstaking(inputListstakingCopy);
            setCounterStaking(newCont)
        }

    }

    useEffect(() => {
        //nesecitamos itera input list staking para recorrer cada uno de los objetos y validalos por separado
        inputListstaking.map((item,key)=>
        {
            for (const propertyName in item) {
                if (document.getElementById(propertyName)) {

                    ColorValidation(propertyName, item);
                }
            }
        })
        // }

    }, [inputListstaking])

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList])
    
    useEffect(() => {
        let inputListCopy = { ...inputList }
        inputListCopy.word.value = word;
        setInputList(inputListCopy)
    }, [word])

    const submit = () => {


        if (SubmitValidation(inputList, setInputList)) {
            if(SubmitValidationStaking(inputListstaking, setinputListstaking))
            {
                // uploadArticle(inputList, textAreaConter, navigate)
                CorrectModal("¡Artículo enviado correctamente!");
                // navigate("/")
            }
            else
            {
                IncorrectModal("¡Ingrese todos los campos requeridos!")
            }

        }
        else
        {
            IncorrectModal("¡Ingrese todos los datos del autor!")
        }

    }
    function handleInput(event) {
        const nuevoTexto = event.target.value;
        const words = nuevoTexto.split(/\s+/);
        const count = words.length > 1 ? words.length - 1 : 0; // cuenta las palabras y elimina los espacios adicionales
        console.log("count", count)
        if (count <= 500) {
            setTextAreaConter(nuevoTexto);
            setTextAreaConterword(count)
        } else {
        }
    }
    const idiomOprions = [
        { name: "Español", value: "es" },
        { name: "Ingles", value: "en" },
        { name: "Nauatl", value: "nu" },
    ]
    const paisOprions = [
        { name: "México", value: "México" },
        { name: "Cuba", value: "Cuba" },
        { name: "Canada", value: "Canada" },
    ]
    console.log("inputListstaking", inputListstaking)
    return (
        <>
            <div className="CreateArticle">
                <ExteriorCard>
                    <Back className={"_back_"} url={"/article/dashboard"} />
                    <Header title={"Nuevo articulo"} button="Enviar articulo" onClick={() => submit()} />
                    <InteriorCard className={"cardInteriorCreateArticle"}>
                        <div className="grid-patern-CreateArticle">
                            <div className="col1">
                                <div>
                                    <UploadWord id="word" setValue={setWord}></UploadWord>
                                    <div className="wordName">{word?.name}</div>
                                </div>
                            </div>
                            <div className="col3">

                                <Input title={"Nombre del artículo"} placeholder={"Nombre del artículo"} className={"inputArticleName"} id="name" onChange={(e) => { UpdateValue(e, "name", inputList, setInputList) }}></Input>
                                <Input title={"Nombre del autor(s)"} placeholder={"Nombre del autor(s)"} className={"inputArticleName"} id="autor" onChange={(e) => { UpdateValue(e, "autor", inputList, setInputList) }}></Input>

                            </div>
                            <div className="col4">

                                <div className="minititle">
                                    <div>Resumen</div>
                                    <div>{textAreaConterword}/500</div>
                                </div>
                                <textarea value={textAreaConter} className="textArea-createArticle" id="resume" onChange={(e) => { UpdateValue(e, "resume", inputList, setInputList) }} onInput={handleInput}></textarea>
                            </div>
                        </div>
                        <div className="extra-parent">
                            <div className="cole1">
                                <Select title={"Idioma"} options={idiomOprions} value={inputList.idiom.value} placeholder={"Nombre del artículo"} className={"selectSize"} id="idiom" onChange={(e) => { UpdateValue(e, "idiom", inputList, setInputList) }}></Select>
                                <Input title={"Palabra clave"} placeholder={"Palabra clave"} className={"inputArticleName"} id="claveWord" onChange={(e) => { UpdateValue(e, "claveWord", inputList, setInputList) }}></Input>
                            </div>
                            <div className="cole2">
                                <div className="minititle">
                                    <div>Conflicto de interés</div>
                                </div>
                                <textarea value={inputList.interesConflict.value} className="textArea-createArticle" id="interesConflict" onChange={(e) => { UpdateValue(e, "interesConflict", inputList, setInputList) }} ></textarea>

                            </div>

                        </div>

                        <div className="TextAreaContainer">
                            <div className="minititle" style={{ marginTop: '8px' }}>
                                <div>Conflicto de interés</div>
                            </div>
                            <textarea style={{ height: "150px" }} value={inputList.interesConflict.value} className="textArea-createArticle" id="interesConflict" onChange={(e) => { UpdateValue(e, "interesConflict", inputList, setInputList) }} ></textarea>
                        </div>
                        <div className="stakingButonContainer">
                            <button className="buttonsStaking" onClick={() => addNewElement()}>+</button>
                        </div>
                        {
                            inputListstaking.map((item, key) => {
                                console.log("item",item)
                                return (
                                    <>
                                        <div className="staking-parent">
                                            <div className="cols1">
                                                <Input title={"nombre"} placeholder={"nombre"} className={"inputArticleName"} id={`nameStaking${key}`} onChange={(e) => { UpdateValueStaking(e, `nameStaking${key}`, key, inputListstaking, setinputListstaking) }}></Input>

                                            </div>
                                            <div className="cols2">
                                                <Input title={"Apellido"} placeholder={"Apellido"} className={"inputArticleName"} id={`lastName${key}`} onChange={(e) => { UpdateValueStaking(e, `lastName${key}`, key, inputListstaking, setinputListstaking) }}></Input>

                                            </div>
                                            <div className="cols3">
                                                <Input title={"Orcid"} placeholder={"Orcid"} className={"inputArticleName"} id={`Orcid${key}`} onChange={(e) => { UpdateValueStaking(e, `Orcid${key}`, key, inputListstaking, setinputListstaking) }}></Input>

                                            </div>
                                            <div className="cols4">
                                                <Input title={"Titulo"} placeholder={"Titulo"} className={"inputArticleName"} id={`Titulo${key}`} onChange={(e) => { UpdateValueStaking(e, `Titulo${key}`, key, inputListstaking, setinputListstaking) }}></Input>

                                            </div>
                                            <div className="cols5">
                                                <Input title={"Email"} placeholder={"Email"} className={"inputArticleName"} id={`Email${key}`} onChange={(e) => { UpdateValueStaking(e, `Email${key}`, key, inputListstaking, setinputListstaking) }}></Input>

                                            </div>
                                            <div className="cols6">
                                                <Select title={"País"} options={paisOprions} placeholder={"País"} className={"selectSize"} id={`pais${key}`} onChange={(e) => { UpdateValueStaking(e, `pais${key}`, key, inputListstaking, setinputListstaking) }}></Select>

                                            </div>
                                        </div>
                                    </>
                                )

                            })
                        }

                    </InteriorCard>
                </ExteriorCard>
            </div>
        </>
    )
}
export default CreateArticle