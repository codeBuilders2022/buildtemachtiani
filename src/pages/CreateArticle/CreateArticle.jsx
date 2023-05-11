import React, { useEffect, useState } from "react";
import './CreateArticle.scss'
import ExteriorCard from "../../components/atoms/ExteriorCard/ExteriorCard";
import Back from "../../components/atoms/Back/Back";
import { Header, Input, Select } from "../../components";
import InteriorCard from "../../components/atoms/InteriorCard/InteriorCard";
import UploadWord from "../../components/molecules/UploadWord/UploadWord";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utilities/Validations";
import { CorrectModal } from "../../components/molecules/modals/Modals";
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


            uploadArticle(inputList, textAreaConter, navigate)
            // CorrectModal("¡Artículo enviado correctamente!");
            // navigate("/")
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
            // const textoRecortado = nuevoTexto.substring(0, 500);
            // console.log("textoRecortado", textoRecortado)
            // setTextAreaConter(textoRecortado);
        }
    }
    const idiomOprions = [
        { name: "Español", value: "es" },
        { name: "Ingles", value: "en" },
        { name: "Nauatl", value: "nu" },
    ]
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
                            {/* <div className="col2"> */}
                            {/* <div className="minititle">Fecha de publicación</div>
                                <Input type="date" className={"inputDate"} id="date" onChange={(e) => { UpdateValue(e, "date", inputList, setInputList) }}></Input>
                                <div className="description">
                                    *La fecha se agrega automáticamente cuando se envía un nuevo artículo.
                                </div> */}
                            {/* </div> */}
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
                        <div className="staking-parent">
                            <div className="cols1">
                                <Input title={"nombre"} placeholder={"nombre"} className={"inputArticleName"} id="nameStaking" onChange={(e) => { UpdateValue(e, "nameStaking", inputList, setInputList) }}></Input>

                            </div>
                            <div className="cols2">
                                <Input title={"Palabra clave"} placeholder={"Palabra clave"} className={"inputArticleName"} id="claveWord" onChange={(e) => { UpdateValue(e, "claveWord", inputList, setInputList) }}></Input>

                            </div>
                            <div className="cols3">
                                <Input title={"Palabra clave"} placeholder={"Palabra clave"} className={"inputArticleName"} id="claveWord" onChange={(e) => { UpdateValue(e, "claveWord", inputList, setInputList) }}></Input>

                            </div>
                            <div className="cols4">
                                <Input title={"Palabra clave"} placeholder={"Palabra clave"} className={"inputArticleName"} id="claveWord" onChange={(e) => { UpdateValue(e, "claveWord", inputList, setInputList) }}></Input>

                            </div>
                            <div className="cols5">
                                <Input title={"Palabra clave"} placeholder={"Palabra clave"} className={"inputArticleName"} id="claveWord" onChange={(e) => { UpdateValue(e, "claveWord", inputList, setInputList) }}></Input>

                            </div>
                            <div className="cols6">
                                <Input title={"Palabra clave"} placeholder={"Palabra clave"} className={"inputArticleName"} id="claveWord" onChange={(e) => { UpdateValue(e, "claveWord", inputList, setInputList) }}></Input>

                            </div>
                        </div>

                    </InteriorCard>
                </ExteriorCard>
            </div>
        </>
    )
}
export default CreateArticle