import axios from "axios"
import { CorrectModal, IncorrectModal, InfoModal } from "../../components/molecules/modals/Modals";
import { Decrypt, Encrypt } from "../../utilities/Hooks";
const urlApi = process.env.REACT_APP_API_URL;
export const loginConfir = async (data,setName,navigate)=>
{

    if(data)
    {
        const authenticated = axios.post(urlApi+"/api/auth/local",data) 
        .then((res)=>
        {
            const typeAcc = Decrypt(res.data.user.accounttype)
            const IdCrip = Encrypt(res.data.user.id)
            if(res.data.user.confirmed === true && process.env.REACT_APP_ACCOUNTTYPE === typeAcc){
                setName(res.data)
                localStorage.setItem("token",res.data.jwt)
                localStorage.setItem("username", res.data.user.username)
                localStorage.setItem("jeyaiodl", IdCrip)
                CorrectModal("Credenciales correctas")
                setTimeout(() => {
                    window.location.replace('/user/dashboard');
                }, 3500)

            }
            else{
                IncorrectModal("Credenciales incorrectas")
            }
        })
        .catch((error)=>
        {
            if(error.response.data.error.name === "ApplicationError"){
                InfoModal("Para iniciar sesión, necesitamos que confirmes tu cuenta.", " Por favor, sigue las instrucciones en tu correo electrónico para completar el proceso de autenticación. Si necesitas ayuda, contáctanos. ¡Gracias!")
            }
            else if(error.response.data.error.name === "ValidationError"){
                IncorrectModal("Credenciales incorrectas")
            }
        })
    }
}