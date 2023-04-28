//styles
import { useState } from "react"
import "./Committee.scss"
import ExteriorCard from "../../components/atoms/ExteriorCard/ExteriorCard"
import Back from "../../components/atoms/Back/Back"
import { Header } from "../../components"
import { Skeleton } from "primereact/skeleton"

const CommitteeSkeleton = () => {
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
                <Back skeleton={true} className={"_back_"} />
                <main className="container">
                    <Header skeleton={true} title={"COMITÉ"} />
                    <div className="type">
                        <Skeleton width="100px" height="30px" />
                        <Skeleton width="100px" height="30px" />
                    </div>
                    <div className="containerData">

                        {!active ? data.map((e, index) => {
                            return (
                                <div className="data" key={index}>
                                    <Skeleton width="70px" height="70px" shape="circle" />
                                    <Skeleton width="170px" height="15px" />
                                    <Skeleton width="120px" height="15px" />
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

export default CommitteeSkeleton