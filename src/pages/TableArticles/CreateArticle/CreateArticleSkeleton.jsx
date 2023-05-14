import React, { useEffect, useState } from "react";
import './CreateArticle.scss'
import ExteriorCard from "../../../components/atoms/ExteriorCard/ExteriorCard";
import Back from "../../../components/atoms/Back/Back";
import { Header, Input } from "../../../components";
import InteriorCard from "../../../components/atoms/InteriorCard/InteriorCard";
import UploadWord from "../../../components/molecules/UploadWord/UploadWord";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../utilities/Validations";
import { CorrectModal } from "../../../components/molecules/modals/Modals";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const CreateArticleSkeleton = () => {
    const [word, setWord] = useState(null)
    const navigate = useNavigate()
    const [inputList,setInputList] = useState({
        word:{value:null,validationType:"empty"},
        date:{value:null,validationType:"empty"},
        name:{value:null,validationType:"empty"},
        resume:{value:null,validationType:"empty"},
    })
    useEffect(()=>
    {
        for(const propertyName in inputList)
        {
            if(document.getElementById(propertyName))
            {
                ColorValidation(propertyName,inputList);
            }
        }
    },[inputList])
    useEffect(()=>
    {
        let inputListCopy = {...inputList}
        inputListCopy.word.value = word;
        setInputList(inputListCopy)
    },[word])

    const submit = ()=>
    {
        if(SubmitValidation(inputList,setInputList))
        {
            CorrectModal("¡Artículo enviado correctamente!");
            navigate("/")
        }
    }
    return (
        <>
            <div className="CreateArticle">
                <ExteriorCard>
                    {/* <Back className={"_back_"} /> */}
                    <Skeleton shape="circle" size="2rem" className="_back_"></Skeleton>
                    <Header skeleton button/>
                    <InteriorCard className={"cardInteriorCreateArticle"}>
                        <div className="grid-patern-CreateArticle">
                            <div className="col1">
                                <div>
                                    
                                    <Skeleton height="175px"></Skeleton>
                                    <div className="wordName">{word?.name}</div>
                                </div>
                            </div>
                            <div className="col2">
                                {/* <div className="minititle">Fecha de publicación</div> */}
                                <Skeleton height="18px" width="100px" className="minititle"></Skeleton>
                                <Input skeleton type="date" className={"inputDate"} id="date" onChange={(e)=>{UpdateValue(e,"date",inputList,setInputList)}}></Input>
                                <div className="description">
                                <Skeleton height="35px"></Skeleton>
                                </div>
                            </div>
                            <div className="col3">
                                <Input skeleton title={"Nombre del artículo"} placeholder={"Nombre del artículo"} className={"inputArticleName"} id="name" onChange={(e)=>{UpdateValue(e,"name",inputList,setInputList)}}></Input>
                            </div>
                            <div className="col4">

                                {/* <div className="minititle">Resumen</div> */}
                                <Skeleton height="18px" width="70px" className="minititle"></Skeleton>
                                {/* <textarea className="textArea-createArticle" id="resume" onChange={(e)=>{UpdateValue(e,"resume",inputList,setInputList)}}></textarea> */}
                                <Skeleton className="textArea-createArticle"></Skeleton>

                            </div>
                        </div>
                    </InteriorCard>
                </ExteriorCard>
            </div>
        </>
    )
}
export default CreateArticleSkeleton