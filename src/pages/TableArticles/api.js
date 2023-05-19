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
          title: item.attributes.dataArticle.name,
          resume: item.attributes.dataArticle.resume,
          createdat: fecha.toLocaleDateString(),
          estatus:
            item.attributes.dataArticle.estatus == 0
              ? "Pendiente"
              : item.attributes.dataArticle.estatus == 1
              ? "Evaluando"
              : item.attributes.dataArticle.estatus == 2
              ? "Revisión"
              : item.attributes.dataArticle.estatus == 3
              ? "Notificación"
              : item.attributes.dataArticle.estatus == 4
              ? "Publicado"
              : "",
        });
      });
      setData(newData);
    })
    .catch((res) => {
      console.log(res);
    });
};
