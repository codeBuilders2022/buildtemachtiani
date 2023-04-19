import React from "react";
import { Header } from "../../../components";
import journal from "../../../assets/PDF/RICEDUT-ENERO-2021.pdf"

import "./Articles.scss";

//Assets
import Pdf_icon from '../../../assets/images/pdf_icon.png'

import Grid from "../../../components/atoms/Grid/Grid";

const Articles = () => {
  return (
    <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex">
      {/* <Grid> */}
        <div>
          <div className="flex items-center">
            <Header
              category="Atención al shock cardiogénico en centros con programa de código infarto sin cirugía cardiaca. "
              title="Diego Alberto Venegas Hernandez"
            />
          </div>
          <div className="p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl mb-10 Articles_">
            <div className="secct1_s">
              <h1 className="title_secct_">ABSTRACT</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur et alias nobis unde, maxime cumque sed adipisci
                tempora dolor, quod blanditiis fugit voluptate enim omnis, quam
                iste rerum veritatis aperiam. Culpa inventore, aperiam fugit,
                deserunt rerum pariatur consequuntur quas itaque maxime rem
                facilis possimus qui, voluptatum sed corrupti ad mollitia
                repellat est vitae similique? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Consequatur et alias nobis unde,
                maxime cumque sed adipisci tempora dolor, quod blanditiis fugit
                voluptate enim omnis, quam iste rerum veritatis aperiam. Culpa
                inventore, aperiam fugit, deserunt rerum pariatur consequuntur
                quas itaque maxime rem facilis possimus qui, voluptatum sed
                corrupti ad mollitia repellat est vitae similique? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Consequatur et
                alias nobis unde, maxime cumque sed adipisci tempora dolor, quod
                blanditiis fugit voluptate enim omnis, quam iste rerum veritatis
                aperiam. Culpa inventore, aperiam fugit, deserunt rerum pariatur
                consequuntur quas itaque maxime rem facilis p
              </p>
              <p>
                ossimus qui, voluptatum sed corrupti ad mollitia repellat est
                vitae similique? Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Consequatur et alias nobis unde, maxime cumque
                sed adipisci tempora dolor, quod blanditiis fugit voluptate enim
                omnis, quam iste rerum veritatis aperiam. Culpa inventore,
                aperiam fugit, deserunt rerum pariatur consequuntur quas itaque
                maxime rem facilis possimus qui, voluptatum sed corrupti ad
                mollitia repellat est vitae similique?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur et alias nobis unde, maxime cumque sed adipisci
                tempora dolor, quod blanditiis fugit voluptate enim omnis, quam
                iste rerum veritatis aperiam. Culpa inventore, aperiam fugit,
                deserunt rerum pariatur consequuntur quas itaque maxime rem
                facilis possimus qui, voluptatum sed corrupti ad mollitia
                repellat est vitae similique? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Consequatur et alias nobis unde,
                maxime cumque sed adipisci tempora dolor, quod blanditiis fugit
                voluptate enim omnis, quam iste rerum veritatis aperiam. Culpa
                inventore, aperiam fugit, deserunt rerum pariatur consequuntur
                quas itaque maxime rem facilis possimus qui, voluptatum sed
                corrupti ad mollitia repellat est vitae similique?
              </p>
            </div>
            <div className="secct2_s">
              <h1 className="title_secct2">RESUMEN</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur et alias nobis unde, maxime cumque sed adipisci
                tempora dolor, quod blanditiis fugit voluptate enim omnis, quam
                iste rerum veritatis aperiam. Culpa inventore, aperiam fugit,
                deserunt rerum pariatur consequuntur quas itaque maxime rem
                facilis possimus qui, voluptatum sed corrupti ad mollitia
                repellat est vitae similique? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Consequatur et alias nobis unde,
                maxime cumque sed adipisci tempora dolor, quod blanditiis fugit
                voluptate enim omnis, quam iste rerum veritatis aperiam. Culpa
                inventore, aperiam fugit, deserunt rerum pariatur consequuntur
                quas itaque maxime rem facilis possimus qui, voluptatum sed
                corrupti ad mollitia repellat est vitae similique? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Consequatur et
                alias nobis unde, maxime cumque sed adipisci tempora dolor, quod
                blanditiis fugit voluptate enim omnis, quam iste rerum veritatis
                aperiam. Culpa inventore, aperiam fugit, deserunt rerum pariatur
                consequuntur quas itaque maxime rem facilis p
              </p>
              <p>
                ossimus qui, voluptatum sed corrupti ad mollitia repellat est
                vitae similique? Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Consequatur et alias nobis unde, maxime cumque
                sed adipisci tempora dolor, quod blanditiis fugit voluptate enim
                omnis, quam iste rerum veritatis aperiam. Culpa inventore,
                aperiam fugit, deserunt rerum pariatur consequuntur quas itaque
                maxime rem facilis possimus qui, voluptatum sed corrupti ad
                mollitia repellat est vitae similique?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur et alias nobis unde, maxime cumque sed adipisci
                tempora dolor, quod blanditiis fugit voluptate enim omnis, quam
                iste rerum veritatis aperiam. Culpa inventore, aperiam fugit,
                deserunt rerum pariatur consequuntur quas itaque maxime rem
                facilis possimus qui, voluptatum sed corrupti ad mollitia
                repellat est vitae similique? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Consequatur et alias nobis unde,
                maxime cumque sed adipisci tempora dolor, quod blanditiis fugit
                voluptate enim omnis, quam iste rerum veritatis aperiam. Culpa
                inventore, aperiam fugit, deserunt rerum pariatur consequuntur
                quas itaque maxime rem facilis possimus qui, voluptatum sed
                corrupti ad mollitia repellat est vitae similique?
              </p>
            </div>
            <div className="secct3_s">
                <div className="cnt_pdf" >
                    <a href={journal} download>
                        <img src={Pdf_icon} alt="" className="img_pdf"/>
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
