import { useState } from "react";
import "./Statistics.scss"
import { useEffect } from "react";
import { getAxiosContriesView } from "../../Api/Metrics/Metrics";
import { Chart } from 'primereact/chart';
import Select from "../../components/atoms/Select/Select";
import Sidebar from "../../components/organisms/Sidebar/Sidebar"

const Statistics = () => {

    //chart
    const [countries, setCountries] = useState({})
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [selectedYear, setSelectedYear] = useState(null)

    const month = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
    ]
    useEffect(() => {
        getContries()
    }, [])


    const getContries = async () => {
        const res = await getAxiosContriesView('/api/countries')
        setCountries(res.data.data)

    }
    const yearA = new Date().getFullYear();

    const [dataLabel, setDataLabel] = useState(
        [
            { year: 2023, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { year: 2024, data: [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0] },

        ]
    )
    const lastIndex = dataLabel.length - 1
    const [dataView, setDataView] = useState([dataLabel[lastIndex]])
    useEffect(() => {
        if (countries.length) {
            const newData = { ...dataLabel }
            const newYear = { year: yearA, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }


            countries.map((country, index) => {
                const monthAct = Number(country.attributes?.createdAt.substring(5, 7) - 1)
                const year = Number(country.attributes?.createdAt.substring(0, 4))
                if (year == dataLabel[lastIndex]?.year) {
                    newData[lastIndex].data[monthAct] = newData[lastIndex]?.data[monthAct] + 1
                }
            })
            setDataLabel(newData)
        }

    }, []);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


        if (selectedYear !== null) {
            const newData = dataLabel.filter((e, i) => e.year == selectedYear.name)
            setDataView(newData)
            console.log(newData, 'pruebaaaa')
        }
        const data = {
            labels: month,
            datasets: [
                {
                    label: 'Visitas a la página',
                    backgroundColor: '#3887CC',
                    borderColor: '#3887CC',
                    data: dataView[0].data
                },
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
        setChartData(data);
        setChartOptions(options);
    }, [selectedYear])


    const [option, setOption] = useState([])
    const dataOption = []

    useEffect(() => {
        if (dataLabel.length) {
            dataLabel.map((e, index) => {
                let newOption = { name: e.year, code: index }
                dataOption.push(newOption)
            })
        }
        setOption(dataOption)
    }, [])



    return (

        <div className="dark:bg-gray-600 dark:text-white m-2 md:m-10 md:mt-32 mt-24 p-2 md:p-10 bg-white rounded-3xl flex Metrics">
            <div className="bg-slate-100 dark:bg-gray-500 cards-body w-full">
                <div className="Statistics">
                    <div className="titleS">Estadísticas</div>
                    <div className='StatisticsC'>
                        <div className="right">
                            <div className="viewData">
                                <Select placeholder={"Seleccione un año"} value={selectedYear} setValue={setSelectedYear} onChange={(e) => setSelectedYear(e.value)} optionLabel="name" options={option} />
                                <Chart type="bar" data={chartData} options={chartOptions} width={"100%"} />
                            </div>
                        </div>
                        <Sidebar />
                        <script src="https://code.highcharts.com/highcharts.js"></script>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics