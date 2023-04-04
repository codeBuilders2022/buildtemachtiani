import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components";
import { cartData } from "../../data/dummy";
import InputSearch from "../../components/InputSearch/InputSearch";

const Investigaciones = () => {

  const [magazine, setMagazine] = useState(cartData)
  const [search, setSearch] = useState("")
  const [foundResults, setFoundResults] = useState(true);

  // useEffect(() => {
  //   if (!search) {
  //     setMagazine(cartData)
  //     return
  //   } 
  
  //   const filteredMagazine = magazine.filter((title) =>
  //     title.title.toLowerCase().includes(search.toLowerCase())
  //   )
  
  //   if (filteredMagazine.length !== magazine.length) {
  //     setMagazine(filteredMagazine)
  //   }
  //   }, [search])

  useEffect(() => {
    setMagazine((prevMagazine) => {
      const filteredMagazine = !search
        ? cartData
        : prevMagazine.filter((title) =>
            title.title.toLowerCase().includes(search.toLowerCase())
          )
  
      setFoundResults(filteredMagazine.length > 0);
  
      return filteredMagazine;
    })
  }, [search]);
  


  return (
    <div className=" dark:bg-gray-600 dark:text-white m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header
        title="Temachtiani"
        category="Revista Internacional de Ciencias de la Educación"
      />
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-end">
          <InputSearch  placeholder={"Buscar revista"} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div className="w-600 flex items-center justify-center flex-wrap ">
          {foundResults ? (
            magazine.map((item) => (
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
            ))
          ):(
            <div className="w-full h-60 flex justify-center text-2xl">
              No se encontró ningún resultado
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Investigaciones;
