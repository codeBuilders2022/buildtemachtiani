import React, { useEffect } from "react";
import { Header } from "../../../components";
import journal from "../../../assets/PDF/RICEDUT-ENERO-2021.pdf"

import "./Articles.scss";

//Assets
import Pdf_icon from '../../../assets/images/pdf_icon.png'
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { useStateContext } from "../../../contexts/ContextProvider";
import { getAxiosHomeArticles } from "../../../Api/Home/home";
import { useState } from "react";
import { IncorrectModal } from "../../../components/molecules/modals/Modals";
import { Decrypt } from "../../../utilities/Hooks";
import { Link } from "react-router-dom";

const Articles = () => {
  const { idArticle } = useStateContext()
  const [notesActive, setNotesActive] = useState(false)
  const [historial, setHistorial] = useState(false)
  const dirAPI = process.env.REACT_APP_API_URL
  const id = Decrypt(idArticle)
  const [dataArt, setDataArt] = useState()
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  useEffect(() => {
    getDatas()
  }, []);


  const getDatas = async () => {
    try {
      // Hacemos una llamada concurrente a la API utilizando Promise.all()
      const [resCommittees] = await Promise.all([
        getAxiosHomeArticles(`/api/current-issues/${id}?populate=*`)
      ]);
      const data = resCommittees.data.attributes
      data['year'] = Number(data.publishedAt.substring(0, 4))
      const month = months.filter((m, index) => index + 1 == Number(data.publishedAt.substring(5, 7)))
      data['month'] = month[0]
      data['monthN'] = data.publishedAt.substring(5, 7)
      data['day'] = Number(data.publishedAt.substring(8, 10))
      data['deltaYear'] = Number(data.publishedAt.substring(0, 4)) - Number(data.dateSend.substring(0, 4))
      data['deltaMonth'] = Number(data.publishedAt.substring(5, 7)) - Number(data.dateSend.substring(5, 7))
      data['Month'] = Number(data.dateSend.substring(5, 7))
      data['Day'] = Number(data.dateSend.substring(8, 10))
      data['deltaDay'] = Number(data.publishedAt.substring(8, 10)) - Number(data.dateSend.substring(8, 10))
      setDataArt(data)
      console.log(data, "holaaaa")
    } catch (error) {
      IncorrectModal("¡Algo salió mal, intentalo más tarde!", true);
    }
  };



  return (
    <div className="Articless dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex">
      {/* <Grid> */}
      <div style={{ width: '100%' }}>
        <div className="type">
          <p>{dataArt?.type}</p>
        </div>
        <div className="flex items-center relative">
          <div className="info">
            <h2>{dataArt?.title}</h2>
            <div className="authors">
              <h3>{dataArt?.authors}</h3>
              <div className="notes" onClick={() => setNotesActive(true)}>Notas del autor</div>
              <Dialog header="Notas del autor" visible={notesActive} style={{ width: '50vw' }} onHide={() => setNotesActive(false)}>
                <div dangerouslySetInnerHTML={{ __html: dataArt?.notes }}></div>
              </Dialog>
            </div>
          <p className="institute">{dataArt?.institute}</p>
          </div>
        </div>
        <Link className="doi" to={`/article/${idArticle}`}>{dataArt?.doi}</Link>
        <div className="historial">
          <p className="date">Publicado: <span className="font-normal">{dataArt?.day} de {dataArt?.month} de {dataArt?.year}</span></p>
          <div className="notes" onClick={() => setHistorial(true)}>Historial del artículo</div>
          <Dialog header="Historial del artículo" visible={historial} style={{ width: '50vw' }} onHide={() => setHistorial(false)}>
            <div className="containerHis">
              <div className="dateHistorial">
                <p className="date">Recibido: <span className="font-normal">{dataArt?.dateSend}</span></p>
                <p className="date">Aceptado:  <span className="font-normal">{dataArt?.dateAccept}</span></p>
                <p className="date">Publicado: <span className="font-normal">{dataArt?.year}-{dataArt?.monthN}-{dataArt?.day}</span></p>
              </div>
              {dataArt?.deltaMonth >= 0 && dataArt?.deltaDay >= 0 &&
                <p className="time">El tiempo de publicación fue de {dataArt?.deltaYear} año(s), {dataArt?.deltaMonth} mes(es) y {dataArt?.deltaDay} día(s)</p>
              }
              {dataArt?.deltaMonth < 0 && dataArt?.deltaDay >= 0 &&
                <p className="time">El tiempo de publicación fue de {dataArt?.deltaYear - 1} año(s), {Number(dataArt?.monthN) + (12 - dataArt?.Month)} mes(es) y {dataArt?.deltaDay} día(s)</p>
              }
              {dataArt?.deltaMonth > 0 && dataArt?.deltaDay < 0 &&
                <p className="time">El tiempo de publicación fue de {dataArt?.deltaYear} año(s), {dataArt?.deltaMonth - 1} meses y {dataArt?.deltaDay * -1} día(s)</p>
              }
              {dataArt?.deltaMonth < 0 && dataArt?.deltaDay < 0 &&
                <p className="time">El tiempo de publicación fue de {dataArt?.deltaYear - 1} año(s), {Number(dataArt?.monthN) + (12 - dataArt?.Month)-1} mes(es) y {dataArt?.day + (30 - dataArt?.Day)} día(s)</p>
              }
            </div>
          </Dialog>
        </div>
        <Divider />
        <div className=" bg-slate-100 dark:bg-gray-500 rounded-2xl mb-10 Articles_">
          <div className="secct1_s">
            <h1 className="title_secct_">Resumen</h1>
            <div dangerouslySetInnerHTML={{ __html: dataArt?.abstract }}></div>
          </div>
          <Divider />
          <div className="secct2_s">
            <div dangerouslySetInnerHTML={{ __html: dataArt?.body }}></div>
            <p>
              {dataArt?.info}
            </p>
          </div>
          <Divider />
          <div className="secct2_s">
            <div dangerouslySetInnerHTML={{ __html: dataArt?.reference }}></div>
            <p>
              {dataArt?.info}
            </p>
          </div>
          <div className="secct3_s">
            <div className="cnt_pdf" >
              <a href={`${dataArt?.pdf.data[0].attributes.url}`} download>
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
