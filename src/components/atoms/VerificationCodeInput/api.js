import axios from "axios";
const urlApi = process.env.REACT_APP_API_URL;


const findEmailF = async (email) => {
    // try {
        console.log("email",email)
      const response = await axios.get(
        `${urlApi}/api/verify-codes?filters[email][$eq]=${email}`
      );
        
      console.log("response",response.data.data[0].attributes.code)
  };
  export const GetCode = (setCode,id)=>
{
    const code = findEmailF(id)
}