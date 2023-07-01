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
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IncorrectModal } from "../../components/molecules/modals/Modals";
import { getAxiosHomeArticles } from "../../Api/Home/home";
import { postAxiosCountriesView } from "../../Api/Metrics/Metrics";
import { Decrypt, Encrypt } from "../../utilities/Hooks"
import MessageWarning from "../../components/atoms/MessageWarning/MessageWarning";


const Home = () => {
    const navigate = useNavigate()
    const [allArticles, setAllArticles] = useState([])
    const [currentJornal, setCurrentJornal] = useState([])
    const { setIdArticle } = useStateContext()
    const [articles, setArticles] = useState(false)
    const { currentColor, currentMode, search_ } = useStateContext();
    const [dataArt, setDataArt] = useState([])
    const [data_list, setData_list] = useState([])
    const [viewMessage, setViewMessage] = useState(false)
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    useEffect(() => {
        getDatas()
    }, []);



    const getDatas = async () => {
        try {
            // Hacemos una llamada concurrente a la API utilizando Promise.all()
            const [resarticless, resNumber] = await Promise.all([
                getAxiosHomeArticles("/api/current-issues"),
                getAxiosHomeArticles("/api/numbers?populate=*")
            ]);
            // Mapeamos los datos obtenidos de los comités y extraemos los atributos relevantes
            const articlesData = resarticless.data.map(({ id, attributes: { publishedAt, title, authors, doi, issue, abstract, info } }) => {
                const encryptedId = Encrypt(id);

                return {
                    id: encryptedId,
                    title,
                    authors,
                    doi,
                    issue,
                    abstract,
                    info,
                    publishedAt,
                };
            });
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

            //procesamiento de los datos de resNumber
            const allArticles_ = resNumber.data.map(({ id, attributes: { dataNumber: { name, resume }, img: { data: { attributes: { url } } }, pdf: { data: { attributes: { url: urlPdf } } }, publishedAt } }) => ({
                id: Encrypt(id),
                name,
                resume,
                url: process.env.REACT_APP_API_URL + urlPdf,
                image: process.env.REACT_APP_API_URL + url,
                month: months[Number(publishedAt.substring(5, 7)) - 1],
                year: Number(publishedAt.substring(0, 4))
            }))

            if (allArticles_.length > 0) {
                let firstID = allArticles_[0].id;
                let indexx = 0;

                allArticles_.forEach((article, idx) => {
                    if (article.id > firstID) {
                        firstID = article.id;
                        indexx = idx;
                    }
                });

                const newArticles = allArticles_.filter((_, number) => number !== indexx);
                setCurrentJornal([allArticles_[indexx]]);
                setAllArticles(newArticles);
                
            }
        } catch (error) {
            console.log(error)
            IncorrectModal("¡Algo salió mal, inténtalo más tarde!", true);
        }
    };



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



    // //metrics
    // useEffect(() => {
    //     const formData = new FormData();
    //     const fetchCountry = async () => {
    //         try {
    //             const response = await fetch('https://ipapi.co/json/');
    //             const data = await response.json();
    //             const countrySave = {
    //                 "value": data.country_name
    //             }
    //             console.log(countrySave)
    //             formData.append("data", JSON.stringify(countrySave));
    //             const res = await postAxiosCountriesView("/api/countries", formData)
    //         } catch (error) {
    //             console.error('Error fetching country:', error);
    //         }

    //     };
    //     fetchCountry();
    // }, []);


    const dataMethric = [
        // { title: "Factor de impacto 2022", data: 1.22 },
        // { title: "Citescore 2022", data: 1.3 },
        // { title: "SJR 2022", data: 0.36 },
        // { title: "SNIP 2022", data: 0.67 }
    ]
    // const [preVol, setPreVol] = useState([
    //     // { title: "Volumen. 2. Num. 1", cover: cover, monthPlublished: "Octubre", pag: "222-289" },
    //     // { title: "Volumen. 1. Num. 3", cover: cover, monthPlublished: "Julio", pag: "160-222" },
    //     // { title: "Volumen. 1. Num. 2", cover: cover, monthPlublished: "Abril", pag: "64-130" },
    //     // { title: "Volumen. 1. Num. 1", cover: cover, monthPlublished: "Enero", pag: "1-63" },
    // ])
    const [special, setSpecial] = useState([
        // { title: "Volumen. 1. Num. 1", cover: cover, monthPlublished: "Abril", pag: "131-160" },
        // { title: "Volumen. 1. Num. 3", cover: cover, monthPlublished: "Julio", pag: "160-222" },
        // { title: "Volumen. 1. Num. 2", cover: cover, monthPlublished: "Abril", pag: "64-130" },
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
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                document.getElementById('articles_456s')?.scrollIntoView({ behavior: 'smooth' });
            }, 500); // Ajusta el tiempo de espera (en milisegundos) antes de activar el scroll suave
        }

        return () => {
            clearTimeout(timerId); // Limpiar el temporizador al desmontar el componente
        };
    }, [search_]);

    useEffect(() => {
        const isMessageClosed = localStorage.getItem("mens-ge");

        if (isMessageClosed === null) {
            setViewMessage(true);
        }
    }, []);

    const handleMessageClosed = () => {
        localStorage.setItem("mens-ge", "true");
        setViewMessage(false);
    };



    return (
        <div className="Home_binn">
            <div className="cnt_imag">
                <img src={currentMode === "Dark" ? svgWhite : svg} alt="Banner" className="img_" />
            </div>
            <div className="dark:bg-gray-600 dark:text-white bg-white Journal">
                <div className='container'>
                    <div className='cover'>
                        {currentJornal?.map((_, idx) => (
                            <div key={idx} className="inside_cover">
                                <div className="col_left">
                                    <div className="cnt_img__">
                                        <Link to={`/previous-issues/${_.id}`}>
                                            <img src={_.image} alt="" className="i_mage" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="cnt_rigth">
                                    <div className="current_reume" dangerouslySetInnerHTML={{ __html: _.resume }}></div>
                                    <a className='download' href={_.url} style={{ background: currentColor }} download>Descargar</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='metrics'>
                        <div className='left'>
                            {/* <p className='title'>Indexada en:</p> */}
                            <div className="in">
                                {/* {data.index.map((element, index) => {
                                    return (
                                        <div className='index' key={index}>
                                            <p>{element}</p>
                                            {index !== data.index.length - 1 && (
                                                <p>/</p>
                                            )}
                                        </div>
                                    )
                                })} */}
                            </div>
                            {/* <div className="icons">
                                <p style={{ marginRight: '10px' }}>Síguenos: </p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                </svg>
                            </div> */}
                        </div>
                        <div className='right'>
                            {/* {dataMethric.map((e, index) => {
                                return (
                                    <>

                                        <div className='cardGraph'
                                            key={index}>
                                            <p>{e.title}:</p>
                                            <p className="data">{e.data !== null ? e.data : "-"}</p>
                                        </div>
                                    </>
                                )
                            })} */}
                            {dataMethric.length > 1 &&
                                <NavLink to={"/metrics"}>
                                    <button>Ver más métricas</button>
                                </NavLink>
                            }
                        </div>
                    </div>
                    {/* </div> */}
                    <div className='articles_container' id="articles_456s">
                        <div className="articles">
                            <div className="bg-slate-100 dark:bg-gray-500 card_articule">
                                <div style={{ display: 'flex', alignItems: 'center' }} className="title_ar785">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-news" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#706a81" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                                        <line x1="8" y1="8" x2="12" y2="8" />
                                        <line x1="8" y1="12" x2="12" y2="12" />
                                        <line x1="8" y1="16" x2="12" y2="16" />
                                    </svg>
                                    <h1 style={{ color: currentColor }}>Artículos:</h1>
                                </div>
                                {!articles ?
                                    dataArt.map((article, index) => {
                                        return (
                                            index < 4 &&

                                            <div className='article' key={index} >
                                                <button onClick={() => { setIdArticle(article.id), navigate(`/article/${article.id}`) }}>
                                                    <p className={`hover:${currentColor}`}>{article.title}</p>
                                                </button>
                                                <span className='authors'>{article.authors}</span>
                                                <span className='date'>Disponible en línea desde el {article.day} de {article.month} de {article.year}</span>
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

                                {dataArt.length < 1 &&
                                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>Artículos en proceso</div>
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
                                                <h1 style={{ color: currentColor }} >Números anteriores:</h1>
                                            </div>

                                            <div className="preVol">
                                                {allArticles.length < 1 ? (
                                                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>Aún no hay números que mostrar</div>
                                                ) : (
                                                    allArticles.map((vol, index) => {
                                                        return (

                                                            <NavLink key={index} to={`/previous-issues/${vol.id}`}>
                                                                <div className="cardVol" key={index}>
                                                                    <div className="cnt_image">
                                                                        <img src={vol.image} className="i_mage_" />
                                                                    </div>
                                                                    <p className="dark:text-white p">{vol.month}{" "}{vol.year}</p>
                                                                    <p className="dark:text-red-800 title">{vol.name}</p>
                                                                    {/* <p className="p">Páginas: {vol.pag}</p> */}
                                                                </div>

                                                            </NavLink>
                                                        )
                                                    })
                                                )}
                                            </div>
                                            {allArticles.length > 0 &&
                                                <div className="seeArticles">
                                                    <button style={{ background: currentColor }}>Ver más</button>
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            <div className="containerNumbers">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#706a81" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" color={currentColor} />
                                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                                                </svg>
                                                <div className="titleNumbers">
                                                    <h1 style={{ color: currentColor }}>Lenguas originarias :</h1>
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
                                                {special.length < 1 ? (
                                                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>Aún no hay números especiales que mostrar</div>
                                                ) : (
                                                    special.map((vol, index) => {
                                                        return (
                                                            <div className="cardVol" key={index}>
                                                                <img src={vol.cover} />
                                                                <p className="p">{vol.monthPlublished}</p>
                                                                <p className="title">{vol.title}</p>
                                                                <p className="p">Páginas: {vol.pag}</p>
                                                            </div>
                                                        )
                                                    })
                                                )}
                                            </div>
                                            {special.length > 0 &&
                                                <div className="seeArticles">
                                                    <button style={{ background: currentColor }}>Ver más</button>
                                                </div>
                                            }
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
            {viewMessage && <MessageWarning handle={handleMessageClosed} />}
        </div>
    )
}

export default Home