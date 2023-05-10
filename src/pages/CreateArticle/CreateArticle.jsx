import React, { useEffect, useState } from "react";
import './CreateArticle.scss'
import ExteriorCard from "../../components/atoms/ExteriorCard/ExteriorCard";
import Back from "../../components/atoms/Back/Back";
import { Header, Input } from "../../components";
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
        // date: { value: null, validationType: "empty" },
        name: { value: null, validationType: "empty" },
        resume: { value: null, validationType: "empty" },
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
            
           
            uploadArticle(inputList,textAreaConter,navigate)
            // CorrectModal("¡Artículo enviado correctamente!");
            // navigate("/")
        }

    }
    function handleInput(event) {
        const nuevoTexto = event.target.value;
        const words = nuevoTexto.split(/\s+/);
        const count = words.length > 1 ? words.length - 1 : 0; // cuenta las palabras y elimina los espacios adicionales
        console.log("count",count)
        if (count <= 500) {
            setTextAreaConter(nuevoTexto);
            setTextAreaConterword(count)
        } else {
            // const textoRecortado = nuevoTexto.substring(0, 500);
            // console.log("textoRecortado", textoRecortado)
            // setTextAreaConter(textoRecortado);
        }
    }
    return (
        <>
            <div className="CreateArticle">
                <ExteriorCard>
                    <Back className={"_back_"} url={"/dashboard"} />
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
                            </div>
                            <div className="col4">

                                <div className="minititle">
                                    <div>Resumen</div>
                                    <div>{textAreaConterword}/500</div>
                                </div>
                                <textarea  value={textAreaConter} className="textArea-createArticle" id="resume" onChange={(e) => { UpdateValue(e, "resume", inputList, setInputList) }} onInput={handleInput}></textarea>

                            </div>
                        </div>
                    </InteriorCard>
                </ExteriorCard>
            </div>
        </>
    )
}
export default CreateArticle