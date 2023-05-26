import axios from "axios";
import { Decrypt } from "../../../Api/login/recover_account";
const urlApi = process.env.REACT_APP_API_URL;
export const getDataLine = async (id,setData,setInstitucion)=>
{
     let decriptId = id;
     decriptId = decriptId.replace(/_/g, "/")
     decriptId = Decrypt(decriptId)
     let idUser = ""
    await axios.get(`${urlApi}/api/articles/${decriptId}`) .then((res)=>
    {
        setData(res.data.data.attributes.dataArticle)
        idUser = res.data.data.attributes.idUser
        
    })   
    .catch((res)=>
    {
        console.log(res)
    })
    
    await axios.get(`${urlApi}/api/users/${idUser}?populate=*`) .then((res)=>
    {
        setInstitucion(res.data.register.institute)
    })   
    .catch((res)=>
    {
        console.log(res)
    })
}