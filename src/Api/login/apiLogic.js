import axios from "axios"
import { CorrectModal, IncorrectModal, InfoModal } from "../../components/molecules/modals/Modals";
const urlApi = process.env.REACT_APP_API_URL;
export const loginConfir = async (data,setAuth,navigate)=>
{
    if(data)
    {
        const authenticated = axios.post(urlApi+"/api/auth/local",data) 
        .then((res)=>
        {

            console.log(res, "Auth")
            if(res.data.user.confirmed === true){
                localStorage.setItem("token",res.data.jwt)
                CorrectModal("Credenciales correctas")
                setTimeout(() => {
                    window.location.replace('/article/dashboard');
                }, 3500)

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