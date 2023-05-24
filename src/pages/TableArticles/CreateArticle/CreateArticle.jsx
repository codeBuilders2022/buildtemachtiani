import React, { useEffect, useRef, useState } from "react";
import './CreateArticle.scss'
import ExteriorCard from "../../../components/atoms/ExteriorCard/ExteriorCard";
import Back from "../../../components/atoms/Back/Back";
import { Button, Header, Input, Select } from "../../../components";
import InteriorCard from "../../../components/atoms/InteriorCard/InteriorCard";
import UploadWord from "../../../components/molecules/UploadWord/UploadWord";
import { ColorValidation, SubmitValidation, SubmitValidationStaking, UpdateValue, UpdateValueStaking } from "../../../utilities/Validations";
import { CorrectModal, IncorrectModal } from "../../../components/molecules/modals/Modals";
import { json, useNavigate, useParams } from "react-router-dom";
import { uploadArticle } from "./api";
import { Editor } from 'primereact/editor';
import { getAxiosCountrys } from "../../../Api/Register/Register";

const CreateArticle = () => {
    const [word, setWord] = useState(null)
    const [data, setData] = useState([]);
    const [textAreaConter, setTextAreaConter] = useState("")
    const { idUser } = useParams()
    const [textAreaConterword, setTextAreaConterword] = useState(0)
    const navigate = useNavigate()
    const [inputList, setInputList] = useState({
        word: { value: null, validationType: "empty" },
        autor: { value: null, validationType: "empty" },
        name: { value: null, validationType: "empty" },
        resume: { value: null, validationType: "empty" },
        idiom: { value: null, validationType: "empty" },
        country: { value: null, validationType: "empty" },
        claveWord: { value: null, validationType: "empty" },
        interesConflict: { value: null, interesConflict: "empty" },
        reference: { value: null, interesConflict: "empty" },
    })


    //----------------------------------------------------------------------------------------------------->>>>>>> STAKING INPUT LOGIC <<<<<<<<<<<<<<<<<-----------------------
    //NESECITAMOS UNA VARIABLE QUE LLEVE LA CUENTA DEL SIGUIENTE ELEMENTO A AÑADIR (se incia en -1 por que si sumamos o agramos uno)
    const [counterStaking, setCounterStaking] = useState(-1)
    //SE DELARARA ASI EL INPUT LIST YA QUE ES UN ARREGLO DINAMICO NECESITAMOS PONERLE UN CONTADOR 
    const [inputListstaking, setinputListstaking] = useState([])

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
        inputListstaking.map((item, key) => {

            for (const propertyName in item) {
                if (document.getElementById(propertyName)) {

                    ColorValidation(propertyName, item);
                }
            }
        })
        // }

    }, [inputListstaking])

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const [textAreaResume, setTextAreaResume] = useState(null)
    const [textAreaInteresConflict, setTextAreaInteresConflict] = useState(null)
    const [textAreaReference, setTextAreaReference] = useState(null)
    const [isWrited, setIsWrited] = useState({
        textAreaResumeW: false,
        textAreaInteresConflictW: false,
        textAreaReferenceW: false,
    })

    useEffect(() => {
        if (textAreaResume) {
            let isWritedCopy = { ...isWrited };
            isWritedCopy.textAreaResumeW = true
            setIsWrited(isWritedCopy)
        }
        if (textAreaInteresConflict) {
            let isWritedCopy = { ...isWrited };
            isWritedCopy.textAreaInteresConflictW = true
            setIsWrited(isWritedCopy)
        }
        if (textAreaReference) {
            let isWritedCopy = { ...isWrited };
            isWritedCopy.textAreaReferenceW = true;
            setIsWrited(isWritedCopy)
        }



        if (isWrited.textAreaResumeW == true && textAreaResume == null) {
            let inputListCopy = { ...inputList }
            inputListCopy.resume.value = ""
            setInputList(inputListCopy)
        }
        if (isWrited.textAreaInteresConflictW == true && textAreaInteresConflict == null) {
            let inputListCopy = { ...inputList }
            inputListCopy.interesConflict.value = ""
            setInputList(inputListCopy)
        }
        if (isWrited.textAreaReferenceW == true && textAreaReference == null) {
            let inputListCopy = { ...inputList }
            inputListCopy.reference.value = ""
            setInputList(inputListCopy)
        }

        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
            }
        }
    }, [inputList])
    useEffect(() => {
        const inputListCopy = { ...inputList }
        inputListCopy.resume.value = textAreaResume;
        inputListCopy.interesConflict.value = textAreaInteresConflict;
        inputListCopy.reference.value = textAreaReference;
        setInputList(inputListCopy)
    }, [textAreaResume, textAreaInteresConflict, textAreaReference])

    useEffect(() => {
        let inputListCopy = { ...inputList }
        inputListCopy.word.value = word;
        setInputList(inputListCopy)
    }, [word])

    const submit = () => {
        if (SubmitValidation(inputList, setInputList)) {
            if (SubmitValidationStaking(inputListstaking, setinputListstaking)) {
                uploadArticle(inputList, inputListstaking, navigate, idUser)
                // navigate("/")
            }
            else {
                IncorrectModal("¡Ingrese todos los campos requeridos!")
            }

        }
        else {
            IncorrectModal("¡Ingrese todos los datos del autor!")
        }

    }
    const [habilitado, setHabilitado] = useState(true);
    const contarPalabrasEditor = (event) => {
        const textoIngresado = event.htmlValue;
        let palabras = "";
        if (textoIngresado != null) {
            palabras = textoIngresado.trim().split(/\s+/);
        }
        else {
            setTextAreaResume("");
        }
        const cantidadPalabras = palabras.length;

        if (cantidadPalabras > 500) {
            const textoRecortado = palabras.slice(0, 500).join(" ");
            setTextAreaResume(textoRecortado);
            setHabilitado(false)
        } else {
            setHabilitado(true)
            setTextAreaConterword(cantidadPalabras)
            setTextAreaResume(textoIngresado);
        }

    };
    const onEditorKeyPress = (event) => {
        if (!habilitado) {
            event.preventDefault();
        }
    };
    const onEditorPaste = (event) => {
        event.preventDefault();
        const textoPegado = (event.clipboardData || window.clipboardData).getData("text");
        const textoIngresado = event.htmlValue || "";
      
        const palabrasPegadas = textoPegado.trim().split(/\s+/);
        const palabrasActuales = textoIngresado.trim().split(/\s+/).length;
        const palabrasTotales = palabrasActuales + palabrasPegadas.length;
        const palabrasRestantes = 500 - palabrasTotales;
      
        if (palabrasTotales > 500) {
          return;
        } else if (palabrasRestantes < 0) {
          const textoRecortado = palabrasPegadas.slice(0, Math.abs(palabrasRestantes)).join(" ");
          const nuevoTexto = textoIngresado + " " + textoRecortado;
          setTextAreaResume(nuevoTexto);
          setTextAreaConterword(500);
        } else {
          const nuevoTexto = textoIngresado + " " + textoPegado;
          setTextAreaResume(nuevoTexto);
          setTextAreaConterword(palabrasTotales);
        }
    };








    const idiomOprions = [
        { name: "Español", value: "Español" },
        { name: "Ingles", value: "Ingles" },
        { name: "Náhuatl", value: "Náhuatl" },
    ]


    useEffect(() => {
        axiosCountries();
    }, []);

    
    const axiosCountries = async () => {
        try {
            const response = await getAxiosCountrys();         
            setData(response);
        } catch (error) {
            IncorrectModal("¡Algo salió mal, intentalo más tarde!", true)
        }
    };

    return (
        <>
            <div className="CreateArticle">
                <ExteriorCard>
                    <Back className={"_back_"} url={`/user/dashboard/${idUser}`} />
                    <Header title={"Nuevo articulo"} button="Enviar articulo" onClick={() => submit()} />
                    <InteriorCard className={"cardInteriorCreateArticle"}>
                        <div className="grid-patern-CreateArticle">
                            <div style={{ marginBottom: 25 }}>
                                <UploadWord id="word" setValue={setWord}></UploadWord>
                                <div className="wordName">{word?.name}</div>
                            </div>
                            <Input title={"Título del artículo"} placeholder={"Título del artículo"} className={"inputArticleName"} id="name" onChange={(e) => { UpdateValue(e, "name", inputList, setInputList) }}></Input>
                            <Input title={"Nombre del autor"} placeholder={"Nombre del autor"} className={"inputArticleName"} id="autor" onChange={(e) => { UpdateValue(e, "autor", inputList, setInputList) }}></Input>
                            <Select title={"Idioma"} options={idiomOprions} value={inputList.idiom.value} placeholder={"Seleccione el idioma del artículo"} className={"selectSize"} id="idiom" onChange={(e) => { UpdateValue(e, "idiom", inputList, setInputList) }}></Select>
                            <Select title={"País"} options={data} value={inputList.country.value} placeholder={"Seleccione un país"} className={"selectSize"} id="country" onChange={(e) => { UpdateValue(e, "country", inputList, setInputList) }}></Select>
                            <Input title={"Palabra clave"} placeholder={"Palabra clave"} className={"inputArticleName"} id="claveWord" onChange={(e) => { UpdateValue(e, "claveWord", inputList, setInputList) }}></Input>
                            {
                                inputListstaking.map((item, key) => {
                                    return (
                                        <>
                                            <div className="staking-parent">
                                                <div className="statk_in">
                                                    <Input title={"Nombre"} placeholder={"Nombre"} className={"inputArticleName"} id={`nameStaking${key}`} onChange={(e) => { UpdateValueStaking(e, `nameStaking${key}`, key, inputListstaking, setinputListstaking) }}></Input>
                                                    <Input title={"Apellido"} placeholder={"Apellido"} className={"inputArticleName"} id={`lastName${key}`} onChange={(e) => { UpdateValueStaking(e, `lastName${key}`, key, inputListstaking, setinputListstaking) }}></Input>
                                                </div>
                                                <div className="statk_in">
                                                    <Input title={"Orcid"} placeholder={"Orcid"} className={"inputArticleName"} id={`Orcid${key}`} onChange={(e) => { UpdateValueStaking(e, `Orcid${key}`, key, inputListstaking, setinputListstaking) }}></Input>
                                                    <Input title={"Titulo"} placeholder={"Titulo"} className={"inputArticleName"} id={`Titulo${key}`} onChange={(e) => { UpdateValueStaking(e, `Titulo${key}`, key, inputListstaking, setinputListstaking) }}></Input>
                                                </div>
                                                <div className="statk_in">
                                                    <Input title={"Email"} placeholder={"Email"} className={"inputArticleName"} id={`Email${key}`} onChange={(e) => { UpdateValueStaking(e, `Email${key}`, key, inputListstaking, setinputListstaking) }}></Input>
                                                    <Select title={"País"} value={item[`pais${key}`].value} options={data} placeholder={"País"} className={"selectSize"} id={`pais${key}`} onChange={(e) => { UpdateValueStaking(e, `pais${key}`, key, inputListstaking, setinputListstaking) }}></Select>
                                                </div>
                                                <div className="Line_line"></div>
                                            </div>
                                            <hr className="hrstaking" />
                                        </>
                                    )
                                })
                            }
                            <div className="new_inputs">
                                <Button className={"buttonStaking btn_primary"} title={"Añadir nuevo autor"} onClick={() => addNewElement()} />
                            </div>
                        </div>
                        <div className="entry_left">
                            <div className="textArea-createArticle">
                                <div className="minititle">
                                    <div>Resumen</div>
                                    <div>{textAreaConterword}/500</div>
                                </div>
                                <Editor onPaste={onEditorPaste} onKeyPress={onEditorKeyPress} readOnly={!habilitado} className="editor" value={textAreaResume} id="resume" onTextChange={contarPalabrasEditor} style={{ height: '300px' }} />
                            </div>
                            <div className="textArea-createArticle">
                                <div className="minititle">
                                    <div>Conflicto de interés</div>
                                </div>
                                <Editor className="editor" value={textAreaInteresConflict} id="interesConflict" onTextChange={(e) => { setTextAreaInteresConflict(e.htmlValue) }} style={{ height: '150px' }} />
                            </div>
                            <div className="textArea-createArticle">
                                <div className="minititle" >
                                    <div>Referencias</div>
                                </div>
                                <Editor value={textAreaReference} className="editor" id="reference" onTextChange={(e) => { setTextAreaReference(e.htmlValue) }} style={{ height: '150px' }} />

                            </div>
                        </div>
                    </InteriorCard>
                </ExteriorCard>
            </div>
        </>
    )
}
export default CreateArticle