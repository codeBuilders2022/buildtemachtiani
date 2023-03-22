import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import logo004 from "../../data/Sidebar.svg";

import { nRevistas } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    currentColor,
    activeMenuRevistas,
    setActiveMenuRevistas,
  } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const handleActivelistRevistas = () =>
    setActiveMenuRevistas(!activeMenuRevistas);

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-secondary-dark-bg";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-slate-600 m-2";

  return (
    
      <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
        {activeMenu && (
          <>
            <div className="flex justify-center items-center">
              <div>
                <Link
                  to="/"
                  onClick={handleCloseSideBar}
                  className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tinght dark:text-white text-slate-900"
                >
                  <img src={logo004} alt="Logo" width={200} />
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                  }
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </div>
              <div
                className="border-t-2 border-solid mt-5"
                style={{ borderColor: currentColor }}
              ></div>
            </div>

            <div className="mt-10">
              <NavLink
                to="/NumeroActual"
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <p className="text-white pr-3 uppercase">Número Actual</p>
              </NavLink>

              {nRevistas.map((revista) => (
                <div key={revista.titleR}>
                  <div className="flex items-center">
                    <NavLink
                      to="/Investigaciones"
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <p className="text-white pr-3 uppercase">
                        {revista.titleR}
                      </p>
                    </NavLink>
                    <button onClick={() => handleActivelistRevistas()}>
                      <svg
                        opacity="0.5"
                        height="20"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="20"
                        data-view-component="true"
                        className="hover:bg-red-300 rounded-full
                      "
                      >
                        <path
                          fill="white"
                          d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* //////////////////////////////////////////////////////////////////////////// */}
                  {activeMenuRevistas ? (
                    <>
                      {revista.nombreRevista.map((i) => (
                        <NavLink
                          key={i.id}
                          to={`/ricedut/${i.id}/?${i.nombre}`}
                          onClick={handleCloseSideBar}
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? currentColor : "",
                          })}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          <span className="capitalize text-white">
                            {i.nombre}
                          </span>
                        </NavLink>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
    </div>
  );
};

export default Sidebar;
