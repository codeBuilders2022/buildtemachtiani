import axios from "axios";
import { Decrypt } from "../../Api/login/recover_account";
import { CorrectModal, IncorrectModal } from "../../components/molecules/modals/Modals";
const urlApi = process.env.REACT_APP_API_URL
export const changePassword = async (id,inputList,idUser,navigate)=>
{
    
    let encriptaId = id;
        encriptaId = encriptaId.replace(/_/g, "/")
        encriptaId = Decrypt(encriptaId)
    let encriptaIdUser = idUser;
    encriptaIdUser = encriptaIdUser.replace(/_/g, "/")
    encriptaIdUser = Decrypt(encriptaIdUser)
    const dataSend = {
        "data": {
            "password": inputList.password.value
        }
    }
    const passUser = {
        "password": inputList.password.value
    }
    
    await axios.put(`${urlApi}/api/registers/${encriptaId}`,dataSend)
    .then((res)=>
    {
        
    })
    .catch(()=>
    {
       
    })
    await axios.put(`${urlApi}/api/users/${encriptaIdUser}`,passUser)
    .then((res)=>
    {
        CorrectModal("Credenciales actualizadas")
        navigate("/")
    })
    .catch(()=>
    {
        IncorrectModal("Credenciales incorrectas")   
    })

}