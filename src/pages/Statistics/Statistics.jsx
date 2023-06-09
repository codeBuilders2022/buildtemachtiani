import { useState } from "react";
import "./Statistics.scss"
import { useEffect } from "react";
import { getAxiosCites, getAxiosContriesView, getAxiosDownloads } from "../../Api/Metrics/Metrics";
import Sidebar from "../../components/organisms/Sidebar/Sidebar"
import { Helmet } from 'react-helmet';
import { IncorrectModal } from "../../components/molecules/modals/Modals";
import { getAxiosHomeArticles } from "../../Api/Home/home";
import { Encrypt } from "../../utilities/Hooks";
import { useNavigate } from "react-router";

const Statistics = () => {
    const navigate = useNavigate()
    const [download, setDownload] = useState([])
    const [citesMain, setCitesMain] = useState([])
    const [datas, setDatas] = useState(0)
    const [time, setTime] = useState(50)
    const [articlesOriginals, setArticlesOriginals] = useState(0)
    const [numberArticles, setNumberArticles] = useState(0)
    const [downloads, setDownloads] = useState(0)
    const [cites, setCites] = useState(0)
    const [originals, setOriginals] = useState(0)
    const [dataDownloads, setDataDownloads] = useState(0)
    const [checking, setChecking] = useState(0)
    const [publichedTime, setPublichedTime] = useState(0)
    const [percent, setPercent] = useState(0)


    useEffect(() => {
        if (dataDownloads) {
            const newArray = []
            dataDownloads.map((element, index) => {
                newArray.map((e, i) => {
                    if (e.title == element.attributes.name) {
                        newArray[i].number = newArray[i].number + 1
                    }
                    else {
                        const newElement = {
                            title: element.attributes.name, number: 1, id: element.attributes.index
                        }
                        newArray.push(newElement)
                    }
                })
                if (newArray.length == 0) {
                    const newElement = {
                        title: element.attributes.name, number: 1, id: element.attributes.index
                    }
                    newArray.push(newElement)
                }
            })

            if (newArray.length >= 2) {
                const compareNumber = (a, b) => {
                    return b.number - a.number;
                }

                newArray.sort(compareNumber);
            }
            setDownload(newArray)
            setCitesMain(newArray)
        }


    }, [dataDownloads])

    useEffect(() => {
        if (cites) {
            const newArray = []
            cites.map((element, index) => {
                newArray.map((e, i) => {
                    if (e.title == element.attributes.name) {
                        newArray[i].number = newArray[i].number + 1
                    }
                    else {
                        const newElement = {
                            title: element.attributes.name, number: 1, id: element.attributes.index
                        }
                        newArray.push(newElement)
                    }
                })
                if (newArray.length == 0) {
                    const newElement = {
                        title: element.attributes.name, number: 1, id: element.attributes.index
                    }
                    newArray.push(newElement)
                }
            })

            if (newArray.length >= 2) {
                const compareNumber = (a, b) => {
                    return b.number - a.number;
                }

                newArray.sort(compareNumber);
            }
            setCitesMain(newArray)
        }


    }, [cites])



    const [arrayEnd, setArrayEnd] = useState([])
    useEffect(() => {
        let newArray = [download[0]]
        download.map((e, index) => {
            if (download[index + 1]) {
                let newElement = newArray.filter((element, idx) => element?.title !== download[index + 1].title)
                if (!newElement.length) {
                    newArray.push(e)
                }
            }
        })
        setArrayEnd(newArray)

    }, [download])

    const [arrayCites, setArrayCites] = useState([])
    useEffect(() => {
        let newArray = [citesMain[0]]
        citesMain.map((e, index) => {
            if (citesMain[index + 1]) {
                let newElement = newArray.filter((element, idx) => element?.title !== citesMain[index + 1].title)
                if (!newElement.length) {
                    newArray.push(e)
                }
            }
        })
        setArrayCites(newArray)

    }, [citesMain])


    function CalculateWeeks(init, end) {
        const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos
        // Obtener la diferencia en milisegundos entre las dos fechas
        const difference = Math.abs(init - end);
        // Calcular la cantidad de semanas redondeando hacia abajo
        const weeks = Math.floor(difference / oneWeek);
        return weeks;
    }
    function PublichedTime(init, end) {
        const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos
        // Obtener la diferencia en milisegundos entre las dos fechas
        const difference = Math.abs(init - end);
        // Calcular la cantidad de semanas redondeando hacia abajo
        const weeks = Math.floor(difference / oneWeek);
        return weeks;
    }


    const getDatas = async () => {
        let number = 0
        let timeTotal = 0
        let timePubliched = 0
        try {
            const resarticless = await getAxiosHomeArticles("/api/current-issues")
            const responseDownloads = await getAxiosDownloads("/api/downloads")
            const responseVisits = await getAxiosDownloads("/api/metrics")
            const responseArticles = await getAxiosDownloads("/api/articles")
            const totalArticles = responseArticles.data.data.length
            setCites(responseVisits.data.data)
            setDataDownloads(responseDownloads.data.data)
            setDatas(resarticless)
            const totalValues = resarticless.data?.length
            resarticless.data.map((prop, index) => {
                if (prop.attributes.type == 'Artículo original') {
                    number = number + 1
                    setOriginals(number)
                }
                const init = new Date(`${prop.attributes.dateSend}`)
                const accept = new Date(`${prop.attributes.dateAccept}`)
                const publiched = new Date(`${prop.attributes.publishedAt}`)
                const quantity = CalculateWeeks(init, accept)
                const publichedFuction = PublichedTime(accept, publiched)
                timeTotal = timeTotal + quantity
                timePubliched = timePubliched + publichedFuction
            })
            setChecking(timeTotal / totalValues)
            setPublichedTime(timePubliched / totalValues)
            setPercent(100 * (totalValues / totalArticles))

        } catch (error) {
            console.log(error)
            IncorrectModal("¡Algo salió mal, inténtalo más tarde!", true);
        }

    };

    useEffect(() => {
        getDatas()
    }, []);

    useEffect(() => {
        if (datas.data?.length) {
            const interval = setInterval(() => {
                setArticlesOriginals((prevContador) => {
                    const newContador = prevContador + 1;
                    if (newContador === originals) {
                        clearInterval(interval);
                    }
                    return newContador;
                });
            }, Number((datas.data?.length * time) / (originals)));
            const interval2 = setInterval(() => {
                setNumberArticles((prevContador) => {
                    const newContador = prevContador + 1;
                    if (newContador === datas.data?.length) {
                        clearInterval(interval2);
                    }
                    return newContador;
                });
            }, time);
            const interval3 = setInterval(() => {
                setDownloads((prevContador) => {
                    const newContador = prevContador + 1;
                    if (newContador === dataDownloads.length) {
                        clearInterval(interval3);
                    }
                    return newContador;
                });
            }, Number((datas.data?.length * time) / (1)));
            const interval4 = setInterval(() => {
                setCites((prevContador) => {
                    const newContador = prevContador + 1;
                    if (newContador === 16) {
                        clearInterval(interval4);
                    }
                    return newContador;
                });
            }, Number((datas.data?.length * time) / (1)));

            return () => {
                clearInterval(interval);
                clearInterval(interval2);
                clearInterval(interval3);
                clearInterval(interval4);
            };

        }
    }, [datas]);

    useEffect(() => {
        window.scrollTo(0, 0); // Hace scroll al principio de la página
    }, []);


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Revista Temachtiani | Estadísticas</title>
                {/* <meta name="description" content="Descripción de mi artículo" />
                <meta name="keywords" content="palabra clave 1, palabra clave 2" /> */}
            </Helmet>
            <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex Metrics">
                <div className="bg-slate-100 dark:bg-gray-500 cards-body w-full rounded-3xl">
                    <div className="Statistics">
                        <div className="titleS">Estadísticas</div>
                        <div className='StatisticsC'>
                            <div className="right">
                                <div style={{ marginTop: '30px' }}>
                                    <strong>Estadísticas generales:</strong>
                                    <div className="statistics">
                                        <div className="metric">
                                            <p>{numberArticles}</p>
                                            <span>Total de artículos</span>
                                        </div>
                                        <div className="metric">
                                            <p>{articlesOriginals}</p>
                                            <span>Artículos originales</span>
                                        </div>
                                        <div className="metric">
                                            <p>{downloads}</p>
                                            <span>Descargas</span>
                                        </div>
                                        <div className="metric">
                                            {cites.length ? <p>{cites.length}</p> : <p>0</p>}
                                            <span>Visitas a artículos</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="times">
                                    <strong>Tiempo de publicación:</strong>
                                    <div className="cTimes">
                                        <div className="weeks">
                                            {checking > 0 ? <span>{checking}  semanas</span> : <span>Sin estimar aún</span>}
                                            <p>Tiempo de revisión</p>
                                        </div>
                                        <div className="weeks">
                                            {publichedTime > 0 ? <span>{publichedTime}  semanas</span> : <span>Sin estimar aún</span>}
                                            <p>Tiempo de publicación</p>
                                        </div>
                                        <div className="weeks">
                                            {percent ? <span>{Math.round(percent)}%</span> : <span>Sin estimar aún</span>}
                                            <p>Tasa de aceptación</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="downloadMain">
                                    <strong>Lista de artículos más descargados:</strong>
                                    <div className="list">
                                        {
                                            arrayEnd[0]?.title &&
                                            arrayEnd?.map((element, index) => {
                                                return (
                                                    <>
                                                        <div key={index} className={index % 2 == 0 ? "elementList bg-par" : "elementList"} onClick={() => navigate(`/article/${Encrypt(element?.id)}`)}>
                                                            <p>{index + 1}</p>
                                                            <span className="titleDownload">{element?.title}</span>
                                                            <p>{element?.number}</p>
                                                        </div>
                                                        <hr />
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="downloadMain">
                                    <strong>Lista de artículos más visitados:</strong>
                                    <div className="list">
                                        {
                                            arrayCites[0]?.title &&
                                            arrayCites.map((element, index) => {
                                                return (
                                                    <>
                                                        <div key={index} className={index % 2 == 0 ? "elementList bg-par" : "elementList"} onClick={() => navigate(`/article/${Encrypt(element?.id)}`)}>
                                                            <p>{index + 1}</p>
                                                            <span className="titleDownload">{element?.title}</span>
                                                            <p>{element?.number}</p>
                                                        </div>
                                                        <hr />
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Statistics