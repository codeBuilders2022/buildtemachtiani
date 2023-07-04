import React, { useEffect } from 'react'

import "./Cookies.scss"

//Assets
import Cookies_img from '../../../assets/images/check.png'
import { NavLink } from 'react-router-dom'

//hooks
import { useStateContext } from '../../../contexts/ContextProvider'

const Cookies = () => {

    const { viewPageCookies, setViewPageCookies, setViewCookies } = useStateContext()

    const hanldeCookies = () => {
        setViewCookies(true)
        localStorage.setItem("cookies", true)
    }

    useEffect(() => {
        // Bloquear el scroll al montar el componente
        document.body.style.overflow = 'hidden';
    
        // Habilitar el scroll al desmontar el componente
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, []);

    return (
        <>
            {!viewPageCookies &&
                <div className='Cookies'>
                    <div className='indide_modal'>
                        <img src={Cookies_img} alt="" className='img_cookies'/>
                        <div className='block-text'>
                            <p className='text_des'>Este sitio web utiliza cookies para mejorar tu experiencia de navegación.</p>
                        </div>
                        <div className='block-bnt'>
                            <button className='btn_cookies accept_btn' onClick={hanldeCookies}>Aceptar</button>
                            <NavLink to={"/about-cookies"} className='btn_cookies about_cookies' onClick={() => setViewPageCookies(true)}>Acerca de las cookies</NavLink>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cookies