import React, { createContext, useState, useContext, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(window.screen.width);
  const [currentColor, setCurrentColor] = useState("#87000C");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenuRevistas, setActiveMenuRevistas] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false)
  const [openNavbar1, setOpenNavbar1] = useState(false)
  const id = String(window.location.pathname)
  const [search_, setSearch_] = useState("")
  const [idArticle, setIdArticle] = useState(id);
  const url = "/article/"

  useEffect(() => {
    setIdArticle(id.substring(9))
  }, [])

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        activeMenu,
        idArticle,
        setIdArticle,
        setActiveMenu,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        setCurrentColor,
        setCurrentMode,
        activeMenuRevistas,
        setActiveMenuRevistas,
        openNavbar,
        setOpenNavbar,
        openNavbar1,
        setOpenNavbar1,
        search_,
        setSearch_,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
