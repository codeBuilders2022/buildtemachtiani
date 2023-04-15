import React from "react";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

import "./MagazinePolicies.scss";
import Cards from "../../components/atoms/Cards/Cards";

const MagazinePolicies = () => {
  const { currentColor } = useStateContext();

  const options = [
    {
      id: 1,
      text: "Enfoque y alcance",
    },
    {
      id: 2,
      text: "Políticas de sección",
    },
    {
      id: 3,
      text: "Proceso de evaluación por pares",
    },
    {
      id: 4,
      text: "Frecuencia de publicación",
    },
    {
      id: 5,
      text: "Política de acceso abierto",
    },
    {
      id: 6,
      text: "Código de ética",
    },
    {
      id: 7,
      text: "Incluida en los índices, catálogos, bases de datos y portales:",
    },
    {
      id: 8,
      text: "Cesión de Derechos",
    },
    {
      id: 9,
      text: "Acceso abierto/ Sin cobro de Publicación o Resguardo",
    },
    {
      id: 10,
      text: "Utilización de software anti-plagio",
    },
    {
      id: 11,
      text: "Aviso de Privacidad",
    },
  ];

  const policies_secctions = [
    {
        id: 1,
        title: "Páginas preliminares",
        send: false,
        inde: true,
        pares: true
    },
    {
        id: 2,
        title: "Artículos",
        nameEditor: "Diego Alberto Venegas Hernández",
        send: true,
        inde: true,
        pares: true
    },
    {
        id: 3,
        title: "Reseñas críticas de libros",
        nameEditor: "Diego Alberto Venegas Hernández",
        send: true,
        inde: true,
        pares: true
    },
    {
        id: 4,
        title: "Sección documental",
        send: true,
        inde: true,
        pares: true
    },
    {
        id: 5,
        title: "Sección Informatica",
        send: true,
        inde: true,
        pares: true
    },
    {
        id: 6,
        title: "Notas Estadísticos-Sociales",
        send: true,
        inde: true,
        pares: true
    },
    {
        id: 7,
        title: "Temas de conyuntura",
        send: false,
        inde: true,
        pares: true
    },
  ]

  return (
    <div className="dark:bg-gray-600 dark:text-white MagazinePolicies">
      <Header category={"Politicas"} title={"Políticas de la revista"} />
      <Cards className={"inside_magazine"}>
        <div>
            {options.map((_, idx) => (
            <h3 className="options" key={idx}>
                {_.text}
            </h3>
            ))}
        </div>
        <div className="secct1_">
          <h1 className="title_secct1">Enfoque y alcance</h1>
          <p>
            La Revista Internacional de Ciencias de la Educación Temachtiani, fue fundada en 1939, es la más
            antigua de su género y una de las más reconocidas en América Latina
            por su calidad académica. A través de su historia y de su
            publicación ininterrumpida, ha reflejado tanto los cambios ocurridos
            en el desarrollo teórico y empírico de la sociología a lo largo de
            sus ocho décadas, como los problemas sociales más sobresalientes de
            cada época. 
          </p>
          <p>
            Con el propósito fundamental de difundir el conocimiento
            y promover el debate académico, la revista ha tenido diferentes
            etapas. Actualmente, con un carácter internacional y con una
            periodicidad trimestral, publica trabajos originales, que son
            resultado de investigación y que contribuyen al avance del
            conocimiento en la sociología en todos sus campos y temas, así como
            al abordaje sociológico en interacción con otras disciplinas y otras
            ciencias sociales que la enriquecen.
          </p>
          <p>
            Incluye artículos que contribuyen al desarrollo teórico, a la
            innovación metodológica o al avance de la comprensión de los
            procesos sociales de distintos países y regiones, privilegiando
            siempre la calidad y el rigor académico.
          </p>
        </div>
        <div className="secct2_">
            <h1 className="title_secct2">Politicas de sección</h1>
            <div className="secct_2inside">
                {policies_secctions.map((_, idx) => (
                    <div className="inside_secct_2" key={idx}>
                        <h3 className="_title">{_.title}</h3>
                        <div className="block_checks">
                            <div className="inside_block">
                                <input type="checkbox" className="check_box_" checked={_.send} readOnly/>
                                <label className="incisos">Abrir envíos</label>
                            </div>
                            <div className="inside_block">
                                <input type="checkbox" className="check_box_" checked={_.inde} readOnly/>
                                <label className="incisos">Indizado</label>
                            </div>
                            <div className="inside_block">
                                <input type="checkbox" className="check_box_" checked={_.pares} readOnly/>
                                <label className="incisos">Evaluado por pares</label>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Cards>
    </div>
  );
};

export default MagazinePolicies;
