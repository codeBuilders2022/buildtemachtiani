import { errorResponse, getAxiosGuest } from "./Axios"

export const getSelect = (url, setData) => {

    const resThen = (res) => {
        setData(res.data.data)
    }

    getAxiosGuest(url, resThen, errorResponse)
}
