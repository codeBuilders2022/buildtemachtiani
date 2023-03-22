import { NavLink } from "react-router-dom";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";

const NavButton = ({ customFunc, icon, color, dotColor, text }) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="group flex items-center rounded-full 
              bg-white/90 px-4 py-2 text-sm font-medium 
              text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 
              ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 
              dark:text-zinc-200 dark:ring-white/10 
              dark:hover:ring-white/20
              hover:text-teal-500 dark:hover:text-teal-400"
  >
    <span className="mr-1">{icon}</span>
    {text}
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
  </button>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    openNavbar,
    setOpenNavbar,
    currentColor
  } = useStateContext();

const activeLinks = ({isActive}) => {
  return{
    color: isActive ? currentColor : null
  }
}



  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const handleActiveNavbar = () => setOpenNavbar(!openNavbar);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        text="Ediciones"
        customFunc={handleActiveMenu}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <div className="flex flex-1 justify-end items-center gap-x-5 md:gap-x-8">
          <div className="flex flex-1 justify-end md:justify-center">
            <div className="pointer-events-auto md:hidden">
              <button
                className="group flex items-center rounded-full bg-white/90 
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

              {openNavbar ? (
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
                        <li>
                          <NavLink
                            to="/"
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            onClick={() => setOpenNavbar(false)}
                          >
                            <span>Actual</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/about"
                            className="relative block px-3 py-2 transition hover:text-teal-500  dark:hover:text-teal-400"
                            onClick={() => setOpenNavbar(false)}
                          >
                            <span>Quiénes Somos</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/mision"
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            onClick={() => setOpenNavbar(false)}
                          >
                            <span>Misión</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/instrucciones"
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            onClick={() => setOpenNavbar(false)}
                          >
                            <span>Instrucciones para Autores</span>
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>

            <nav className="pointer-events-auto hidden md:block">
              <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <li>
                  <NavLink
                    to="/"
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    style={activeLinks}
                  > 
                    <span>Actual</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    style={activeLinks}
                  >
                    <span>Quiénes Somos</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mision"
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    style={activeLinks}
                  >
                    <span>Misión</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instrucciones"
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    style={activeLinks}
                  >
                    <span>Instrucciones para Autores</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
