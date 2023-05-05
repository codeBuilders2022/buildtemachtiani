import { errorResponse, getAxiosGuest } from "./Axios"

export const getSelect = (url, setData) => {

    const resThen = (res) => {
        setData(res.data.data)
    }

    const datas = getAxiosGuest(url, resThen, errorResponse)
    console.log(datas.data, "estod datos")
}
