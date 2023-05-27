import React, { useEffect, useState } from 'react'
import { useStateContext } from "../../../contexts/ContextProvider";
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button } from "primereact/button";
import "./Navbarr.scss"

//Assets
import logo_dark from '../../../assets/images/logo_70.png'
import logo_light from '../../../assets/images/logo_70_black.png'
import InputSearch from '../../atoms/InputSearch/InputSearch';
import Menu_white from '../../../assets/images/menu_white.png'
import ArrowDonw from '../../../assets/images/down_.png'


const Navbarr = () => {
  const { openNavbar, setOpenNavbar, currentColor, currentMode, setSearch_ } = useStateContext();
  const header_location = useLocation()
  const [hasnNot, setHasnNot] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const hiddenInput = header_location.pathname.startsWith("/user")
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de inicio de sesión
  const navigate = useNavigate()
  const log_ = header_location.pathname.startsWith("/log")
  const login_ = header_location.pathname.startsWith("/login")
  const recover_account = header_location.pathname.startsWith("/recover-account")
  const verification_code = header_location.pathname.startsWith("/verification-code")
  const new_password = header_location.pathname.startsWith("/new-password")
  const [username, setUsername] = useState("")
  
  useEffect(() => {
    if(log_ || login_ || recover_account || verification_code || new_password){
      return setHasnNot(true)
    }
    return setHasnNot(false)
  }, [header_location.pathname])
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem("userWeb")
    if(user){
      let firstLetter = user.charAt(0).toUpperCase();
      setUsername(firstLetter)
    }
    if(token){
      setIsLoggedIn(true);
    }
  }, []);
  
  const {idUser} = useParams()
  const [idUserLocal,setIdUserLocal] = useState()
  const handleActiveNavbar = () => setOpenNavbar(!openNavbar);
  useEffect(()=>
  {

    setIdUserLocal(localStorage.getItem("ref"))
  },[])

  const routes = [
    { id: 1, text: "Inicio", url: "/" },
    { id: 8, text: "Mi perfil", url: `/user/dashboard/${idUserLocal}` },
    { id: 2, text: "Inicia sesión", url: "/login" },
    { id: 3, text: "Únete", url: "/log" },
    { id: 4, text: "Guia para autores", url: "/guide-authors" },
    { id: 5, text: "Acerca de", url: "/about" },
    { id: 6, text: "Misión y Visión", url: "/mission-vision" },
    { id: 7, text: "Políticas de la revista", url: "/magazine-policies" },
    { id: 9, text: "Cerrar sesión", url: "/logout" },
  ];

  const handleLogOut = () => {

    localStorage.removeItem('token');
    localStorage.removeItem("ref")
    localStorage.removeItem("userWeb")
    setIsLoggedIn(false);
    window.location.replace('/');
  }
 
  return (
    <nav className='bg-bg-gray-primary dark:bg-bg-dark-secondary Navbarr_' id='nav_header1'>
        <div className="cnt_logo">
            <NavLink to={"/"}>
                <img className="img_logo" src={currentMode === "Dark" ?  logo_dark : logo_light} alt="" />
            </NavLink>
        </div>
        <div className={`list_options ${hasnNot && "hidden_element"}`} id="inse_seun_3elem">
          <ul className="cnt_ul">
            <li>
              <NavLink
                to="/"
                className="navlinks_s dark:text-white"
              >
                <span>Inicio</span>
              </NavLink>
            </li>
            {!hiddenInput &&
                <InputSearch placeholder={"Buscar... ejemplo: Autor, titulo, doi"} id={"search199"} onChange={(e) => setSearch_(e.target.value)}/>
            }
            {isLoggedIn ? (
              <div className='profile_a'>
                <Button tooltip='Mi perfil' tooltipOptions={{position: 'bottom'}} className='cnt_profile' onClick={() => navigate(`/user/dashboard/${idUserLocal}`)} >
                  {username}
                </Button>
                <button onClick={() => setOpenModal(!openModal)}>
                  <img src={ArrowDonw} alt="" className={`Arrow_donw ${openModal && "rotate_"}`}/>
                </button>
                {openModal && 
                  <div className="modal_">
                    <button className="log_out" onClick={() => handleLogOut()}>Cerrar sesión</button>
                  </div>
                }
              </div>
      
              ) : (
                <div className="flex gap-5">
                <li>
                  <NavLink
                    to="/login"
                    className="navlinks_s dark:text-white"
                    // style={activeLinks}
                  >
                    <span>Inicia sesión</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/log"
                    className="navlinks_s dark:text-white"
                    // style={activeLinks}
                  >
                    <span>Únete</span>
                  </NavLink>
                </li>
              </div>)}
          </ul>
        </div>

        <div className="cnt_menu" onClick={() => handleActiveNavbar()}>
          <img src={Menu_white} alt="" className='icon_white'/>
        </div>

        {openNavbar && (
          <div>
            <div className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"></div>
            <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
              <div className="flex flex-row-reverse items-center justify-between">
                <button
                  className="-m-1 p-1"
                  type="button"
                  tabIndex="0"
                  onClick={() => setOpenNavbar(false)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                  >
                    <path
                      d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navegación
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {routes.map((route, idx) => {
                    if (route.text === "Inicia sesión" || route.text === "Únete") {
                      if (isLoggedIn) {
                        return null;
                      } else {
                        return (
                          <li
                            key={route.id}
                            onClick={() => setOpenNavbar(false)}
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                          >
                            <NavLink to={route.url}>{route.text}</NavLink>
                          </li>
                        );
                      }
                    } else if (route.text === "Mi perfil") {
                      if (isLoggedIn) {
                        return (
                          <li
                            key={route.id}
                            onClick={() => setOpenNavbar(false)}
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                          >
                            <NavLink to={route.url}>{route.text}</NavLink>
                          </li>
                        );
                      } else {
                        return null;
                      }
                    } else if (route.text === "Cerrar sesión") {
                      if (isLoggedIn) {
                        return (
                          <li
                            key={route.id}
                            onClick={() => {
                              handleLogOut();
                              setOpenNavbar(false);
                            }}
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                          >
                            <NavLink to={route.url}>{route.text}</NavLink>
                          </li>
                        );
                      } else {
                        return null;
                      }
                    } else {
                      return (
                        <li
                          key={route.id}
                          onClick={() => setOpenNavbar(false)}
                          className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          <NavLink to={route.url}>{route.text}</NavLink>
                        </li>
                      );
                    }
                  })}
                </ul>
              </nav>
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbarr