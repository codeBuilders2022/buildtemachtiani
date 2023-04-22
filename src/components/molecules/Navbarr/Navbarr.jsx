import React from 'react'
import { useStateContext } from "../../../contexts/ContextProvider";
import { NavLink, useLocation } from 'react-router-dom'
import "./Navbarr.scss"

//Assets
import logo_dark from '../../../assets/images/logo_70.png'
import logo_light from '../../../assets/images/logo_70_black.png'
import InputSearch from '../../atoms/InputSearch/InputSearch';
import Menu_white from '../../../assets/images/menu_white.png'


const Navbarr = () => {
  const { openNavbar, setOpenNavbar, currentColor, currentMode } = useStateContext();

  const header_location = useLocation()
  const hasnNot = header_location.pathname.startsWith("/log")

  const handleActiveNavbar = () => setOpenNavbar(!openNavbar);

  const routes = [
    { id: 1, text: "Inicio", url: "/" },
    { id: 1, text: "Inicia sesión", url: "/" },
    { id: 1, text: "Únete", url: "/log" },
    { id: 2, text: "Guia para autores", url: "/guide-authors" },
    { id: 3, text: "Acerca de", url: "/about" },
    { id: 4, text: "Misión y Visión", url: "/mission-vision" },
    { id: 5, text: "Políticas de la revista", url: "/magazine-policies" },
  ];

  return (
    <nav className='bg-bg-gray-primary dark:bg-bg-dark-secondary Navbarr_'>
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
            <InputSearch />
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
            </div>
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
                  {routes.map((_, idx) => (
                    <li
                      key={idx}
                      onClick={() => setOpenNavbar(false)}
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      <NavLink to={_.url}>{_.text}</NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbarr