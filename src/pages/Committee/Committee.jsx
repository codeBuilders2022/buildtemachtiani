//styles
import { useState } from "react"
import "./Committee.scss"
import ExteriorCard from "../../components/atoms/ExteriorCard/ExteriorCard"
import Back from "../../components/atoms/Back/Back"
import { Header } from "../../components"
import { useEffect } from "react"
import { IncorrectModal } from "../../components/molecules/modals/Modals"
import { getAxiosData } from "../../Api/Committee/Committee"

const Committee = () => {
    const [active, setActive] = useState(false)
    const server = process.env.REACT_APP_API_URL
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const scientific = []
    const editorial = []


    useEffect(() => {
        getDatas()
    }, []);

    const getDatas = async () => {
        try {
            // Hacemos una llamada concurrente a la API utilizando Promise.all()
            const [resCommittees] = await Promise.all([
                getAxiosData("/api/committees?populate=profile")
            ]);

            // Mapeamos los datos obtenidos de los comités y extraemos los atributos relevantes
            const committeeData = resCommittees.data.map(({ id, attributes: { committee, country, email, fullname, profile: { data: { attributes: { formats } } } } }) => {
                const url = formats?.large?.url || formats?.medium?.url || formats?.small?.url || formats?.thumbnail?.url || resCommittees?.data[0]?.attributes?.profile?.data?.attributes?.url;
                return { id, committee, country, email, fullname, image: process.env.REACT_APP_API_URL + url};
              });
            // Asignamos los datos de los comités a los estados correspondientes en el componente
            committeeData.map((e) => {
                if (e.committee == 'Editorial') {
                    editorial.push(e)
                    setData(editorial)
                }
                if (e.committee == 'Científico') {
                    scientific.push(e)
                    setData1(scientific)
                }

            })
        } catch (error) {
            IncorrectModal("¡Algo salió mal, intentalo más tarde!", true);
        }
    };
    return (
        <div className="Committee">
            <ExteriorCard>
                <Back className={"_back_"} url={"/"} />
                <div className="container">
                    <Header title={"COMITÉ"} />
                    <div className="type">
                        <button className={!active && "active"} onClick={() => { setActive(false) }}>Editorial</button>
                        <button className={active && "active"} onClick={() => { setActive(true) }}>Científico</button>
                    </div>
                    <div className="containerData">

                        {!active ? data.map((e, index) => {
                            return (
                                <div className="data" key={index}>
                                    <img className="avatar" src={e.image} />
                                    <p> {e.fullname}</p>
                                    <p>{e.email}</p>
                                    <p>{e.country}</p>
                                </div>
                            )
                        }) : data1.map((e, index) => {
                            return (
                                <div className="data" key={index}>
                                    <img className="avatar" src={e.image} />
                                    <p>{e.fullname}. </p>
                                    <p>{e.email}</p>
                                    <p>{e.country}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </ExteriorCard>
        </div >
    )
}

export default Committee