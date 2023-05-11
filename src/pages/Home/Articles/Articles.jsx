import React, { useEffect } from "react";
import { Header } from "../../../components";
import journal from "../../../assets/PDF/RICEDUT-ENERO-2021.pdf"

import "./Articles.scss";

//Assets
import Pdf_icon from '../../../assets/images/pdf_icon.png'

import Grid from "../../../components/atoms/Grid/Grid";
import { useStateContext } from "../../../contexts/ContextProvider";
import { getAxiosHomeArticles } from "../../../Api/Home/home";
import { useState } from "react";
import { IncorrectModal } from "../../../components/molecules/modals/Modals";

const Articles = () => {
  const { idArticle } = useStateContext()
  const [dataArt, setDataArt] = useState()
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  useEffect(() => {
    getDatas()
  }, []);

  const getDatas = async () => {
    try {
      // Hacemos una llamada concurrente a la API utilizando Promise.all()
      const [resCommittees] = await Promise.all([
        getAxiosHomeArticles(`/api/current-issues/${idArticle}`)
      ]);

      const data = resCommittees.data.attributes
      data['year'] = Number(data.publishedAt.substring(0, 4))
      const month = months.filter((m, index) => index + 1 == Number(data.publishedAt.substring(5, 7)))
      data['month'] = month[0]
      data['day'] = Number(data.publishedAt.substring(8, 10))
      setDataArt(data)
    } catch (error) {
      IncorrectModal("¡Algo salió mal, intentalo más tarde!", true);
    }
  };



  return (
    <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex">
      {/* <Grid> */}
      <div>
        <div className="flex items-center">
          <Header
            category={`${dataArt?.title}`}
            title={`${dataArt?.authors}`}
            day={`${dataArt?.day}`}
            month={`${dataArt?.month}`}
            year={`${dataArt?.year}`}
          />
        </div>
        <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl mb-10 Articles_">
          <div className="secct1_s">
            <h1 className="title_secct_">RESUMEN</h1>
            <p>
              {dataArt?.abstract}
            </p>
          </div>
          <div className="secct2_s">
            <h1 className="title_secct2">INTRODUCCIÓN</h1>
            <p>
              {dataArt?.info}
            </p>
          </div>
          <div className="secct3_s">
            <div className="cnt_pdf" >
              <a href={journal} download>
                <img src={Pdf_icon} alt="" className="img_pdf" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Sidebar/> */}
      {/* </Grid> */}
    </div>
  );
};

export default Articles;
