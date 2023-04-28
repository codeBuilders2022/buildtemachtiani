//styles
import "./HeaderAuth.scss"

//assets
import Menu_white from '../../../assets/images/menu_white.png'
import { useStateContext } from "../../../contexts/ContextProvider";
import { NavLink } from "react-router-dom";


const HeaderAuth = () => {

    const { openNavbar1, setOpenNavbar1, currentColor, currentMode } = useStateContext();
    const handleActiveNavbar = () => setOpenNavbar1(!openNavbar1);

    const routess = [
        { id: 1, text: "Inicio", url: "/" },
        { id: 2, text: "Mis artículos", url: "/" },
        { id: 3, text: "Instrucciones para autores", url: "/log" },
    ];


    return (
        <header className='HeaderAuth'>
            <div className="Container">
                <button className="avatar">JA</button>
                <nav className="options">
                    <button>Inicio</button>
                    <button>Mis artículos</button>
                    <button>Instrucciones para autores</button>
                    <div className="cnt_menu" onClick={() => handleActiveNavbar()}>
                        <img src={Menu_white} alt="" className='icon_white' />
                    </div>

                    {openNavbar1 && (
                        <div>
                            <div className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"></div>
                            <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
                                <div className="flex flex-row-reverse items-center justify-between">
                                    <button
                                        className="-m-1 p-1"
                                        type="button"
                                        tabIndex="0"
                                        onClick={() => setOpenNavbar1(false)}
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
                                        {routess.map((e, idx) => {
                                            return (
                                                <li
                                                    key={idx}
                                                    onClick={() => setOpenNavbar1(false)}
                                                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                                >
                                                    <NavLink to={e.url}>{e.text}</NavLink>
                                                </li>
                                            )
                                        }
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default HeaderAuth