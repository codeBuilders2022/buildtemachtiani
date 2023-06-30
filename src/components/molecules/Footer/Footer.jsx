import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";

import "./Footer.scss"

const Footer = () => {
  const { currentColor } = useStateContext();

  return (
      <footer className="Footer_r" style={{borderColor: currentColor}} id="footer_foo1">
        <section className="md:flex md:justify-around secct_1_m">
          <div className="dark:text-gray-200 text-gray-700 mr-3">
            <h1 className="text-lg uppercase ">
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
            <h1>San Lorenzo 381 Guadalajara, Jalisco - México</h1>
          </div>
        </section>
        <section className="secc_bulders">
          <p className="dark:text-gray-200 text-gray-700">
            <strong>© 2022 Desarrollado por CodeBuilders</strong>
          </p>
          <div className="class_span dark:text-sky-200 text-sky-900">
            <a href="https://businesscodebuilders.com/" target="_blank" rel="noreferrer">businesscodebuilders.com</a>
          </div>
        </section>
      </footer>
  );
};

export default Footer;
