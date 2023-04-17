import React from "react"
import './Metrics.scss'
// import MetricsDataLine from '../../DataTest/MetricsLineChart.json'
import CategoryMetric from "../../components/atoms/CategoryMetric/CategoryMetric"
import LineChartMetric from "../../components/molecules/LineChart/LineChart"
import Chart from "../../components/molecules/Chart/Chart"

import { useStateContext } from "../../contexts/ContextProvider";

const Metrics = () => {
    const { currentColor } = useStateContext();

    const MetricsDataLine = [
        { year: '2010', impact: 1.95 },
        { year: '2011', impact: 2.10 },
        { year: '2012', impact: 2.23 },
        { year: '2013', impact: 2.53 },
        { year: '2014', impact: 3.204 },
        { year: '2015', impact: 3.342 },
        { year: '2016', impact: 3.792 },
        { year: '2017', impact: 4.596 },
        { year: '2018', impact: 4.485 },
        { year: '2019', impact: 5.166 },
        { year: '2020', impact: 5.078 },
        { year: '2021', impact: 4.642 },
        { year: '2022', impact: 4.753 },
        { year: '2023', impact: 7.05 },
    ];

    const citiescoreDataLine = [
        { year: '2010', citiescore: 1.95 },
        { year: '2011', citiescore: 2.10 },
        { year: '2012', citiescore: 2.23 },
        { year: '2013', citiescore: 2.53 },
        { year: '2014', citiescore: 3.204 },
        { year: '2015', citiescore: 3.342 },
        { year: '2016', citiescore: 3.792 },
        { year: '2017', citiescore: 4.596 },
        { year: '2018', citiescore: 4.485 },
        { year: '2019', citiescore: 5.166 },
        { year: '2020', citiescore: 5.078 },
        { year: '2021', citiescore: 4.642 },
        { year: '2022', citiescore: 4.753 },
        { year: '2023', citiescore: 7.05 },
    ];
    const sjrDataLine = [
        { year: '2015', sjr: 200 },
        { year: '2016', sjr: 300 },
        { year: '2017', sjr: 400 },
        { year: '2018', sjr: 500 },
        { year: '2019', sjr: 600 },
        { year: '2020', sjr: 700 },
    ];
    const snipDataLine = [
        { year: '2015', snip: 200 },
        { year: '2016', snip: 300 },
        { year: '2017', snip: 400 },
        { year: '2018', snip: 500 },
        { year: '2019', snip: 600 },
        { year: '2020', snip: 700 },
    ];

    
    return (
        <>
            <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex Metrics">
                <div className="bg-slate-100 dark:bg-gray-500 cards-body "> 
                    <div className="title">Métricas</div>
                    <div className="categories">
                        <CategoryMetric style={{background: currentColor}}id={"IMPACTO"} title={"FACTOR DE IMPACTO 2021"} metric={"7,05"} />
                        <CategoryMetric style={{background: currentColor}}id={"CITESCORE"} title={"CITESCORE 2021"} metric={"2,7"} />
                        <CategoryMetric style={{background: currentColor}}id={"SJR"} title={"SJR 2021"} metric={"0,407"} />
                        <CategoryMetric style={{background: currentColor}}id={"SNIP"} title={"SNIP 2021"} metric={"0,758"} />
                        <CategoryMetric style={{background: currentColor}}id={"LEIDO"} title={"LO MAS LEÍDO"} metric={"Más datos..."} />
                    </div>
                    <div className="title-metric-category">FACTOR DE IMPACTO</div>
                    <div className="metric-descrition">
                        El factor de impacto mide la media del número de citaciones recibidas en un año por trabajos publicados en la publicación durante los dos años anteriores.
                    </div>
                    <div className="parent-metrics">
                        <div className="col-1">
                            <div className="parent-metrics padingTablemetrics">
                                <div className="col-1">
                                    <div className="metrics-table-font">AÑO</div>
                                    <hr />
                                    {
                                        MetricsDataLine.map((item) => {
                                            return (
                                                <>
                                                    <div className="metrics-table-font">{item.year}</div>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="col-2">
                                    <div className="metrics-table-font">IMPACTO</div>
                                    <hr />
                                    {
                                        MetricsDataLine.map((item) => {
                                            return (
                                                <>
                                                    <div className="metrics-table-font">{item.impact}</div>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="col-2 align-items">
                            <LineChartMetric keyData="impact" data={MetricsDataLine}></LineChartMetric>
                        </div>
                    </div>
                    <div className="text-plane">
                        <p>El factor de impacto de la revista es publicado todos los años por Clarivate Analytics. Es una medida del número de veces que se cita un artículo promedio en una revista en particular durante los dos años anteriores.</p>

                        <p>Por ejemplo:</p>

                        <p>A = la cantidad de veces que los artículos publicados de una revista específica en 2014 y 2015 fueron citados por revistas durante 2016.</p>

                        <p>B = el número total de 'artículos citables' publicados por esa revista en 2014 y 2015 (los 'artículos citables' suelen ser artículos, reseñas, actas, etc .; no editoriales o cartas al editor).</p>

                        <p>Factor de impacto 2016 = A / B.</p>

                        <p>El valor real se muestra intencionadamanete solo para el año más reciente. Los valores anteriores están disponibles en los informes de citas de revistas de Clarivate Analytics.</p>
                    </div>
                    {/* citiescore */}
                    <hr style={{ margin: "40px 0" }} />
                    <div className="title-metric-category ">CITESCORE</div>
                    <div className="metric-descrition">
                        CiteScore mide la media de citaciones recibidas por artículo publicado.
                    </div>
                    <div className="parent-metrics">
                        <div className="col-1">
                            <div className="parent-metrics padingTablemetrics">
                                <div className="col-1">
                                    <div className="metrics-table-font">AÑO</div>
                                    <hr />
                                    {
                                        citiescoreDataLine.map((item) => {
                                            return (
                                                <>
                                                    <div className="metrics-table-font">{item.year}</div>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="col-2">
                                    <div className="metrics-table-font">CITESCORE</div>
                                    <hr />
                                    {
                                        citiescoreDataLine.map((item) => {
                                            return (
                                                <>
                                                    <div className="metrics-table-font">{item.citiescore}</div>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="col-2 align-items">
                            <LineChartMetric keyData="citiescore" data={citiescoreDataLine}></LineChartMetric>
                        </div>
                    </div>
                    <div className="text-plane">
                        <p>CiteScore mide el promedio de citas recibidas por documento publicado en un título. Los valores de CiteScore se basan en recuentos de citas en un rango de cuatro años (por ejemplo, 2017-2020) a documentos revisados "por pares" (artículos, reseñas, ponencias de conferencias, documentos de datos y capítulos de libros) publicados en los mismos cuatro años calendario, divididos por el número de estos documentos en estos mismos cuatro años (por ejemplo, 2017-20).</p>

                        <p>Por ejemplo, CiteScore 2020:</p>

                        <p>A = Citas de artículos, reseñas, ponencias de conferencias, documentos de datos y capítulos de libros publicados en 2017-2020</p>

                        <p>B = Suma de artículos, reseñas, ponencias de congresos, documentos de datos y capítulos de libros publicados en 2017-2020</p>

                        <p>2020 CiteScore = A / B</p>

                        <p>CiteScore está disponible para la mayoría de los títulos de serie activos en Scopus: revistas revisadas por pares, series de libros, actas de congresos y revistas especializadas.</p>
                    </div>
                    <hr style={{ margin: "40px 0" }} />
                    {/* SNIP */}
                    <div className="title-metric-category ">SNIP</div>
                    <div className="metric-descrition">
                        SNIP permite comparar el impacto de revistas de diferentes campos temáticos, corrigiendo las diferencias en la probabilidad de ser citado que existe entre revistas de distintas materias.
                    </div>

                    <div className="parent-metrics">
                        <div className="col-1">
                            <div className="parent-metrics padingTablemetrics">
                                <div className="col-1">
                                    <div className="metrics-table-font">AÑO</div>
                                    <hr />
                                    {
                                        snipDataLine.map((item) => {
                                            return (
                                                <>
                                                    <div className="metrics-table-font">{item.year}</div>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="col-2">
                                    <div className="metrics-table-font">SNIP</div>
                                    <hr />
                                    {
                                        snipDataLine.map((item) => {
                                            return (
                                                <>
                                                    <div className="metrics-table-font">{item.snip}</div>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="col-2 align-items">
                            <Chart keyData="snip" data={snipDataLine}></Chart>
                        </div>
                    </div>
                    <div className="text-plane">
                        <p>Factor de impacto, SCImago Journal Rank asigna a cada cita un valor mayor o menor que 1,00 según el rango de la revista que cita. La ponderación se calcula utilizando una ventana de medición de tres años y utiliza la base de datos Scopus. Los autores pueden utilizar estas métricas al decidir dónde publicar.</p>
                        <p>La idea es asignar ponderaciones a las citas bibliográficas en función de la importancia de las revistas que las emitieron. Las citas emitidas por revistas más importantes serán más valiosas que las emitidas por revistas menos importantes. Esta "importancia" se calculará de forma recursiva, es decir, las revistas importantes serán aquellas que a su vez reciban muchas citas de otras revistas importantes.</p>
                    </div>
                    <hr style={{ margin: "40px 0" }} />
                    {/* sjr */}
                    <div className="title-metric-category ">SJR</div>
                    <div className="metric-descrition">
                        SJR es una prestigiosa métrica basada en la idea de que todas las citaciones no son iguales. SJR usa un algoritmo similar al page rank de Google; es una medida cuantitativa y cualitativa al impacto de una publicación.
                    </div>
                    <div className="parent-metrics">
                        <div className="col-1">
                            <div className="parent-metrics padingTablemetrics">
                                <div className="col-1">
                                    <div className="metrics-table-font">AÑO</div>
                                    <hr />
                                    {
                                        sjrDataLine.map((item) => {
                                            return (
                                                <>
                                                    <div className="metrics-table-font">{item.year}</div>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="col-2">
                                    <div className="metrics-table-font">SJR</div>
                                    <hr />
                                    {
                                        sjrDataLine.map((item) => {
                                            return (
                                                <>
                                                    <div className="metrics-table-font">{item.sjr}</div>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="col-2 align-items">
                            <Chart keyData="sjr" data={sjrDataLine}></Chart>
                        </div>
                    </div>
                    <div className="text-plane">
                        
                        <p>Source-Normalized Impact per Paper (SNIP) mide el impacto de las citas contextuales ponderando las citas en función del número total de citas en un campo temático. Esta perspectiva única permite la comparación directa de fuentes en diferentes campos temáticos. El impacto de una sola cita recibe un mayor valor en las áreas temáticas donde las citas son menos probables y viceversa.</p>
                        <p>Es una razón, con un numerador y un denominador. El numerador de SNIP es el impacto de una revista por publicación (IPP). Este es simplemente el número promedio de citas recibidas en un año en particular (por ejemplo, 2013) por artículos publicados en la revista durante los tres años anteriores (por ejemplo, 2010, 2011 y 2012).</p>
                        <p>El denominador de SNIP es el potencial de citas de la base de datos (DCP). Sabemos que existen grandes diferencias entre varios subcampos científicos en la frecuencia con la que los autores citan artículos. En vista de esto, para cada revista se calcula un indicador del potencial de citas en el campo temático que cubre. Este potencial de citación se incluye en el denominador del SNIP, el DCP. SNIP es IPP dividido por DCP.</p>
                        <p>SNIP permite la comparación directa de fuentes en diferentes campos temáticos. Se muestra que el potencial de citas varía no solo entre las categorías de temas de las revistas (grupos de revistas que comparten un campo de investigación) o disciplinas (por ejemplo, las revistas de Matemáticas tienden a tener valores más bajos que las revistas de Ciencias de la Vida), sino también entre las revistas dentro de la misma categoría de temas. . Por ejemplo, las revistas básicas tienden a mostrar un mayor potencial de citas que las revistas aplicadas o clínicas. Asimismo, las revistas que cubren temas emergentes tienden a ser más altas que las revistas de temas clásicos o revistas más generales.</p>
                        <p>SNIP ayuda a los autores a identificar qué revistas se están desempeñando mejor en su campo temático, ayudándoles a decidir dónde publicar. Pase el mouse sobre los círculos en la visualización y haga clic en el año para ver las métricas de la revista. El tamaño de los círculos se compara con los valores más altos en el rango de 5 años. Este valor más alto está representado por un círculo cerrado, y los círculos abiertos indican el valor de la revista en comparación con este valor más alto.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Metrics