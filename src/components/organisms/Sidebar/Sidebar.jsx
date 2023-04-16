//styles
import "./Sidebar.scss"

//assets
import books from "../../../assets/images/books.png"
import img1 from "../../../assets/images/udg.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
import director from "../../../assets/images/director.jpg"
import revisor from "../../../assets/images/revisor.jpg"
import editor from "../../../assets/images/editora.jpg"

const Sidebar = () => {
    const options = [
        { title: "Guía para autores", url: "" },
        { title: "Envío de manuscritos", url: "" },
        { title: "Preguntas frecuentes", url: "" },
        { title: "Guía para revisores", url: "" },
        { title: "Mapa del sitio", url: "" },
    ]
    const [events, setEvents] = useState([
        { title: "Congreso Internacional de Educación para la Salud", date: "2023.06.03", urlSign: "https://registro-ciam.hcg.gob.mx/" },
        { title: "Congreso Internacional de Estudiantes de Ciencias de la Salud", date: "2023.08.14", urlSign: "https://registro-ciam.hcg.gob.mx/" },
        { title: "XXV Congreso Internacional Avances en Medicina", date: "2024.03.17", urlSign: "https://registro-ciam.hcg.gob.mx/" },
    ])

    const [comite, setComite] = useState([
        { occupation: "Director", name: "Elena Cardona Álvarez", grade: "Dra.", email: "joel@gmail.com", img: director },
        { occupation: "Revisor en jefe", name: "Carlos Millán Blanco", grade: "Dr.", email: "joelarian@gmail.com", img: revisor },
        { occupation: "Editor en jefe", name: "Julia Rocha Corona", grade: "Dra.", email: "joeltrincado@gmail.com", img: editor },
    ])

    return (
        <aside className="Sidebar">
            <div className="posted">
                <div className="title">
                    <img src={books} />
                    <strong>Publique en nuestra revista</strong>
                </div>
                <ul style={{ listStyleType: "square", marginLeft: '20px' }}>
                    {options.map((option, index) => {
                        return (
                            <Link key={index}>
                                <li>{option.title}</li>
                            </Link>
                        )
                    })}
                </ul>
                <div className="events_container">
                    <div className="headerEvent">Próximos Eventos</div>
                    <div className="events">
                        {events.map((e, index) => {
                            return (
                                <div className="event" key={index}>
                                    <p className="date">{e.date}</p>
                                    <a href={`${e.urlSign}`} className="titleEvent">{e.title}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="title">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#706a81" fill="none" stroke-linecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                        <circle cx="12" cy="13" r="3" />
                    </svg>
                    <strong>Banco de imágenes</strong>
                </div>
                <div className="imgBank">
                    <img src={img1} />
                    <div className="eye">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                        </svg>
                    </div>
                </div>
                <div className="editorial">
                    <button className="comite">Comité Editorial</button>
                    <div className="team">
                        {comite.map((position, index) => {
                            return (
                                <div className="cardTeam" key={index}>
                                    <img src={position.img} />
                                    <div className="info">
                                        <p>{position.grade} {position.name}</p>
                                        <p style={{ fontStyle: 'italic' }}>{position.occupation}</p>
                                        <p style={{ fontStyle: 'italic' }}>{position.email}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="seeComite">
                            <button>Ver más...</button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar