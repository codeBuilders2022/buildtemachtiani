//styles
import "./Home.scss"
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';
import { useStateContext } from "../../contexts/ContextProvider";

//assets
import cover from "../../assets/images/Revista01.png"


//components


//react
import { useState } from "react"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

const HomeSkeleton = () => {
    const navigate = useNavigate()
    const [articles, setArticles] = useState(false)
    const { currentColor, currentMode } = useStateContext();
    const data = {
        index: [
            "Journal Citation Reports and Science Citation Index Expanded",
            "Current",
            "Contents",
            "MEDLINE",
            "Index Medicus",
            "Embase",
            "Embase",
            "ScienceDirect",
            "Scopus"
        ]
        ,

        articles: [
            "Sed ullamcorper risus at tortor feugiat, vitae fringilla arcu rutrum. Curabitur vulputate risus quis purus viverra viverra. Praesent scelerisque diam vitae commodo feugiat. Praesent ut metus tellus.",
            "Quisque et fermentum purus. Aliquam dignissim orci enim, in iaculis risus efficitur dignissim. Nam aliquet in mauris quis euismod. Pellentesque et dui faucibus, cursus leo ac, lobortis eros.",
            "Vestibulum vestibulum eu lorem eget porttitor. Nullam sed accumsan quam. Morbi mi nibh, egestas vitae eros ut, dapibus auctor magna. Morbi faucibus magna eu ex iaculis lacinia.",
            " Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et fermentum purus. Aliquam dignissim orci enim, in iaculis risus efficitur dignissim. Nam aliquet in mauris quis euismod. Pellentesque et dui faucibus, cursus leo ac, lobortis eros.",
            "Nullam diam quam, facilisis non faucibus id, sodales non leo. Cras eleifend tellus quis felis sagittis, congue iaculis justo aliquet.",
            "Proin tortor nisi, auctor at feugiat vel, porta id orci. Mauris feugiat, elit ac varius venenatis, felis dui ornare augue, vel placerat nisi urna sed nisl. Nulla eleifend ut lacus vitae dignissim.",
            "Aenean non elit a est porta rhoncus. Aenean efficitur nisi ac justo elementum, a suscipit risus scelerisque. Mauris feugiat consequat risus suscipit gravida",
            "Ut suscipit vestibulum dignissim. Duis ornare consectetur leo vel fermentum. Nunc suscipit porttitor neque, a efficitur mauris suscipit a.",
            "Sed ullamcorper risus at tortor feugiat, vitae fringilla arcu rutrum. Curabitur vulputate risus quis purus viverra viverra. Praesent scelerisque diam vitae commodo feugiat. Praesent ut metus tellus.",
            "Quisque et fermentum purus. Aliquam dignissim orci enim, in iaculis risus efficitur dignissim. Nam aliquet in mauris quis euismod. Pellentesque et dui faucibus, cursus leo ac, lobortis eros.",
            "Vestibulum vestibulum eu lorem eget porttitor. Nullam sed accumsan quam. Morbi mi nibh, egestas vitae eros ut, dapibus auctor magna. Morbi faucibus magna eu ex iaculis lacinia.",
            " Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et fermentum purus. Aliquam dignissim orci enim, in iaculis risus efficitur dignissim. Nam aliquet in mauris quis euismod. Pellentesque et dui faucibus, cursus leo ac, lobortis eros.",
            "Nullam diam quam, facilisis non faucibus id, sodales non leo. Cras eleifend tellus quis felis sagittis, congue iaculis justo aliquet.",
            "Proin tortor nisi, auctor at feugiat vel, porta id orci. Mauris feugiat, elit ac varius venenatis, felis dui ornare augue, vel placerat nisi urna sed nisl. Nulla eleifend ut lacus vitae dignissim.",
            "Aenean non elit a est porta rhoncus. Aenean efficitur nisi ac justo elementum, a suscipit risus scelerisque. Mauris feugiat consequat risus suscipit gravida",
            "Ut suscipit vestibulum dignissim. Duis ornare consectetur leo vel fermentum. Nunc suscipit porttitor neque, a efficitur mauris suscipit a.",

        ]


    }

    const dataMethric = [
        { title: "Factor de impacto 2022", data: 1.22 },
        { title: "Citescore 2022", data: 1.3 },
        { title: "SJR 2022", data: 0.36 },
        { title: "SNIP 2022", data: 0.67 }
    ]

    const [preVol, setPreVol] = useState([
        { title: "Volumen. 2. Num. 1", cover: cover, monthPlublished: "Octubre", pag: "222-289" },
        { title: "Volumen. 1. Num. 3", cover: cover, monthPlublished: "Julio", pag: "160-222" },
        { title: "Volumen. 1. Num. 2", cover: cover, monthPlublished: "Abril", pag: "64-130" },
        { title: "Volumen. 1. Num. 1", cover: cover, monthPlublished: "Enero", pag: "1-63" },
    ])
    const [special, setSpecial] = useState([
        { title: "Volumen. 1. Num. 1", cover: cover, monthPlublished: "Abril", pag: "131-160" },
        { title: "Volumen. 1. Num. 3", cover: cover, monthPlublished: "Julio", pag: "160-222" },
        { title: "Volumen. 1. Num. 2", cover: cover, monthPlublished: "Abril", pag: "64-130" },
    ])
    return (
        <div className="Home_binn" style={{overflow:'hidden', height:'100vh'}}>
            <div className="cnt_imag">
                <div style={{ maxWidth: '1200px', width: '95%', marginTop: '100px' }}>
                    <Skeleton width="100%" height="120px" />
                </div>
                {/* <img src={currentMode === "Dark" ?  svgWhite : svg} alt="Banner" className="img_" /> */}
            </div>
            <div className="dark:bg-gray-600 dark:text-white bg-white Journal">
                <div className='container'>
                    {/* <div className="dark:bg-gray-500 bg-slate-100 flex w-full"> */}
                    <div className='cover'>
                        <div className="cover_left">
                            <div style={{ width: '200px' }}>
                                <Skeleton width="100%" height="250px" />
                            </div>
                            <div style={{ width: '120px', marginTop: '5px' }}>
                                <Skeleton width="100%" height="20px" />
                            </div>
                            <div style={{ width: '150px', marginTop: '5px' }}>
                                <Skeleton width="100%" height="20px" />
                            </div>
                        </div>
                        <div className='data' style={{ maxWidth: '500px', width: '100%' }}>

                            <Skeleton width="100%" height="250px" />

                            <div style={{ maxWidth: '500px', marginTop: '10px' }}>
                                <Skeleton width="100%" height="40px" />
                            </div>
                        </div>
                    </div>
                    <div className='metrics' style={{ maxWidth: '420px', width: '100%', display: 'flex' }}>

                        <Skeleton width="100%" height="300px" />

                    </div>
                    {/* </div> */}
                    <div className='articles_container'>
                        <Skeleton width="200px" height="30px" />
                        <div className="articles">
                            <div className="bg-slate-100 dark:bg-gray-500 card_articule">
                                {!articles &&
                                    data.articles.map((article, index) => {
                                        return (
                                            index < 4 &&

                                            <div className='article' key={index}>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <Skeleton width="100%" height="100px" />
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                           <div style={{height:'400px'}}>
                            <Skeleton width="100%" height="100%" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSkeleton