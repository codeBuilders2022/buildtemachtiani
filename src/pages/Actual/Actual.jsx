import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import svg from "../../data/Titulo-2.svg";
import svgWhite from "../../data/Sidebar.svg";
import { ultimoNumero, DescriptionUltimoNumero } from "../../data/dummy";
import Button from "../../components/atoms/Button/Button";
import { useStateContext } from "../../contexts/ContextProvider";

const Actual = () => {

  const navigate = useNavigate()

  const {
    currentMode
  } = useStateContext();
  
  return (
    <>
      <div className="flex justify-center m-2 md:m-1 p-2 md:p-5 items-center mt-14">
        <img src={currentMode === "Dark" ?  svgWhite: svg} alt="Banner" className="w-80 md:w-800" />
      </div>
      <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 mt-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Último Número" />
        <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl opacity-90">
          {ultimoNumero.map((item) => (
            <div key={item.clave}>
              <h3 className="text-justify">{item.title}</h3>
              <div className="md:flex ms:gap-5 mt-5">
                <div className="flex justify-center">
                  <div className="">
                    <NavLink to="/NumeroActual">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-80 md:w-96"
                      />
                    </NavLink>
                  </div>
                </div>

                <div className="md:pl-20 md:pr-10 md:flex md:flex-col md: justify-center md:w-800 ">
                  <h1 className="text-lg md:pb-8">
                    <strong>Publicadores:</strong> {item.publicado}
                  </h1>
                  <h1 className="text-lg md:pb-3">
                    <strong>{item.titleDescription}</strong>
                  </h1>
                  <DescriptionUltimoNumero />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-end">
            <Button title={"Enviar un articulo"} onCLick={() => navigate("/instrucciones")}/>
        </div>
      
      </div>
    </>
  );
};

export default Actual;
