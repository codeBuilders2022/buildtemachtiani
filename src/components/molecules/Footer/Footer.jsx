import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
//assets
import RICET from '../../../assets/images/logo_70_black.png'
import RICET_W from '../../../assets/images/logo_70.png'


import "./Footer.scss"

const Footer = () => {
  const { currentColor, currentMode } = useStateContext();

  const option = [
    {
      id: 1,
      text: "Politicas de privacidad",
      url: "/privacy-policies"
    },
    {
      id: 2,
      text: "Avisos Legales",
      url: "/legal-notices"
    },
    {
      id: 3,
      text: "Preguntas frecuentes",
      url: "/frequent-questions"
    },
    
  ]

  return (
      <footer className="Footer_r" id="footer_foo1">
        <div className="inside_On_">
          <div className="cnt_secct1_f text-black dark:text-white">
              <img src={currentMode === "Dark" ? RICET_W : RICET} alt="" className="ricet_logo"/>
              <h1>ISSN-e (En proceso)</h1>
          </div>
          <div className="legals_ls">
            <div className="inside_ls">
              <h3 className="dark:text-gray-200 text-gray-700">
                <strong>Legales</strong>
              </h3>
              <div className="list_options">
                {option?.map((_, idx) => (
                  <NavLink key={idx} to={_.url} className="secct-h3 text-black dark:text-white">{_.text}</NavLink>
                ))}
              </div>

            </div>
          </div>
          <div className="scct3">
            <div className="inside_s3 text-black dark:text-white">
                <h3 className="dark:text-gray-200 text-gray-700">
                    <strong>Contacto</strong>
                </h3>
                <div className="spna_lo">
                    <a
                        href="mailto:ricedut@gmail.com"
                        className="dark:text-sky-200 text-sky-900"
                        >
                        educiencia@revistatemachtiani.net
                    </a>
                    <h1>San Lorenzo 381 Guadalajara, Jalisco - México</h1>
                </div>
            </div>
                
          </div>
        </div>
        <div className="inside_tw_ bg-white dark:bg-gray-600" style={{borderColor: currentColor}}>
            <p className="dark:text-gray-200 text-gray-700">
                <strong>Desarrollado por CodeBuilders:</strong>
            </p>
            <div className="class_span dark:text-sky-200 text-sky-900">
                <a href="https://businesscodebuilders.com/" target="_blank" rel="noreferrer">businesscodebuilders.com</a>
            </div>
        </div>
      </footer>
  );
};

export default Footer;
