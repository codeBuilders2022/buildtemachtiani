import React from "react"
import './Contact.scss'
import { Helmet } from "react-helmet"



const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Revista Temachtiani | Contacto</title>
                {/* <meta name="description" content="Descripción de mi artículo" />
                <meta name="keywords" content="palabra clave 1, palabra clave 2" /> */}
            </Helmet>
            <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex Metrics">
                <div className="bg-slate-100 dark:bg-gray-500 cards-body ">
                    <div className="Contact">
                        <h1 className="title">Contacto</h1>
                        <h2 className="sub-title">Gracias por contactarnos !!</h2>

                        <div className="plane-text">Estamos encantados de ayudarte en lo que necesites. Por favor, manda tu mensaje por los siguientes medios para que podamos responder de manera efectiva:</div>
                        <div className="containerContact">
                            <div className="plane-text"><b>Correo electrónico: </b><a className="dark:text-sky-200 text-sky-900" href="mailto:educiencia@revistatemachtiani.net">educiencia@revistatemachtiani.net</a></div>
                            <div className="plane-text"><b>Teléfono: </b>+52-33-13208625</div>
                            <div className="plane-text"><b>WhastApp: </b>+52-33-3268-8545</div>
                            <div className="plane-text"><b>Dirección: </b>San Lorenzo 381 Guadalajara, Jalisco - México</div>

                        </div>
                        <div style={{ marginTop: "20px" }} className="plane-text">Una vez que recibamos tu mensaje, nos pondremos en contacto contigo lo antes posible. Apreciamos tu paciencia mientras esperas nuestra respuesta.</div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact 