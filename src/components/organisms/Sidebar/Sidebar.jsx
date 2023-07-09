//styles
import "./Sidebar.scss"

//assets
import books from "../../../assets/images/books.png"
import img1 from "../../../assets/images/udg.jpg"
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import director from "../../../assets/images/director.jpg"
import revisor from "../../../assets/images/revisor.jpg"
import editor from "../../../assets/images/editora.jpg"

import { useStateContext } from "../../../contexts/ContextProvider";
import { getAxiosData } from "../../../Api/Committee/Committee"
import { IncorrectModal } from "../../molecules/modals/Modals"

const Sidebar = () => {

    const { currentColor } = useStateContext();
    const [committeeDtas, setCommitteeDtas] = useState([]);
    const [events, setEvents] = useState([])

    const options = [
        { id: 1, title: "Guía para autores", url: "/guide-authors" },
        { id: 2, title: "Acerca de", url: "/about" },
        { id: 5, title: "Misión y Visión", url: "/mission-vision" },
        { id: 5, title: "Politicas de la revista", url: "/magazine-policies" },
    ]



    useEffect(() => { getDatas() }, [])
    //Obtenemos los datos de la API
    const getDatas = async () => {
        try {
            const [resCommittees] = await Promise.all([getAxiosData("/api/events?populate=file")]);
            const commiteData = resCommittees.data.map(({ id, attributes: { events, date, siteurl, file: { data } } }) => {
                let urlFile = null
                if (data?.attributes && data?.attributes.url) {
                    urlFile = data.attributes.url
                    urlFile = process.env.REACT_APP_API_URL + urlFile
                }
                return { id, events, date, siteurl, image: urlFile }
            })

            setEvents(commiteData)
        } catch (error) {
            console.log(error)
            IncorrectModal("¡Algo salió mal, intentalo más tarde!", true);
        }
    }

    useEffect(() => { getDatasCommittee() }, []);

    const getDatasCommittee = async () => {
        try {
            // Hacemos una llamada concurrente a la API utilizando Promise.all()
            const [resCommittees] = await Promise.all([getAxiosData("/api/committees?populate=profile")]);
            // // Mapeamos los datos obtenidos de los comités y extraemos los atributos relevantes
            const committeeData = resCommittees.data.map(({ id, attributes: { committee, email, fullname, profile: { data: { attributes: { formats } } } } }) => {
                const url = formats?.large?.url || formats?.medium?.url || formats?.small?.url || formats?.thumbnail?.url || resCommittees?.data[0]?.attributes?.profile?.data?.attributes?.url;
                const modifiedEmail = email.replace(/^(.{3}).*?(@.*)$/, "$1...$2");
                return { id, committee, email: modifiedEmail, fullname, image: process.env.REACT_APP_API_URL + url };
            });
            // // Asignamos los datos de los comités a los estados correspondientes en el componente
            setCommitteeDtas(committeeData.slice(0, 3));
        } catch (error) {
            console.log(error)
            IncorrectModal("¡Algo salió mal, intentalo más tarde!", true);
        }
    };

    const activeLinks = ({ isActive }) => {
        return {
            color: isActive ? currentColor : null,
            fontWeight: isActive ? "bold" : null
        };
    };

    return (
        <aside className="dark:text-white Sidebar">
            <div className="posted">
                <div className="title">
                    <img src={books} />
                    <strong>Publique en nuestra revista</strong>
                </div>
                <ul style={{ listStyleType: "square", marginLeft: '20px' }}>
                    {options.map((option, index) => {
                        return (
                            <NavLink key={index} style={activeLinks} to={option.url}>
                                <li>{option.title}</li>
                            </NavLink>
                        )
                    })}
                </ul>
                <div className="events_container">
                    <div className="headerEvent">Próximos Eventos</div>
                    <div className="events">
                        {events.length === 0 ? (
                            <label className="nextText">Aún no hay eventos próximos.</label>
                        ) : (
                            events.map((e, index) => {
                                return (
                                    <div className="event" key={index}>
                                        <p className="date">{e.date}</p>
                                        {e.image === null ? (
                                            <a href={e.siteurl} target="_blank" rel="noreferrer" className="titleEvent">{e.events}</a>
                                        ) : (
                                            <a href={e.image} target="_blank" rel="noreferrer" className="titleEvent" download>{e.events}</a>
                                        )}
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
                <div className="cnt_bank_">
                    <div className="title">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#706a81" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                            <circle cx="12" cy="13" r="3" />
                        </svg>
                        <strong>Banco de imágenes</strong>
                    </div>
                    <div className="imgBank">
                        <img src={img1} />
                        <div className="eye">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                            </svg> */}
                            <label>Próximamente</label>
                        </div>
                    </div>
                </div>
                <div className="editorial">
                    <Link to="/committee">
                        <button className="comite">Comité Editorial</button>
                    </Link>
                    <div className="team">
                        {committeeDtas.length === 0 ? (
                            <label>Aún no hay comité</label>
                        ) : (
                            committeeDtas.map((position, index) => {
                                return (
                                    <div className="cardTeam" key={index}>
                                        <div className="cnt_imagen_">
                                            <img src={position.image} className="Imag_g" />

                                        </div>
                                        <div className="info">
                                            <p>{position.fullname}</p>
                                            <p style={{ fontStyle: 'italic' }}>{position.committee}</p>
                                            <p style={{ fontStyle: 'italic' }}>{position.email}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                        <div className="seeComite">
                            <Link to="/committee">
                                {committeeDtas.length === 0 ? (
                                    null
                                ) : (
                                    <button>Ver más...</button>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="dataRead">
                    <div className="title">
                        <div className='left'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#706a81" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <path d="M3 6l0 13" />
                                <path d="M12 6l0 13" />
                                <path d="M21 6l0 13" />
                            </svg>
                            <strong>Datos de lectores</strong>
                        </div>
                        <Link to='/statistics'>Ver estadísticas</Link>
                    </div>
                    <a href="https://www.revolvermaps.com/livestats/5ba5baxjzkm/" target="_blank"><img src="//rf.revolvermaps.com/h/m/a/0/ff0000/128/0/5ba5baxjzkm.png" alt="Map" /></a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar