import axios from "axios";
import { Encrypt } from "../../Api/login/recover_account";
const urlApi = process.env.REACT_APP_API_URL;
export const getDataArticles = async (setData) => {
  await axios
    .get(`${urlApi}/api/articles`)
    .then((res) => {
      let newData = [];
      
      res.data.data.map((item, key) => {
        const fecha = new Date(item.attributes.createdAt);
        let id = Encrypt(item.id);
        id = id.replace(/\//g, "_")

        newData.push({
          id:id,
          title: item.attributes.name,
          resume: item.attributes.resume,
          createdat: fecha.toLocaleDateString(),
          estatus:
            item.attributes.estatus == 0
              ? "Enviado"
              : item.attributes.estatus == 1
              ? "En espera"
              : item.attributes.estatus == 2
              ? "Revisando normas"
              : item.attributes.estatus == 3
              ? "Aprobado"
              : item.attributes.estatus == 4
              ? "Publicado"
              : "",
        });
      });
      setData(newData);
    })
    .catch((res) => {
      console.log("res", res);
    });
};
