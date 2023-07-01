import React, { useEffect, useState } from 'react'

//assets
import Revista from '../../../assets/images/Revista01.png'
import PDF from '../../../assets/PDF/RICEDUT-ENERO-2021.pdf'

//context
import { useStateContext } from '../../../contexts/ContextProvider'

import "./PreviousIssues.scss"
import { Button, Header } from '../../../components'
import Cards from '../../../components/atoms/Cards/Cards'
import { Link, NavLink, useParams } from 'react-router-dom'
import { getAxiosHomeArticles } from '../../../Api/Home/home'
import { Decrypt, Encrypt } from '../../../utilities/Hooks'
import Back from '../../../components/atoms/Back/Back'

const PreviousIssues = () => {

    const { currentMode, currentColor } = useStateContext()
    const { id } = useParams()
    const [color1, setColor1] = useState('#f1f5f9');
    const [color2, setColor2] = useState('#ffffff');
    const [title, setTitle] = useState("")
    const [volumen, setVolumen] = useState("")
    const [infoDatas, setInfoDatas] = useState([])
    const [infoArticles, setInfoArticles] = useState([])

    useEffect(() => {
        if (currentMode === 'Dark') {
          setColor1('#6b7280');
          setColor2('#4b5563');
        } else {
          setColor1('#f1f5f9');
          setColor2('#ffffff');
        }
      }, [currentMode]);
    
      let isColor1 = true;

    const listArticles = [
        {
            id: 1,
            title: "El impacto de la inteligencia artificial en la medicina",
            author: "Diego Alberto Venegas Hernández",
            date: "Disponible online desde el 23 de Junio de 2023"
        },
        {
            id: 2,
            title: "La crisis climática y sus consecuencias económicas",
            author: "Diego Alberto Venegas Hernández",
            date: "Disponible online desde el 23 de Junio de 2023"
        },
        {
            id: 3,
            title: "El futuro del trabajo: automatización y empleo",
            author: "Diego Alberto Venegas Hernández",
            date: "Disponible online desde el 23 de Junio de 2023"
        },
        {
            id: 4,
            title: "Avances en la exploración espacial: la misión a Marte",
            author: "Diego Alberto Venegas Hernández",
            date: "Disponible online desde el 23 de Junio de 2023"
        },
        {
            id: 5,
            title: "El auge de las criptomonedas y su impacto en la economía global",
            author: "Diego Alberto Venegas Hernández",
            date: "Disponible online desde el 23 de Junio de 2023"
        },
    ]


    useEffect(() => {
        getNumber()
    }, [])


    //get datas of the articles from numbers
    const getArticle = async (id) => {
        const arrayArticles = await getAxiosHomeArticles(`/api/previous-articles?filters[idVolumen][$contains]=${id}`)
        return arrayArticles
    }

    const getNumber = async () => {
        const ID = Decrypt(id)
        const arrayNumbers = await getAxiosHomeArticles(`/api/numbers/${ID}?populate=*`)
        if(arrayNumbers && arrayNumbers.data && arrayNumbers.data.attributes){
            const {data: { attributes: { 
                dataNumber: {idVolumen, idiom, name, resume},
                img: { data: { attributes: { url }}},
                pdf: { data: {attributes: { url: url_pdf }}}
            }}} = arrayNumbers

            setTitle(name)
            setVolumen(idVolumen)
            setInfoDatas([{
                resume,
                url: process.env.REACT_APP_API_URL + url,
                pdf: process.env.REACT_APP_API_URL + url_pdf
            }])

            const arrayArticles = await getArticle(idVolumen)

            const newInfoArticles = arrayArticles.data.map(({ id, attributes: { title, authors, publishedAt } }) => ({
                id: Encrypt(id),
                title,
                authors,
                date: publishedAt.substring(0, 10)
            }));

            setInfoArticles(newInfoArticles);
        }
    }


    return (
        <div className="dark:bg-gray-600 bg-white dark:text-white PreviousIssues">
            <Back className={"_back_"} url={"/"} />
            <Header title={title} category={volumen} />
            <Cards className={"inside-previous"}>
            {infoDatas.map((_, idx) => (
                <section className="secct1-p" key={idx}>
                    <div className="cnt_image_p">
                        <img src={_.url} alt="" className="img_p" />
                    </div>
                    <div className='description_p'>
                        <p dangerouslySetInnerHTML={{ __html: _?.resume }}></p>
                        <a href={_?.pdf} download>
                            <Button title="Descargar" className={"down_load-l"} style={{background: currentColor}}/>
                        </a>
                    </div>
                </section>
            ))}
                <section className='list_article-p'>
                    <h1 className='h1_article'>Artículos</h1>
                    <div>
                        {infoArticles.map((_, idx) => {
                            const backgroundColor = isColor1 ? color1 : color2;
                            isColor1 = !isColor1;
                            return(
                                <div  key={idx} className='block_p' style={{background: backgroundColor}}>
                                    <NavLink to={`article/${_.id}`} className='title_'>{_.title}</NavLink>
                                    <h3 className='author_l'>{_.authors}</h3>
                                    <span className='date_l text-black dark:text-white'>Disponible en línea desde el{" "}{_.date}</span>
                                </div>
                            )
                            })}

                    </div>
                </section>


            </Cards>
        </div>
  );
}

export default PreviousIssues