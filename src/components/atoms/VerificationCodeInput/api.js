import axios from "axios";
const urlApi = process.env.REACT_APP_API_URL;


const findEmailF = async (email) => {
      const response = await axios.get(
        `${urlApi}/api/verify-codes?filters[email][$eq]=${email}`
      );
  };
  export const GetCode = (setCode,id)=>
{
    const code = findEmailF(id)
}