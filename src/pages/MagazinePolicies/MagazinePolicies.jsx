import React, { useRef } from "react";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

import "./MagazinePolicies.scss";
import Cards from "../../components/atoms/Cards/Cards";
import Grid from "../../components/atoms/Grid/Grid";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";

const MagazinePolicies = () => {
  //   const { currentColor } = useStateContext();
 
  

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
      text: "Cesión de Derechos",
    },
    {
      id: 8,
      text: "Acceso abierto/ Sin cobro de Publicación o Resguardo",
    },
    {
      id: 9,
      text: "Utilización de software anti-plagio",
    },
    // {
    //   id: 11,
    //   text: "Aviso de Privacidad",
    // },
  ];

  const policies_secctions = [
    {
      id: 1,
      title: "Páginas preliminares",
      send: false,
      inde: true,
      pares: true,
    },
    {
      id: 2,
      title: "Artículos",
      nameEditor: "Diego Alberto Venegas Hernández",
      send: true,
      inde: true,
      pares: true,
    },
    {
      id: 3,
      title: "Reseñas críticas de libros",
      nameEditor: "Diego Alberto Venegas Hernández",
      send: true,
      inde: true,
      pares: true,
    },
    {
      id: 4,
      title: "Sección documental",
      send: true,
      inde: true,
      pares: true,
    },
    {
      id: 5,
      title: "Sección Informatica",
      send: true,
      inde: true,
      pares: true,
    },
    {
      id: 6,
      title: "Notas Estadísticos-Sociales",
      send: true,
      inde: true,
      pares: true,
    },
    {
      id: 7,
      title: "Temas de conyuntura",
      send: false,
      inde: true,
      pares: true,
    },
  ];

  const codeEtica = [
    {
      id: 1,
      text: "1. Honestidad.",
    },
    {
      id: 2,
      text: "2. Rigor científico y metodológico.",
    },
    {
      id: 3,
      text: "3. Contribución e impacto para afrontar los problemas sociales.",
    },
    {
      id: 4,
      text: "4. Crítica constructiva.",
    },
    {
      id: 5,
      text: "5. Excelencia académica en la evaluación.",
    },
    {
      id: 6,
      text: "6. Aporte original e inédito a las ciencias sociales.",
    },
  ];

  // function to go to a selected id of the page
  const scrollToMyRef = (id) => {
    document.getElementById(`${id}`)?.scrollIntoView({ behavior: "smooth" });
    // setInd(id)
};

  return (
    <div className="dark:bg-gray-600 dark:text-white MagazinePolicies">
      <Grid>
        <div>
          <Header category={"Politicas"} title={"Políticas de la revista"} />
          <Cards className={"inside_magazine"}>
            <div className="sesion_opt">
              {options.map((_, idx) => (
                <li className="options" key={idx} onClick={() => scrollToMyRef(_.id)}>
                  {_.text}
                </li>
              ))}
            </div>
            <div className="secct1_" id="1">
              <h1 className="title_secct1">Enfoque y alcance</h1>
              {/* <p>
                La Revista Internacional de Ciencias de la Educación Temachtiani,
                fue fundada en 1939, es la más antigua de su género y una de las más
                reconocidas en América Latina por su calidad académica. A través de
                su historia y de su publicación ininterrumpida, ha reflejado tanto
                los cambios ocurridos en el desarrollo teórico y empírico de la
                sociología a lo largo de sus ocho décadas, como los problemas
                sociales más sobresalientes de cada época.
              </p> */}
              <p>
                Con el propósito fundamental de difundir el conocimiento y promover
                el debate académico, la revista ha tenido diferentes etapas.
                Actualmente, con un carácter internacional y con una periodicidad
                trimestral, publica trabajos originales, que son resultado de
                investigación y que contribuyen al avance del conocimiento en la
                sociología en todos sus campos y temas, así como al abordaje
                sociológico en interacción con otras disciplinas y otras ciencias
                sociales que la enriquecen.
              </p>
              <p>
                Incluye artículos que contribuyen al desarrollo teórico, a la
                innovación metodológica o al avance de la comprensión de los
                procesos sociales de distintos países y regiones, privilegiando
                siempre la calidad y el rigor académico.
              </p>
            </div>
            <div className="secct2_" id="2">
              <h1 className="title_secct2">Politicas de sección</h1>
              <div className="secct_2inside">
                {policies_secctions.map((_, idx) => (
                  <div className="inside_secct_2" key={idx}>
                    <h3 className="_title">{_.title}</h3>
                    <div className="block_checks">
                      <div className="inside_block">
                        <input
                          type="checkbox"
                          className="check_box_"
                          checked={_.send}
                          readOnly
                        />
                        <label className="incisos">Abrir envíos</label>
                      </div>
                      <div className="inside_block">
                        <input
                          type="checkbox"
                          className="check_box_"
                          checked={_.inde}
                          readOnly
                        />
                        <label className="incisos">Indizado</label>
                      </div>
                      <div className="inside_block">
                        <input
                          type="checkbox"
                          className="check_box_"
                          checked={_.pares}
                          readOnly
                        />
                        <label className="incisos">Evaluado por pares</label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="secct3_" id="3">
              <h1 className="title_s">Proceso de evaluación por pares</h1>
              <h3 className="title_h3">Proceso de revisión</h3>
              <p>
                Para ser incluido en nuestra publicación, todo artículo será
                sometido a una fase de selección y a un proceso de dictamen. En todo
                caso, la eva­luación será inapelable. En la primera fase, el Comité
                Editorial seleccionará los artículos que corresponden con la línea
                editorial de la RICET y que cumplen con los requisitos
                indispensables de un artículo académico. Con la finalidad de
                proporcionar una respuesta lo más expedita posible, en esta fase no
                es posible proporcionar a los autores comentarios detallados sobre
                su trabajo.
              </p>
              <ul className="block_ul">
                <li>
                  1. Todos los artículos se someten a una revisón con software
                  anti-plagio, (Ithenticate).
                </li>
                <li>2. Se detectan similitudes o tipologías de plagio.</li>
                <li>
                  3. Se valora el sentido inédito, aporte y originalidad del
                  manuscrito.
                </li>
              </ul>
              <p>
                En la segunda etapa, los trabajos seleccionados serán dictaminados
                por dos o más especialistas en la materia, quienes emitirán su
                juicio de manera anónima, con base en los siguientes criterios y
                otros que juzguen pertinentes. El cual se efectua mediante la
                colaboración de evaluadores externos ajenos al equipo editorial y a
                la institución editora.
              </p>
            </div>
            <div className="secct4_" id="4">
              <h1 className="title_secct4">Frecuencia de publicación</h1>
              <p>
                Se edita trimestralmente la Revista
                Internacional de Ciencias de la Educación Temachtiani.
              </p>
            </div>
            <div className="secct5_" id="5">
              <h1 className="title_secct5">Política de acceso abierto</h1>
              <p>
                Esta revista provee acceso libre inmediato de su contenido bajo el
                principio de que hacer disponible, gratuitamente de la investigación
                al público; así apoya a un mayor intercambio de conocimiento global.
              </p>
            </div>
            <div className="secct6_" id="6">
              <h1 className="title_secct6">Código de ética</h1>
              <p>
                El Comité Editorial de la Revista Internacional de Ciencias de la
                Educación Temachtiani sólo someterá a dictamen de su cartera de
                especialistas artículos que no hayan aparecido en publicaciones
                impresas o en línea y que no estén en proceso editorial en otras
                revistas o libros, ni impresos ni electrónicos. En la primera página
                del artículo el autor deberá declarar que es original, no ha sido
                publicado y no está siendo considerado en ningún otro lugar.
              </p>
              <p>
                En la Revista Internacional de Ciencias de la Educación Temachtiani,
                cuidamos y exigimos tanto a los autores, investigadores postulantes,
                como a los especialistas, dictaminadores; un alto profesionalismo y
                un elevado sentido ético de responsabilidad para el avance de las
                ciencias sociales. Nuestro código es:
              </p>
              <div className="block_code">
                {codeEtica.map((_, idx) => (
                  <h3 className="code_h3" key={idx}>
                    {_.text}
                  </h3>
                ))}
              </div>
            </div>
            <div className="secct7_" id="7">
              <h1 className="title_secct7">Cesión de Derechos</h1>
              <p>
                El autor se comprometerá a firmar una carta de cesión de derechos de
                exclusividad a la RICET y a dar su autorización para que,
                eventualmente, el artículo sea reproducido en formato impreso o
                electrónico.
              </p>
              <p>
                El autor o autores recibirán vía correo electrónico el hipervínculo
                de su artículo publicado en nuestra plataforma para su consulta y
                descarga del PDF, el cuál siempre permanecera en acceso abierto y
                gratuito para todo el público.
              </p>
            </div>
            <div className="secct8_" id="8">
              <h1 className="title_secct8">
                Acceso abierto/ Sin cobro de Publicación o Resguardo
              </h1>
              <p>
                La Revista Internacional de Ciencias de la Educación Temachtiani no
                tiene ningún costo en su consulta y descarga para el público lector,
                así como para los autores en su proceso de evaluación, revisión,
                maquetación, publicación, marcaje de XML y/o resgurado en nuestro
                servidor institucional.
              </p>
              <label className="note_">
                *No se realizan cargos a los autores por enviar y procesar artículos
                para su publicación.
              </label>
              <p>
                Reiteramos así nuestro compromiso con el acceso abierto y gratuito
                de las investigaciones científicas que, se somenten a una evaluación
                de predictamenes por parte de nuestro comité editorial, con rigor
                académico y con una ética en su subsecuente evaluación por pares a
                doble ciego a cargo de los especialistas consultados para cada tema
                postulado.
              </p>
              <p>
                Con la finalidad de enfrentar los problemas que enfrenta México y
                Amélica Latina.{" "}
              </p>
            </div>
            <div className="secct9_" id="9">
              <h1 className="title_secct9">Utilización de software anti-plagio</h1>
              <p>
                La Revista Internacional de Ciencias de la Educación Temachtiani
                someterá todas las postulaciones a una revisión de similitudes para
                detectar alguna de las diversas tipologías de plagio y correcta
                citación.
              </p>
              <p>
                Los manuscritos postulados deberan obtener un mínimo del 75% de
                originalidad para el mayor sentido inédito y actualización de datos
                al momento de su publicación.
              </p>
              <p>
                Se utiliza como herramienta de apoyo el software de Ithenticate.
              </p>
              <p>Lo artículos que no obtenga este porcentaje serán rechazados.</p>
              <p>
                Se revisa minuciosamente cada texto, para diferenciar casos
                especiales y manejo de citación o posible flexibilidad de criterios
                cuando se especifican observaciones durante su postulación por parte
                de los autores (traducciones, congresos, tesinas o números
                especiales)
              </p>
            </div>
          </Cards>
        </div>
          <Sidebar/>
      </Grid>
      
    </div>
  );
};

export default MagazinePolicies;
