import React, { useEffect, useState } from 'react'

//assets
import Revista from '../../../assets/images/Revista01.png'
import PDF from '../../../assets/PDF/RICEDUT-ENERO-2021.pdf'

//context
import { useStateContext } from '../../../contexts/ContextProvider'

import "./PreviousIssues.scss"
import { Button, Header } from '../../../components'
import Cards from '../../../components/atoms/Cards/Cards'
import { Link, NavLink } from 'react-router-dom'

const PreviousIssues = () => {

    const { currentMode, currentColor } = useStateContext()
    const [color1, setColor1] = useState('#f1f5f9');
    const [color2, setColor2] = useState('#ffffff');

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

    


    return (
        <div className="dark:bg-gray-600 bg-white dark:text-white PreviousIssues">
            <Header title={"Explorando los limites"} category={"Volumen I"} />
            <Cards className={"inside-previous"}>
                <section className="secct1-p">
                <div className="cnt_image_p">
                    <img src={Revista} alt="" className="img_p" />
                </div>
                <div className='description_p'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                        libero porro ducimus numquam assumenda hic placeat similique, soluta
                        eum illum ex ipsam nam, sapiente ad velit maiores voluptatem
                        voluptatibus iusto. Explicabo ab nihil impedit debitis veniam magnam
                        dolore reiciendis, officiis fugiat cupiditate sed totam quam
                        mollitia suscipit praesentium natus ut laudantium provident
                        quibusdam? Cum illo dicta excepturi quod iste debitis inventore,
                        eaque assumenda accusamus optio, laboriosam ipsa tempore
                        consequuntur ducimus est accusantium consectetur, magnam sed modi
                        facere ab quo neque.
                    </p>
                    <Link download={PDF}>
                        <Button title="Descargar" className={"down_load-l"} style={{background: currentColor}}/>
                    </Link>
                </div>
                </section>
                <section className='list_article-p'>
                    <h1 className='h1_article'>Artículos</h1>
                    <div>
                        {[...Array(2)].map((_, idx) => (
                            listArticles.map((_, idx) => {
                                const backgroundColor = isColor1 ? color1 : color2;
                                isColor1 = !isColor1;
                                return(
                                    <div  key={idx} className='block_p' style={{background: backgroundColor}}>
                                        <NavLink className='title_'>{_.title}</NavLink>
                                        <h3 className='author_l'>{_.author}</h3>
                                        <span className='date_l text-black dark:text-white'>{_.date}</span>
                                    </div>
                                )
                            })
                        ))}

                    </div>
                </section>


            </Cards>
        </div>
  );
}

export default PreviousIssues