import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components";
import { cartData } from "../../data/dummy";

const Investigaciones = () => {
  return (
    <div className=" dark:bg-gray-600 dark:text-white m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header
        title="Temachtiani"
        category="Revista Internacional de Ciencias de la Educación"
      />
      <div className="w-600 flex items-center justify-center flex-wrap ">
        {cartData.map((item) => (
          <div
            key={item.title}
            className="flex flex-col m-2 p-3 text-center items-center border-solid border-2 border-slate-500 
                      rounded-lg w-80 dark:border-white cursor-pointer 
                      hover:border-blue-600 
                      focus:border-blue-600
                      active:border-blue-600
                      hover:text-blue-600 
                      focus:text-blue-600 
                      active:text-blue-600
                      
                      dark:hover:border-blue-600 
                      dark:focus:border-blue-600
                      dark:active:border-blue-600
                      dark:hover:text-blue-600 
                      dark:focus:text-blue-600 
                      dark:active:text-blue-600"
          >
            <NavLink to={`/ricedut/${item.id}/?${item.title}`}>
              <img alt={item.alt} src={item.image} />
              <p className="mt-3 uppercase">{item.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investigaciones;
