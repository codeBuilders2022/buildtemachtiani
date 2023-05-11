import { useContext } from "react";
import ArticleCreate from "../context/ArticleCreate";

const useArticles = () => {
    return (

        useContext(ArticleCreate)
    )
}
export default useArticles