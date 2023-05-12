import axios from "axios";
import { Decrypt } from "../../Api/login/recover_account";
const urlApi = process.env.REACT_APP_API_URL;
export const getDataLine = async (id,setData)=>
{
     let decriptId = id;
     decriptId = decriptId.replace(/_/g, "/")
     decriptId = Decrypt(decriptId)
    console.log("decriptId",decriptId)
    await axios.get(`${urlApi}/api/articles/${decriptId}`) .then((res)=>
    {
        console.log("res",res)
        setData(res.data.data.attributes.dataArticle)
    })   
    .catch((res)=>
    {
        console.log("res",res)
    })
}