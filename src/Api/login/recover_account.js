import axios from "axios";
import {
  CorrectModal,
  IncorrectModal,
} from "../../components/molecules/modals/Modals";
const urlApi = process.env.REACT_APP_API_URL;

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

            updateCode(res.data.data, findEmail);
            navigate("/verification-code");
          } else {
            //en caso de que el codigo no exista con esa base de datos se genera uno nuevo desde 0

            let code = generateCode();
            createCodeApi(findEmail, code);
            navigate("/verification-code");
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
const createCodeApi = async (email, code) => {
  const data = {
    data: {
      email: email,
      code: code,
    },
  };
  await axios.post(`${urlApi}/api/verify-codes`, data).then((res) => {
    console.log("create");
  });
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
const updateCode = async (data, email) => {
  let id;
  const response = await axios.get(
    `${urlApi}/api/verify-codes?filters[email][$eq]=${email}`
  );
  console.log("response", response);
  //   response.map((item, key) => {
  //     if (item.attributes.email == email) {
  //       id = item.id;
  //       console.log("item.id",item.id)
  //     }
  //   });

  let newCode = generateCode();
  const newData = {
    data: {
      code: newCode,
    },
  };
  await axios
    .put(`${urlApi}/api/verify-codes/${response.data.data[0].id}`, newData)
    .then((res) => {});
};
