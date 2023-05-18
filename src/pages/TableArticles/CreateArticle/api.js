import axios from "axios"
import { CorrectModal, IncorrectModal } from "../../../components/molecules/modals/Modals";
import { Decrypt } from "../../../utilities/Hooks";
const urlApi = process.env.REACT_APP_API_URL;

export const uploadArticle = async(inputList,inputListstaking,navigate)=>
{
    const IdEncrip = localStorage.getItem("jeyaiodl")
    const ID = Decrypt(IdEncrip)
    const data = {
        "dataArticle":
        {
            "name":inputList.name.value,
            "autor":inputList.autor.value,
            "estatus":0,
            "idiom": inputList.idiom.value,
            "country": inputList.country.value,
            "resume":inputList.resume.value,
            "interesConflict":inputList.interesConflict.value,
            "reference":inputList.reference.value,
            "idUser": ID,
            "stakingInputData":inputListstaking
        }
    }
    const formData = new FormData();
    formData.append("files.word",inputList.word.value)
    formData.append("data",JSON.stringify(data))
    await axios.post(`${urlApi}/api/articles`,formData).then(()=>
    {
        CorrectModal("Articulo subido")
        // navigate("/article/dashboard")
    })
    .catch((res)=>
    {
        IncorrectModal("Fallo al subir articulo")
    })
}