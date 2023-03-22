import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(window.screen.width);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenuRevistas, setActiveMenuRevistas] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false)

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
