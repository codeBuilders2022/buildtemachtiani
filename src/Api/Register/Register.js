import axios from "axios";

export const postAxiosRegister = async (url, form) => {
  try {
    const server = process.env.REACT_APP_API_URL;
    const response = await axios.post(`${server}${url}`, form);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const userAxiosPost = async (url, form) => {
  try {
    const server = process.env.REACT_APP_API_URL;
    const response = await axios.post(`${server}${url}`, form);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAxiosCountrys = async () => {
  const server = process.env.REACT_APP_API_CONTRIES;
  const contriesArray = []
  const contriesArrayOr = []
  try {
    const response = await axios.get(server);
    const data = response.data;
    data.map((contry, index) => {
      let name = contry.translations.spa.common
      contriesArray.push(name)
    })
    contriesArray.sort((a, b) => a.localeCompare(b))
    contriesArray.map((contry, index) => {
      const c = { name: contry, value: contry }
      contriesArrayOr.push(c)
    })
    return contriesArrayOr;
  } catch (error) {
    console.error(error);
    return error;
  }
}
