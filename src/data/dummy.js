import React from "react";
import portada01 from "./JUNIO-2019.png";
import portada02 from "./NOVIEMBRE-2020.png";
import portada03 from "./ENERO-2021.png";
import portada04 from "./JUNIO-2021.png";
import numeroActual from "./Revista01.png";

//Mi paginas de trabajo
export const themeColors = [
  {
    name: "Azul",
    color: "#1A97F5",
  },
  {
    name: "Turquesa",
    color: "#03C9D7",
  },
  {
    name: "Morado",
    color: "#7352FF",
  },
  {
    name: "Rosa",
    color: "#FF5C8E",
  },
  {
    name: "Verde",
    color: "#09b609",
  },
  {
    color: "#FB9678",
    name: "Salmon",
  },
];

export const tableConvocatoria = [
  {
    Volumenes: "No. 1",
    FechasMeses: "Enero - Marzo",
    FechaLimite: "28 de febrero",
  },
  {
    Volumenes: "No. 2",
    FechasMeses: "Abril - Junio",
    FechaLimite: "31 de mayo",
  },
  {
    Volumenes: "No. 3",
    FechasMeses: "Julio - Septiembre",
    FechaLimite: "20 de junio ",
  },
  {
    Volumenes: "No. 4",
    FechasMeses: "Octubre - Diciembre",
    FechaLimite: "25 de agosto",
  },
];

export const field = [
  {
    volumen: "Vol.3",
    Meses: "Meses",
    Fecha: "Fecha Limite de Manuscrito",
  },
];

export const Modalidades = () => (
  <div>
    <h1 className="text-xl uppercase mb-2 mt-2 dark:text-gray-300">
      Modalidades de trabajos a publicar
    </h1>
    <p className="text-justify pb-10 text-lg">
      Los trabajos deberán referirse a temas relacionados con la formación y la
      investigación educativa. Se reciben trabajos en las siguientes
      modalidades, otras modalidades serán analizadas por el comité editorial:
    </p>
  </div>
);

export const Convocatoria = () => (
  <div>
    <div className="mb-10">
      <h1 className="text-xl uppercase mb-2 mt-2 dark:text-gray-300">
        CONVOCATORIA PARA PUBLICAR EN LA RICET
      </h1>
      <p className="text-justify text-lg">
        El comité editorial de la Revista internacional de Ciencias de la
        Educación Temachtiani, convoca a investigadores, docentes, estudiantes,
        y público en general, interesados en publicar sus trabajos académicos o
        científicos, a enviar sus manuscritos para ser considerados a publicarse
        en los números correspondientes al año 2023.
      </p>
    </div>
  </div>
);

export const Evaluacion = () => (
  <p className="text-justify pt-10 text-lg">
    Los trabajos serán evaluados por el Comité Editorial y se comunicará a los
    autores oportunamente de su recepción y del estatus de su manuscrito. Se
    deberán enviar al correo electrónico{" "}
    <span className="dark:text-sky-200 text-sky-900">
      <a href="mailto:ricedut@gmail.com">educiencia@revistatemachtiani.net</a>
    </span>
  </p>
);

export const InstruccionesAutores = () => (
  <div className="p-4">
    <div className="mb-10">
      <div className="md:w-4/5 p-5 bg-slate-100 dark:bg-gray-500 rounded-2xl opacity-90">
        <h1 className="text-xl uppercase mb-2 mt-2 dark:text-gray-300">
          Políticas de la revista
        </h1>
        <p className="text-justify text-lg">
          La Revista Internacional de Ciencias de la Educacion Temachtiani
          (RICET) es una publicación con periodicidad trimestral, que pretende
          la difusión del conocimiento y las ideas relacionadas con la
          investigación y la formación educativa, esto incluye la gestión del
          conocimiento. Por tener un carácter plural, se aceptan para su
          publicación, trabajos académicos basados en diversas teorías y
          disciplinas científicas aplicadas al proceso de enseñanza aprendizaje,
          siempre y cuando, mantengan el rigor científico que aporte riqueza al
          conocimiento en Educación. Lo anterior lo podemos resumir en una
          revista de carácter transdisciplinario y transteórico. La RICET es una
          revista arbitrada, la revisión se realiza por pares a doble ciego.
          Consideramos que la investigación científica, cuando se traduce a un
          idioma distinto al lenguaje materno del autor, puede perder parte de
          su esencia, es por eso que esta revista recibirá por el momento,
          artículos en español, inglés y portugués; aunque consideraremos la
          viabilidad de otros idiomas si la aportación que el contenido del
          manuscrito ofrece, es de relevancia para la revista.
        </p>
      </div>
    </div>

    <div className="flex justify-end mb-10">
      <div className="md:w-4/5 bg-slate-100 dark:bg-gray-500 rounded-2xl p-5 opacity-90">
        <h1 className="text-xl uppercase mb-2 mt-2 dark:text-gray-300">
          Tipos de trabajos para publicarse
        </h1>
        <p className="text-justify text-lg">
          Los manuscritos enviados para ser considerados para publicarse en esta
          revista, pueden clasificarse de diverso tipo: se aceptarán artículos
          originales derivados de una investigación científica; artículos de
          revisión sistemática, meta-análisis; propuestas de modelos teóricos;
          ensayos académicos de tipo crítico; cartas al editor, reseñas de
          libros y cualquier contribución que el Comité Científico, considere
          como contribución a las ciencias de la educación. Los trabajos deberán
          ser inéditos y no haber sido enviados a otra revista simultáneamente.
          Además de cumplir con los criterios de forma relacionados a
          ortografía, claridad, estructura, coherencia y redacción. Los autores
          se responsabilizan de obtener los permisos de todo aquel material
          susceptible de estar protegido por derecho de copia (copyright), por
          ejemplo, figuras, cuadros, imágenes, fotografías o cualquier contenido
          del manuscrito.
        </p>
      </div>
    </div>

    <div className="mb-10">
      <div className="md:w-4/5 bg-slate-100 dark:bg-gray-500 rounded-2xl p-5 opacity-90">
        <h1 className="text-xl uppercase mb-2 mt-2 dark:text-gray-300">
          Transmisión de derechos de autor
        </h1>
        <p className="text-justify text-lg">
          Los autores de los artículos publicados en esta revista, no envían
          aportación económica alguna, ni por la revisión del manuscrito, ni por
          su publicación, en este caso, ceden los derechos del copyright sobre
          el artículo y conservan sus derechos personales. Una vez aceptado el
          artículo para su publicación, el autor principal recibirá un formato
          para la cesión de derechos que deberán firmar todos los autores y
          enviar por el mismo medio en un lapso no mayor a siete días.
        </p>
      </div>
    </div>

    {/* <div className="flex justify-end mb-10">
      <div className="md:w-4/5 bg-slate-100 dark:bg-gray-500 rounded-2xl p-5 opacity-90">
        <h1 className="text-xl uppercase mb-2 mt-2 dark:text-gray-300">
          Acceso a la revista
        </h1>
        <p className="text-justify text-lg">
          Los lectores podrán acceder gratuitamente a la revista, así como
          descargar, imprimir, compartir con terceros sin fines de lucro, el
          material publicado, siempre y cuando se cite la fuente y no se
          modifique la versión original del artículo. Se podrán enviar artículos
          de investigación científica con los apartados introducción (donde se
          desarrolle la problemática y la perspectiva teórica de la
          investigación) objetivo, metodología, resultados, conclusiones y
          discusión. Artículos teóricos (desarrollos teóricos, aportes de
          discusión, debate o experiencias en formación educativa) y reseñas
          analíticas de libros, así como los mencionados anteriormente, con
          temáticas relacionadas a la formación educativa. El sitio web para
          acceder a la revista es:
        </p>
      </div>
    </div> */}

    <div className="mb-10 flex justify-end">
      <div className="md:w-4/5 bg-slate-100 dark:bg-gray-500 rounded-2xl p-5 opacity-90">
        <h1 className="text-xl uppercase mb-2 mt-2 dark:text-gray-300">
          Normas para el envío de artículos
        </h1>
        <p className="text-justify text-lg">
          El envío será vía correo electrónico al email:
          educiencia@revistatemachtiani.net. Todo manuscrito que se envíe a la
          Revista Internacional de Investigación y Formación Educativa para ser
          evaluado debe adherirse estrictamente al Manual de Estilo de
          Publicaciones APA tercera edición en español y a los lineamientos que
          el comité editorial considera indispensables y que a continuación
          describimos. Debe presentarse en un único documento escrito a doble
          espacio con letra Times New Roman, Arial o Courier a 12 puntos,
          márgenes de 2.5 en todos los lados y no debe exceder de 20 páginas,
          incluyendo tablas y figuras. La primera página debe incluir el título,
          nombre(s) completo(s) del(os) autor(es) (primero el nombre seguido por
          los apellidos unidos por un guion), afiliación institucional,
          encabezado sugerido y datos de localización del autor principal, así
          como dirección postal, dirección electrónica y teléfonos de todos los
          autores. La segunda y/o tercera páginas incluyen el título, un resumen
          de máximo 250 palabras y las palabras clave en español (máximo 3
          separadas por una coma), y el título, el resumen y las palabras clave
          en inglés. De no señalarse autor para recibir correspondencia, se
          entenderá que es el primer autor quien tendrá esta función. Las tablas
          y figuras deberán insertarse en el manuscrito, estas no deberán
          aparecer en formato de imagen debido a que pierden la nitidez al
          ajustarse en el documento. Deben editarse en tonos de grises. De tener
          abreviaciones, deberá anotarse a pie de figura, el significado de cada
          abreviación. Si existen dudas respecto a las instrucciones para enviar
          manuscritos, diríjase al correo electrónico de la revista:{" "}
          <span className="dark:text-sky-200 text-sky-900">
            <a href="mailto:ricedut@gmail.com">
              educiencia@revistatemachtiani.net
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
);
export const MisionVision = () => (
  <div className="mt-10">
    <div className="p-10 rounded-xl bg-slate-100 dark:bg-gray-500 mb-5">
      <p className="text-3xl font-extrabold tracking-tight dark:text-white text-black">
        Misión
      </p>
      <p className="text-lg dark:text-white text-justify">
        Ser un medio independiente que parte de la necesidad de difundir la
        investigación científica en educación, con un enfoque
        transdisciplinario, que busca la publicación electrónica de nuevos
        conocimientos, fuertemente sustentados, que contribuyan a la mejora de
        la sociedad, tanto en México, como en otros países de habla hispana, que
        comparten situaciones similares en materia de investigación educativa y
        de propuestas que contribuyan al avance de las ciencias de la educación,
        desde una óptica humanística, crítica y desde la complejidad. Por otra
        parte, promueve diversas iniciativas de difusión y generación del
        conocimiento, desde propuestas alternativas, interculturales,
        inclusivas, decolonizantes, que aporten al desarrollo de la ciencia y
        que beneficie la identidad y sensibilidad de problemas sociales del país
        y de otras latitudes similares, aportando propuestas que incluyen al
        derecho humano de acceso a la investigación y sus derivados, por medio
        de la difusión de productos dictaminados por pares académicos
        especializados. Proponiendo además, la apertura de espacios para la
        inserción temprana a la investigación, y la generación de conocimiento
        desde la experiencia de los apasionados de temas educativos, que
        permitan el intercambio del debate científico educativo desde diversos
        ámbitos del conocimiento.
      </p>
    </div>
    <div className="p-10 rounded-xl bg-slate-100 dark:bg-gray-500 mb-5">
      <p className="text-3xl font-extrabold tracking-tight dark:text-white text-black">
        Visión
      </p>
      <p className="text-lg dark:text-white text-justify">
        Esta revista, se visualiza como líder a nivel nacional e Iberoamericano,
        promoviendo las ideas innovadoras, críticas y con un alto sentido social
        y humanístico, vinculado a al fenómeno educativo. Por lo que se
        convierte en un vehículo para visualizar los aportes de investigadores,
        académicos, estudiantes y estudiosos de las Ciencias de la Educación,
        nacionales e internacionales, que contribuyan al desarrollo científico y
        con ello al avance del conocimiento en México e Iberoamérica.
      </p>
    </div>
  </div>
);

export const InfoPuntos = [
  {
    info: "Artículos originales",
  },
  {
    info: "Comunicaciones breves",
  },
  {
    info: "Reseñas de libros",
  },
  {
    info: "Cartas editoriales",
  },
  {
    info: "Ensayos Académicos",
  },
  {
    info: "Revisiones sistemáticas",
  },
  {
    info: "Meta-análisis",
  },
  {
    info: "Propuestas teóricas",
  },
];

export const links = [
  {
    title: "Edicion 1",
    links: [
      {
        name: "Articulo I",
        link: "Edicion 1 ",
      },
      {
        name: "Articulo II",
      },
      {
        name: "Articulo III",
      },
    ],
  },
];

///AQUI ES DONDE DE AGREGA LOS NOMBRES DE LAS REVISTAS A LAS LISTA
export const nRevistas = [
  {
    titleR: "Revistas",
    nombreRevista: [
      {
        id: 1,
        nombre: "RICEDUT-JUNIO-2019",
      },
      {
        id: 2,
        nombre: "RICEDUT-NOVIEMBRE-2020",
      },
      {
        id: 3,
        nombre: "RICEDUT-ENERO-2021",
      },
      {
        id: 4,
        nombre: "RICEDUT-JUNIO-2021",
      },
    ],
  },
];

//// AQUI ES DONDE SE AGREGAN LAS IMAGENES PARA MOSTRAR LAS PORTADAS
export const cartData = [
  {
    id: 1,
    image: portada01,
    alt: "portada1",
    title: "RICEDUT-JUNIO-2019",
  },
  {
    id: 2,
    image: portada02,
    alt: "portada2",
    title: "RICEDUT-NOVIEMBRE-2020",
  },
  {
    id: 3,
    image: portada03,
    alt: "portada3",
    title: "RICEDUT-ENERO-2021",
  },
  {
    id: 4,
    image: portada04,
    alt: "portada04",
    title: "RICEDUT-JUNIO-21",
  },
];

/* Este apartado es donde se modificara cada vez que quieras subir un archivo a la web */

export const ultimoNumero = [
  {
    clave: "Ultimo",
    image: numeroActual,
    title:
      "Vol. 5 Núm. S3 (2022): Memoría del Noveno Foro de Investigación de la Red de Posgrados en Salud en el Trabajo",
    alt: "Memoría del Noveno",
    publicado: "2022-11-08",
    titleDescription: "Resumen",
  },
];

export const DescriptionUltimoNumero = () => (
  <p className=" text-justify">
    {" "}
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur et
    alias nobis unde, maxime cumque sed adipisci tempora dolor, quod blanditiis
    fugit voluptate enim omnis, quam iste rerum veritatis aperiam. Culpa
    inventore, aperiam fugit, deserunt rerum pariatur consequuntur quas itaque
    maxime rem facilis possimus qui, voluptatum sed corrupti ad mollitia
    repellat est vitae similique? Est dolor repellat incidunt ipsa natus quaerat
    asperiores dignissimos ex, fugit accusantium quia animi temporibus assumenda
    optio, illum maxime! Necessitatibus quam est nisi ratione minus sint!
  </p>
);

//Acerca de
export const About_description = () => (
  <div className="w-auto flex flex-col gap-7 p-10 rounded-xl bg-slate-100 dark:bg-gray-500 mb-5">
    <p className="text-justify">
      Es una publicación trimestral, tiene por objetivo la difusión del
      conocimiento y las ideas relacionadas con las Ciencias de la Educación,
      incluyendo la investigación y la formación educativa. De la misma forma
      consideramos muy importante la divulgación general del conocimiento por lo
      que apostamos a ser un instrumento de divulgación de las ideas.
    </p>
    <p className="text-justify">
      Pretendemos ser un espacio de difusión del conocimiento, un espacio donde
      podamos compartir ideas y un espacio de convergencia para diferentes
      expresiones de teorías, conceptos y lo relacionado con las ciencias de la
      educación.
    </p>
    <p className="text-justify">
      Por tener un carácter plural, consideramos importante generar una sección
      especializada en la difusión de artículos creados por estudiantes de nivel
      superior que estén acompañados de un académico o un investigador adscrito
      a una Institución de Educación Superior, así como una sección dedicada a
      la publicación de artículos en lenguas originarias, por lo que pretendemos
      que la revista sea de carácter transdiciplinario y transteórico.
    </p>
  </div>
);
