//styles
import "./Home.scss"
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';

//assets
import cover from "../../assets/images/Revista01.png"
import journal from "../../assets/PDF/RICEDUT-ENERO-2021.pdf"
import svg from "../../assets/images/Titulo-2.svg";
import svgWhite from "../../assets/images/Sidebar.svg";

//components
import { Tooltip } from 'primereact/tooltip';
import Sidebar from "../../components/organisms/Sidebar/Sidebar"

//react
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IncorrectModal } from "../../components/molecules/modals/Modals";
import { getAxiosHomeArticles } from "../../Api/Home/home";
import {Encrypt} from "../../utilities/Hooks"


const Home = () => {
    const navigate = useNavigate()
    const { setIdArticle } = useStateContext()
    const [articles, setArticles] = useState(false)
    const { currentColor, currentMode, search_ } = useStateContext();
    const [dataArt, setDataArt] = useState([])
    const [data_list, setData_list] = useState([])
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    useEffect(() => {
        getDatas()
    }, []);

    // const getDatas = async () => {
    //     try {
    //         // Hacemos una llamada concurrente a la API utilizando Promise.all()
    //         const [resCommittees] = await Promise.all([
    //             getAxiosHomeArticles("/api/current-issues")
    //         ]);

    //         // const [resArticle] = await Promise.all([getAxiosHomeArticles("/api/articles")])
    //         // Mapeamos los datos obtenidos de los comités y extraemos los atributos relevantes
    //         const committeeData = resCommittees.data.map(({ id, attributes: { publishedAt, title, authors, doi, issue, abstract, info } }) => ({
    //             id,
    //             title,
    //             authors,
    //             doi,
    //             issue,
    //             abstract,
    //             info,
    //             publishedAt,
    //         }));
    //         // Asignamos los datos de los comités a los estados correspondientes en el componente
    //         const issue = []
    //         committeeData.map((e, index) => {
    //             e['year'] = Number(e.publishedAt.substring(0, 4))
    //             const month = months.filter((m, index) => index + 1 == Number(e.publishedAt.substring(5, 7)))
    //             e['month'] = month[0]
    //             e['day'] = Number(e.publishedAt.substring(8, 10))
    //             issue.push(e)
    //         })
    //         setDataArt(issue)
    //         setData_list(issue)
    //     } catch (error) {
    //         IncorrectModal("¡Algo salió mal, intentalo más tarde!", true);
    //     }
    // };


    const [allArticles, setAllArticles] = useState([])
    const getDatas = async () => {
        try {
            // Hacemos una llamada concurrente a la API utilizando Promise.all()
            const [resarticless] = await Promise.all([
                getAxiosHomeArticles("/api/current-issues")
            ]);
            // Mapeamos los datos obtenidos de los comités y extraemos los atributos relevantes
            const articlesData = resarticless.data.map(({ id, attributes: { publishedAt, title, authors, doi, issue, abstract, info } }) => ({
                id,
                title,
                authors,
                doi,
                issue,
                abstract,
                info,
                publishedAt,
            }));
            // Asignamos los datos de los comités a los estados correspondientes en el componente
            const issue = []
            articlesData.map((e, index) => {
                e['year'] = Number(e.publishedAt.substring(0, 4))
                const month = months.filter((m, index) => index + 1 == Number(e.publishedAt.substring(5, 7)))
                e['month'] = month[0]
                e['day'] = Number(e.publishedAt.substring(8, 10))
                issue.push(e)
            })
            setDataArt(issue)
            setData_list(issue)
          const [resCommittees, resArticles] = await Promise.all([
            getAxiosHomeArticles("/api/current-issues"),
            getAxiosHomeArticles("/api/numbers?populate=img")
          ]);

          console.log(resArticles, "resArticle")
          //procesamiento de los datos de resArticles
          const allArticles_ = resArticles.data.map(({id, attributes: { dataNumber: { name }, img: { data: { attributes: { url }}}, publishedAt}}) => ({
            id,
            name,
            image: process.env.REACT_APP_API_URL + url,
            month: months[Number(publishedAt.substring(5, 7)) -1],
            year: Number(publishedAt.substring(0, 4))
          }))

          setAllArticles(allArticles_)
          
      
          // Procesamiento de los datos de los comités
          const committeeData = resCommittees.data.map(({ id, attributes }) => ({
            id,
            ...attributes,
            year: Number(attributes.publishedAt.substring(0, 4)),
            month: months[Number(attributes.publishedAt.substring(5, 7)) - 1],
            day: Number(attributes.publishedAt.substring(8, 10))
          }));
      
          setDataArt(committeeData);
          setData_list(committeeData);
        } catch (error) {
          IncorrectModal("¡Algo salió mal, inténtalo más tarde!", true);
        }
      };

      console.log(allArticles, "del estado")
      

    const data = {
        index: [
            "Journal Citation Reports and Science Citation Index Expanded",
            "Current",
            "Contents",
            "MEDLINE",
            "Index Medicus",
            "Embase",
            "Embase",
            "ScienceDirect",
            "Scopus"
        ]
        ,
    }

    const dataMethric = [
        { title: "Factor de impacto 2022", data: 1.22 },
        { title: "Citescore 2022", data: 1.3 },
        { title: "SJR 2022", data: 0.36 },
        { title: "SNIP 2022", data: 0.67 }
    ]
    const [preVol, setPreVol] = useState([
        { title: "Volumen. 2. Num. 1", cover: cover, monthPlublished: "Octubre", pag: "222-289" },
        { title: "Volumen. 1. Num. 3", cover: cover, monthPlublished: "Julio", pag: "160-222" },
        { title: "Volumen. 1. Num. 2", cover: cover, monthPlublished: "Abril", pag: "64-130" },
        { title: "Volumen. 1. Num. 1", cover: cover, monthPlublished: "Enero", pag: "1-63" },
    ])
    const [special, setSpecial] = useState([
        { title: "Volumen. 1. Num. 1", cover: cover, monthPlublished: "Abril", pag: "131-160" },
        { title: "Volumen. 1. Num. 3", cover: cover, monthPlublished: "Julio", pag: "160-222" },
        { title: "Volumen. 1. Num. 2", cover: cover, monthPlublished: "Abril", pag: "64-130" },
    ])

//useEffect para buscar articulos
    useEffect(() => {
        let timerId;
    
        setDataArt((prevMagazine) => {
          const filteredMagazine = !search_
            ? data_list
            : data_list.filter((articule) =>
                articule.title.toLowerCase().includes(search_.toLowerCase()) ||
                articule.doi.toLowerCase().includes(search_.toLowerCase()) ||
                articule.authors.toLowerCase().includes(search_.toLowerCase())
              );
          return filteredMagazine;
        });
    
        if (search_) {
            setTimeout(() => {
                document.getElementById(`articles_456s`)?.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [search_]);
    return (
        <div className="Home_binn">
            <div className="cnt_imag">
                <img src={currentMode === "Dark" ? svgWhite : svg} alt="Banner" className="img_" />
            </div>
            <div className="dark:bg-gray-600 dark:text-white bg-white Journal">
                <div className='container'>
                    {/* <div className="dark:bg-gray-500 bg-slate-100 flex w-full"> */}
                    <div className='cover'>
                        <div className="cover_left">
                            <img src={cover} />
                            <p>ISSN: -</p>
                            <p>e-ISSN: -</p>
                        </div>
                        <div className='data'>
                            <p>Duis condimentum elementum tellus.
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Quisque
                                metus purus, condimentum vel commodo eget,
                                porttitor nec urna. Curabitur feugiat
                                sollicitudin tortor, eget mattis nibh.
                                Pellentesque habitant morbi tristique
                                senectus et netus et malesuada fames ac
                                turpis egestas. Quisque et fermentum purus.
                                Aliquam dignissim orci enim, in iaculis
                                risus efficitur dignissim. Nam aliquet
                                in mauris quis euismod. Pellentesque et
                                dui faucibus, cursus leo ac, lobortis eros.
                                Curabitur venenatis faucibus tincidunt.
                                Cras molestie malesuada metus at facilisis.
                                Integer eget est velit. Vivamus ac turpis
                                accumsan, facilisis tortor et, posuere nunc.</p>
                            <a className='download' href={journal} style={{ background: currentColor }} download>Descargar</a>
                        </div>
                    </div>
                    <div className='metrics'>
                        <div className='left'>
                            <p className='title'>Indexada en:</p>
                            <div className="in">
                                {data.index.map((element, index) => {
                                    return (
                                        <div className='index' key={index}>
                                            <p>{element}</p>
                                            {index !== data.index.length - 1 && (
                                                <p>/</p>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="icons">
                                <p style={{ marginRight: '10px' }}>Síguenos: </p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                </svg>
                            </div>
                        </div>
                        <div className='right'>
                            {dataMethric.map((e, index) => {
                                return (
                                    <>

                                        <div className='cardGraph'
                                            key={index}>
                                            <p>{e.title}:</p>
                                            <p className="data">{e.data}</p>
                                        </div>
                                    </>
                                )
                            })}
                            <NavLink to={"/metrics"}>
                                <button>Ver más métricas</button>
                            </NavLink>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className='articles_container' id="articles_456s">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-news" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#706a81" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                                <line x1="8" y1="8" x2="12" y2="8" />
                                <line x1="8" y1="12" x2="12" y2="12" />
                                <line x1="8" y1="16" x2="12" y2="16" />
                            </svg>
                            <h1 style={{ color: currentColor }}>Artículos:</h1>
                        </div>
                        <div className="articles">
                            <div className="bg-slate-100 dark:bg-gray-500 card_articule">
                                {!articles ?
                                    dataArt.map((article, index) => {
                                        return (
                                            index < 4 &&

                                            <div className='article' key={index} >
                                                <button onClick={() => { setIdArticle(Encrypt(article.id)), navigate(`/article/${Encrypt(article.id)}`) }}>
                                                    <p className={`hover:${currentColor}`}>{article.title}</p>
                                                </button>
                                                <span className='authors'>{article.authors}</span>
                                                <span className='date'>Disponible online desde el {article.day} de {article.month} de {article.year}</span>
                                            </div>

                                        )
                                    }) :
                                    dataArt.map((article, index) => {
                                        setIdArticle(index)
                                        return (
                                            <div className='article' key={index} >
                                                <button onClick={() => { setIdArticle(article.id), navigate(`/article/${article.id}`) }}>
                                                    <p className={`hover:${currentColor}`}>{article.title}</p>
                                                </button>
                                                <span className='authors'>{article.authors}</span>
                                                <span className='date'>Disponible online desde el {article.day} de {article.month} de {article.year}</span>
                                            </div>

                                        )
                                    })
                                }
                                {
                                    dataArt.length > 4 &&
                                    <div className="seeArticles">
                                        {!articles ? <button style={{ background: currentColor }} onClick={() => setArticles(true)}>Ver más</button> :
                                            <button style={{ background: currentColor }} onClick={() => setArticles(false)}>Ver menos</button>}
                                    </div>
                                }
                                {!search_ &&
                                    <>
                                        <div>
                                            <div className="containerNumbers">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmarks" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#706a81" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z" />
                                                    <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6" />
                                                </svg>
                                                <h1>Números anteriores:</h1>
                                            </div>

                                            <div className="preVol">
                                                {allArticles.map((vol, index) => {
                                                    return (
                                                        <div className="cardVol" key={index}>
                                                            <div className="cnt_image">
                                                                <img src={vol.image} className="i_mage_"/>
                                                            </div>
                                                            <p className="p">{vol.month}{" "}{vol.year}</p>
                                                            <p className="title">{vol.name}</p>
                                                            {/* <p className="p">Páginas: {vol.pag}</p> */}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="seeArticles">
                                                <button style={{ background: currentColor }}>Ver más</button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="containerNumbers">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#706a81" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                                                </svg>
                                                <div className="titleNumbers">
                                                    <h1>Números especiales:</h1>
                                                    <Tooltip target=".alert" />
                                                    <svg className="alert icon icon-tabler icon-tabler-alert-circle"
                                                        data-pr-tooltip="Estos números están en lengua Nahualt"
                                                        data-pr-position="right"
                                                        data-pr-at="right+5 top"
                                                        data-pr-my="left center-2"
                                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#706a81" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="12" y1="8" x2="12" y2="12" />
                                                        <line x1="12" y1="16" x2="12.01" y2="16" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="preVol">
                                                {special.map((vol, index) => {
                                                    return (
                                                        <div className="cardVol" key={index}>
                                                            <img src={vol.cover} />
                                                            <p className="p">{vol.monthPlublished}</p>
                                                            <p className="title">{vol.title}</p>
                                                            <p className="p">Páginas: {vol.pag}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="seeArticles">
                                                <button style={{ background: currentColor }}>Ver más</button>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>

                            {/* sidebar */}
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home