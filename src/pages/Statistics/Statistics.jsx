import { useState } from "react";
import "./Statistics.scss"
import { useEffect } from "react";
import { getAxiosContriesView } from "../../Api/Metrics/Metrics";
import Sidebar from "../../components/organisms/Sidebar/Sidebar"
import { Helmet } from 'react-helmet';
import { IncorrectModal } from "../../components/molecules/modals/Modals";
import { getAxiosHomeArticles } from "../../Api/Home/home";

const Statistics = () => {

    //chart
    const [view, setView] = useState([])
    const [download, setDownload] = useState([])
    const [citesMain, setCitesMain] = useState([])
    const [data, setData] = useState(0)



    const month = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
    ]

    const getContries = async () => {
        const res = await getAxiosContriesView('/api/countries')
        setView(res.data.data)
    }

    useEffect(() => {
        getContries()
    }, [])

    const downloadMain = [
        { title: 'In in ligula sit amet quam pharetra imperdiet. Cras iaculis rutrum nibh, quis facilisis lectus dignissim at. Donec pellentesque viverra purus, a malesuada felis pulvinar ac.', number: 400 },
        { title: ' Pharetra nec lacus. Ut efficitur et est vitae cursus. Ut dignissim placerat erat non mollis. Curabitur tempor est at nulla viverra dapibus. Cras rutrum purus nunc, a efficitur mi tempor ac. Donec iaculis tempor lobortis. Proin dui sapien, finibus in tincidunt ut, ornare vel neque.', number: 113 },
        { title: 'In in ligula sit amet quam pharetra imperdiet. Cras iaculis rutrum nibh, quis facilisis lectus dignissim at. Donec pellentesque viverra purus, a malesuada felis pulvinar ac.', number: 43 },
        { title: ' Pharetra nec lacus. Ut efficitur et est vitae cursus. Ut dignissim placerat erat non mollis. Curabitur tempor est at nulla viverra dapibus. Cras rutrum purus nunc, a efficitur mi tempor ac. Donec iaculis tempor lobortis. Proin dui sapien, finibus in tincidunt ut, ornare vel neque.', number: 17 },
        { title: 'In in ligula sit amet quam pharetra imperdiet. Cras iaculis rutrum nibh, quis facilisis lectus dignissim at. Donec pellentesque viverra purus, a malesuada felis pulvinar ac.', number: 400 },
        { title: ' Pharetra nec lacus. Ut efficitur et est vitae cursus. Ut dignissim placerat erat non mollis. Curabitur tempor est at nulla viverra dapibus. Cras rutrum purus nunc, a efficitur mi tempor ac. Donec iaculis tempor lobortis. Proin dui sapien, finibus in tincidunt ut, ornare vel neque.', number: 137 },
        { title: 'In in ligula sit amet quam pharetra imperdiet. Cras iaculis rutrum nibh, quis facilisis lectus dignissim at. Donec pellentesque viverra purus, a malesuada felis pulvinar ac.', number: 43 },
        { title: ' Pharetra nec lacus. Ut efficitur et est vitae cursus. Ut dignissim placerat erat non mollis. Curabitur tempor est at nulla viverra dapibus. Cras rutrum purus nunc, a efficitur mi tempor ac. Donec iaculis tempor lobortis. Proin dui sapien, finibus in tincidunt ut, ornare vel neque.', number: 711 },

    ]

    useEffect(() => {
        const compareNumber = (a, b) => {
            return b.number - a.number;
        }

        downloadMain.sort(compareNumber);
        setDownload(downloadMain)
        setCitesMain(downloadMain)
    }, [])

    // useEffect(() => {
    //     getDatas()
    // }, []);



    // const getDatas = async () => {
    //     try {
    //         const resarticless = await Promise.all([
    //             getAxiosHomeArticles("/api/current-issues"),
    //         ]);
    //         console.log(resarticless[0].data.length)
           

    //     } catch (error) {
    //         console.log(error)
    //         IncorrectModal("¡Algo salió mal, inténtalo más tarde!", true);
    //     }
    // };

    const [time, setTime] = useState(50)
    const [articlesOriginals, setArticlesOriginals] = useState(0)
    const [numberArticles, setNumberArticles] = useState(0)
    const [downloads, setDownloads] = useState(0)
    const [cites, setCites] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setArticlesOriginals((prevContador) => {
                const newContador = prevContador + 1;
                if (newContador === 10) {
                    clearInterval(interval);
                }
                return newContador;
            });
        }, Number((28 * time) / (10)));
        const interval2 = setInterval(() => {
            setNumberArticles((prevContador) => {
                const newContador = prevContador + 1;
                if (newContador === 33) {
                    clearInterval(interval2);
                }
                return newContador;
            });
        }, time);
        const interval3 = setInterval(() => {
            setDownloads((prevContador) => {
                const newContador = prevContador + 1;
                if (newContador === 4) {
                    clearInterval(interval3);
                }
                return newContador;
            });
        }, Number((28 * time) / (4)));
        const interval4 = setInterval(() => {
            setCites((prevContador) => {
                const newContador = prevContador + 1;
                if (newContador === 16) {
                    clearInterval(interval4);
                }
                return newContador;
            });
        }, Number((28 * time) / (16)));

        return () => {
            clearInterval(interval);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        };

    }, []);

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
                <div className="bg-slate-100 dark:bg-gray-500 cards-body w-full">
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
                                            <p>{cites}</p>
                                            <span>Citas</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="times">
                                    <strong>Tiempo de publicación:</strong>
                                    <div className="cTimes">
                                        <div className="weeks">
                                            <span>4 semanas</span>
                                            <p>Tiempo de revisión</p>
                                        </div>
                                        <div className="weeks">
                                            <span>8.9 semanas</span>
                                            <p>Tiempo de publicación</p>
                                        </div>
                                        <div className="weeks">
                                            <span>55%</span>
                                            <p>Tasa de aceptación</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="downloadMain">
                                    <strong>Lista de artículos más descargados:</strong>
                                    <div className="list">
                                        {
                                            download.map((element, index) => {
                                                return (
                                                    <>
                                                        <div key={index} className={index % 2 == 0 ? "elementList bg-par" : "elementList"} >
                                                            <p>{index + 1}</p>
                                                            <span className="titleDownload">{element.title}</span>
                                                            <p>{element.number}</p>
                                                        </div>
                                                        <hr />
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="downloadMain">
                                    <strong>Lista de artículos más citados:</strong>
                                    <div className="list">
                                        {
                                            download.map((element, index) => {
                                                return (
                                                    <>
                                                        <div key={index} className={index % 2 == 0 ? "elementList bg-par" : "elementList"} >
                                                            <p>{index + 1}</p>
                                                            <span className="titleDownload">{element.title}</span>
                                                            <p>{element.number}</p>
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
            </div>
        </>
    )
}

export default Statistics