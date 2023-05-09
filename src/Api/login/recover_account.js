import axios from "axios";
import {
  CorrectModal,
  IncorrectModal,
} from "../../components/molecules/modals/Modals";
const urlApi = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_SECRET_KEY;

import cryptojs from "crypto-js";
export const VerifyEmail = async (findEmail, navigate) => {
  await axios
    .get(`${urlApi}/api/registers?filters[email][$eq]=${findEmail}`)
    .then((res) => {
      if (res.data.data.length != 0) {
        CorrectModal("Email valido");
        //-------------------------------------------------------------------------verificar si el codigo ya se mando a ese correo
        const mainFunction = async () => {
          if (await findEmailF(findEmail)) {
            //esto se ejecuta en caso de que el codigo ya exista en base de datos solo actualiza el codigo sin agregar un nuevo elemento a la db

            updateCode(res.data.data, findEmail, navigate, res.data.data[0].id);
          } else {
            //en caso de que el codigo no exista con esa base de datos se genera uno nuevo desde 0

            let code = generateCode();
            createCodeApi(findEmail, code, navigate, res.data.data[0].id);
            // navigate(`/verification-code/${findEmail}`);
          }
        };
        mainFunction();
      } else {
        IncorrectModal("Email invalido");
      }
    })
    .catch(() => {
      IncorrectModal("Email invalido");
    });
};

//--------------------------------------------------------------------------------------------------------FUNCIONES PARA VERIFICAR SI SE ACTUALIZA O SE CREA UN CODIGO

//////////////////////////////////////////////////////////////////////////////////////////////////
const generateCode = () => {
  const randomNum = Math.floor(Math.random() * 90000) + 10000;
  return randomNum;
};
//////////////////////////////////////////////////////////////////////////////////////////////////
const createCodeApi = async (email, code, navigate, id) => {
  let idUsers = await getIdUsers(email);
  console.log("idUsers", idUsers);

  const data = {
    data: {
      email: email,
      code: code,
    },
  };
  await axios.post(`${urlApi}/api/verify-codes`, data);
  sendEmail(email, "Este es un código de verificación de temachtiani", code);
  let codeEncrypt = Encrypt(code);
  let idEncrypt = Encrypt(id);
  let idUsersEncript = Encrypt(idUsers);
  codeEncrypt = codeEncrypt.replace(/\//g, "_");
  idEncrypt = idEncrypt.replace(/\//g, "_");
  idUsersEncript = idUsersEncript.replace(/\//g, "_");
  navigate(`/verification-code/${codeEncrypt}/${idEncrypt}/${idUsersEncript}`);
};
//////////////////////////////////////////////////////////////////////////////////////////////////
const findEmailF = async (email) => {
  try {
    const response = await axios.get(
      `${urlApi}/api/verify-codes?filters[email][$eq]=${email}`
    );

    if (response.data.data.length != 0) {
      console.log("true", response.data.data);
      return true;
    } else {
      console.log("false", response.data.data);
      return false;
    }
  } catch (error) {
    console.log("error en find email", error);
    throw error;
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////
const sendEmail = async (email, subject, text) => {
  if (typeof text !== "undefined") {
    const codestring = text.toString();
    const data = {
      to: email,
      subject: subject,
      text: codestring,
    };
    console.log("codestring", codestring);
    await axios
      .post(`${urlApi}/api/email`, data)
      .then((res) => {
        console.log("entro");
      })
      .catch((res) => {
        console.log("fallo");
      });
  } else {
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////
const updateCode = async (data, email, navigate, id) => {
  const response = await axios.get(
    `${urlApi}/api/verify-codes?filters[email][$eq]=${email}`
  );
  let idUsers = await getIdUsers(email);
  console.log("idUsers",idUsers);
  let newCode = generateCode();
  const newData = {
    data: {
      code: newCode,
    },
  };
  await axios.put(
    `${urlApi}/api/verify-codes/${response.data.data[0].id}`,
    newData
  );
  sendEmail(email, "Este es un código de verificación de temachtiani", newCode);
  console.log("newCode", newCode.toString());
  console.log("key", key);
  //encriptacion de codigo
  let codeEncrypt = Encrypt(newCode);
  codeEncrypt = codeEncrypt.replace(/\//g, "_");
  //encriptacion del id
  let idEncrypt = Encrypt(id);
  idEncrypt = idEncrypt.replace(/\//g, "_");
  //encript de id users
  let idUsersEncript = Encrypt(idUsers);
  idUsersEncript = idUsersEncript.replace(/\//g, "_");
  
  navigate(`/verification-code/${codeEncrypt}/${idEncrypt}/${idUsersEncript}`);
};

export const Encrypt = (text) => {
  return cryptojs.AES.encrypt(text.toString(), key).toString();
};
export const Decrypt = (encriptText) => {
  const iv = "a0d5ebe6a0d5ebe6a0d5ebe6a0d5ebe6";
  return cryptojs.AES.decrypt(encriptText, key, {
    iv: cryptojs.enc.Hex.parse(iv),
  }).toString(cryptojs.enc.Utf8);
};

const getIdUsers = async (email) => {
  const response = await axios.get(
    `${urlApi}/api/users?filters[email][$eq]=${email}`
  );
  return response.data[0].id;
};
