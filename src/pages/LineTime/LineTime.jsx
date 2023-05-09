import React from "react";

import "./LineTime.scss";
import { Header } from "../../components";
import StepsLine from "../../components/organisms/StepsLine/StepsLine";
import Back from "../../components/atoms/Back/Back";

const LineTime = () => {
  return (
    <div className="dark:bg-gray-600 bg-white dark:text-white LineTime">
    <Back className={"_back_"} url={"/article/dashboard"}/>
      <Header title={"Etapas de mi artículo"} />
      <div className="cnt_steps bg-slate-100 dark:bg-gray-500">
        <StepsLine />
      </div>
      <div className="description_s">
        <h1 className="title_descrip">
          Atención al shock cardiogénico en centros con programa de código
          infarto sin cirugía cardiaca.
        </h1>
        <div className="block_descrip">
          <h2>Resumen</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur et alias nobis unde, maxime cumque sed adipisci tempora
            dolor, quod blanditiis fugit voluptate enim omnis, quam iste rerum
            veritatis aperiam. Culpa inventore, aperiam fugit, deserunt rerum
            pariatur consequuntur quas itaque maxime rem facilis possimus qui,
            voluptatum sed corrupti ad mollitia repellat est vitae similique?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur et alias nobis unde, maxime cumque sed adipisci tempora
            dolor, quod blanditiis fugit voluptate enim omnis, quam iste rerum
            veritatis aperiam. Culpa inventore, aperiam fugit, deserunt rerum
            pariatur consequuntur quas itaque maxime rem facilis possimus qui,
            voluptatum sed corrupti ad mollitia repellat est vitae similique?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur et alias nobis unde, maxime cumque sed adipisci tempora
            dolor, quod blanditiis fugit voluptate enim omnis, quam iste rerum
            veritatis aperiam. Culpa inventore, aperiam fugit, deserunt rerum
            pariatur consequuntur quas itaque maxime rem facilis possimus qui,
            voluptatum sed corrupti ad mollitia repellat est vitae similique?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineTime;
