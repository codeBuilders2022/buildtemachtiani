import axios from "axios";
import { IncorrectModal } from "../../components/molecules/modals/Modals";

export const getCountriesView = async () => {
    const countriesArray = []
    const countriesArrayOr = []
    try {
        const res = await fetch(process.env.REACT_APP_API_CONTRIES);
        const response = await res.json()
        const data = response;
        data.map((country, index) => {
            let name = { name: country.translations.spa.common, flags: country.flags.svg, code: country.idd.root + country.idd.suffixes }
            countriesArray.push(name)
        })
        countriesArray.sort((a, b) => a.name.localeCompare(b.name))
        countriesArray.map((country, index) => {
            const c = { name: country.name, value: country, flags: country.flags, code: country.code }
            countriesArrayOr.push(c)
        })
        return countriesArrayOr;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const postAxiosCountriesView = async (url, form) => {
    try {
        const server = process.env.REACT_APP_API_URL;
        const response = await axios.post(`${server}${url}`, form);
        return response;
    } catch (error) {
        IncorrectModal("Ocurrio algún error, intentelo más tarde", true);
        throw error;
    }
};


export const getAxiosContriesView = async (url) => {
    const server = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(`${server}${url}`);

        return response;
    } catch (error) {
        IncorrectModal("Ocurrio algún error, intentelo más tarde", true);
        return error;
    }
};
export const postAxiosDownloads = async (url, form) => {
    try {
        const server = process.env.REACT_APP_API_URL;
        const response = await axios.post(`${server}${url}`, form);
        return response;
    } catch (error) {
        IncorrectModal("Ocurrio algún error, intentelo más tarde", true);
        throw error;
    }
};


export const getAxiosDownloads = async (url) => {
    const server = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(`${server}${url}`);

        return response;
    } catch (error) {
        IncorrectModal("Ocurrio algún error, intentelo más tarde", true);
        return error;
    }
};
export const getAxiosCites = async () => {
    try {
        const response = await axios.get('https://serpapi.com/search', {
            params: {
                api_key: 'a0d12b58c187049e7913b8ef696a3ad101238e69f8c2434a49d2792a1d863025', // Reemplaza con tu clave de API de SerpApi
                q: 'Hola',
            },
        });
        return response.data?.organic_results || [];
    } catch (error) {
        IncorrectModal("Ocurrio algún error, intentelo más tarde", true);
        return error;
    }
};

