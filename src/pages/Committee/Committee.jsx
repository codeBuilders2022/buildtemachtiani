//styles
import { useState } from "react"
import "./Committee.scss"
import ExteriorCard from "../../components/atoms/ExteriorCard/ExteriorCard"
import Back from "../../components/atoms/Back/Back"
import { Header } from "../../components"

const Committee = () => {
    const [active, setActive] = useState(false)

    const [data, setData] = useState([
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Panamá" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Panamá" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Panamá" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Panamá" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Panamá" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Panamá" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Panamá" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Panamá" },
    ])
    const [data1, setData1] = useState([
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Cuba" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Cuba" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Cuba" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Cuba" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Cuba" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Cuba" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Cuba" },
        { ocupation: "Dr", name: "Carlos Rivera Jimenez", contry: "Cuba" },
    ])
    return (
        <div className="Committee">
            <ExteriorCard>
                <Back className={"_back_"} />
                <main className="container">
                    <Header title={"COMITÉ"} />
                    <div className="type">
                        <button className={!active && "active"} onClick={() => { setActive(false) }}>Editorial</button>
                        <button className={active && "active"} onClick={() => { setActive(true) }}>Científico</button>
                    </div>
                    <div className="containerData">

                        {!active ? data.map((e, index) => {
                            return (
                                <div className="data" key={index}>
                                    <div className="avatar"></div>
                                    <p>{e.ocupation}. {e.name}</p>
                                    <p>{e.contry}</p>
                                </div>
                            )
                        }) : data1.map((e, index) => {
                            return (
                                <div className="data" key={index}>
                                    <div className="avatar"></div>
                                    <p>{e.ocupation}. {e.name}</p>
                                    <p>{e.contry}</p>
                                </div>
                            )
                        })}

                    </div>
                </main>
            </ExteriorCard>
        </div >
    )
}

export default Committee