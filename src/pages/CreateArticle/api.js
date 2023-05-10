import axios from "axios"
import { CorrectModal, IncorrectModal } from "../../components/molecules/modals/Modals";
const urlApi = process.env.REACT_APP_API_URL;

export const uploadArticle = async(inputList,textAreaConter,navigate)=>
{
    const data = {
        // "word":inputList.word.value,
        "name":inputList.name.value,
        "resume":textAreaConter,
        "autor":inputList.autor.value,
        "estatus":0
    }
    const formData = new FormData();
    formData.append("files.word",inputList.word.value)
    formData.append("data",JSON.stringify(data))
    await axios.post(`${urlApi}/api/articles`,formData).then(()=>
    {
        CorrectModal("Articulo subido")
        navigate("/article/dashboard")
    })
    .catch((res)=>
    {
        console.log(res)
        IncorrectModal("Fallo al subir articulo")
    })
}