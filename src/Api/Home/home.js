import axios from "axios";
import { IncorrectModal } from "../../components/molecules/modals/Modals";

export const getAxiosHomeArticles = async (url) => {
    const server = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(`${server}${url}`);
        return response.data;
    } catch (error) {
        IncorrectModal("Ocurrio algún error, intentelo más tarde", true);
        return error;
    }
};