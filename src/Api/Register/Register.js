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

export const getAxiosCountrys = async (url) => {
  const server = process.env.REACT_APP_API_URL;
  try {
    const response = await axios.get(`${server}${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
