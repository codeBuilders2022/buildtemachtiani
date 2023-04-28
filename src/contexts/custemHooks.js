import { useEffect, useState } from "react"

//Axios
import { getSelect } from "../utilities/GeneralAxios"

export const useLadaWithState = () => {
    const [optionsState, setOptionsState] = useState('')
    const [optionsLada, setOptionsLada] = useState('')

    useEffect(() => {
        getSelect('api/mobile/general/republic-states', setOptionsState)
        getSelect('api/general/ladas', setOptionsLada)
    },[])

    return { optionsState, optionsLada }
}
