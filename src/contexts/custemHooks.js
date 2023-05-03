import { useEffect, useState } from "react"

//Axios
import { getAxiosGuest } from "../utilities/Axios"

export const useLadaWithState = () => {
    const [optionsState, setOptionsState] = useState('')
    const [optionsLada, setOptionsLada] = useState('')

    const resThen = (res) => {
        setData(res.data.data)
    }
    useEffect(() => {
        getAxiosGuest('/api/countries', setOptionsState)
    },[])

    console.log(optionsState, "optionState")

    return { optionsState }
}
