import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();

  return (
      <footer className="m-10 mt-24" id="footer_foo1">
        <div
          className="border-t-2 border-solid mb-5"
          style={{ borderColor: currentColor }}
        ></div>
        <div className="md:flex md:justify-around">
          <div className="dark:text-gray-200 text-gray-700 mr-3">
            <h1 className="text-lg uppercase mb-5">
              Revista internacional de Ciencias de la Educación Temachtiani
            </h1>
            <h1>ISSN-e (En proceso)</h1>
            <span>
              <strong>Contacto principal </strong>
              <a
                href="mailto:ricedut@gmail.com"
                className="dark:text-sky-200 text-sky-900"
              >
                educiencia@revistatemachtiani.net
              </a>
            </span>
            <h1>San Lorenzo 381 Guadalajara - México</h1>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
