import { createContext, useCallback, useState } from 'react'

const ArticleCreate = createContext()

const ArticleCreateProvider = ({ children }) => {

    const [idArticle, setIdArticle] = useState(0);



    return (
        <ArticleCreate.Provider
            value={{
                idArticle,
                setIdArticle

            }}>
            {children}
        </ArticleCreate.Provider>
    )
}

export {
    ArticleCreateProvider
}
export default ArticleCreate