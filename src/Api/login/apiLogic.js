import axios from "axios"
import { CorrectModal, IncorrectModal } from "../../components/molecules/modals/Modals";
const urlApi = process.env.REACT_APP_API_URL;
export const loginConfir = async (data,setAuth,navigate)=>
{
    if(data)
    {
        axios.post(urlApi+"/api/auth/local",data) 
        .then((res)=>
        {
            CorrectModal("Credenciales correctas")
            setAuth(true)
            navigate("/")
            console.log("res",res)
            localStorage.setItem("token",res.data.jwt)
        })
        .catch(()=>
        {
            IncorrectModal("Credenciales incorrectas")
            setRes(false)
        })
    }
}