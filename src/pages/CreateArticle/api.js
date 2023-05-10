import axios from "axios"
const urlApi = process.env.REACT_APP_API_URL;

export const uploadArticle = async(inputList,textAreaConter,navigate)=>
{
    const data = {
        // "word":inputList.word.value,
        "name":inputList.name.value,
        "resume":textAreaConter,
    }
    const formData = new FormData();
    formData.append("files.word",inputList.word.value)
    formData.append("data",JSON.stringify(data))
    await axios.post(`${urlApi}/api/articles`,formData).then(()=>
    {

    })
}