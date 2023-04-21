import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import InputSearch from "../../atoms/InputSearch/InputSearch";

//Assets
import logo_dark from '../../../assets/images/mode_dark.png'
import logo_light from '../../../assets/images/mode_light.png'

const Navbar = () => {
  const { openNavbar, setOpenNavbar, currentColor, currentMode } =
    useStateContext();

  const activeLinks = ({ isActive }) => {
    return {
      color: isActive ? currentColor : null,
    };
  };

  const handleActiveNavbar = () => setOpenNavbar(!openNavbar);
  const [navbarState, setNavbarState] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbarState(true);
    } else {
      setNavbarState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  }, []);

  const routes = [
    { id: 1, text: "Inicio", url: "/" },
    { id: 2, text: "Guia para autores", url: "/guide-authors" },
    { id: 3, text: "Acerca de", url: "/about" },
    { id: 4, text: "Misión y Visión", url: "/mission-vision" },
    { id: 5, text: "Políticas de la revista", url: "/magazine-policies" },
  ];

  const header_location = useLocation()
  const hasnNot = header_location.pathname.startsWith("/log")

  return (
    <div className={`fixed bg-slate-100 dark:bg-gray-800 navbar w-full h-16 ${navbarState}`}>
      <div className="pointer-events-auto md:hidden h-full flex items-center justify-end px-6 bg-bg-gray-primary dark:bg-bg-dark-secondary">
        <div className="h-16">
          <NavLink to={"/"}>
                <img className="w-full h-full object-cover" src={currentMode === "Dark" ?  logo_dark : logo_light} alt="" />
            </NavLink>
        </div>
        
        <button className="group flex items-center rounded-full bg-white/90 
                      px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg 
                      shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur 
                      dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 
                      dark:hover:ring-white/20"
          type="button"
          onClick={() => handleActiveNavbar()}
        >
          Menú
          <svg
            viewBox="0 0 8 6"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none"></path>
          </svg>
        </button>

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
      </div>

      <nav className="pointer-events-auto hidden  md:bg-bg-gray-primary md:ring-1 md:ring-zinc-900/5 md:dark:ring-white/10 md:backdrop-blur md:dark:bg-bg-dark-secondary md:z-50 h-full md:flex md:items-center md:w-full md:justify-between px-6">
        <div className="h-16">
            <NavLink to={"/"}>
                <img className="w-full h-full object-cover" src={currentMode === "Dark" ?  logo_dark : logo_light} alt="" />
            </NavLink>
        </div>
        <div className={`${hasnNot && "hidden"}`} id="inse_seun_3elem">
          <ul className="flex items-center gap-9">
            <li>
              <NavLink
                to="/"
                className="relative dark:text-white  block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 text-lg font-bold"
                // style={activeLinks}
              >
                <span>Inicio</span>
              </NavLink>
            </li>
            <InputSearch />
            <div className="flex">
              <li>
                <NavLink
                  to="/"
                  className="relative dark:text-white  block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 text-lg font-bold"
                  // style={activeLinks}
                >
                  <span>Inicia sesión</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/log"
                  className="relative dark:text-white  block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 text-lg font-bold"
                  // style={activeLinks}
                >
                  <span>Únete</span>
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
