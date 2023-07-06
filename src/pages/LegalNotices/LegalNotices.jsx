import React, { useEffect, useState } from 'react'

import "./LegalNotices.scss"
import Cards from '../../components/atoms/Cards/Cards'
import Back from '../../components/atoms/Back/Back'
import { Header } from '../../components'
import { getAxiosData } from '../../Api/Committee/Committee'

const LegalNotices = () => {  
    
    
    const [privacyText, setPrivacyText] = useState([])
    const [loadingData, setLoadingData] = useState(false)

    useEffect(() => {
        getLegals()
    }, [])

    const getLegals = async () => {
        try {
            const response = await getAxiosData("/api/legal-notices")
            if(response && response.data){
                const newArray = response.data.map(({ id, attributes: { LegalNotices }}) => {
                    return { id, LegalNotices}
                })
                setLoadingData(true)
                setPrivacyText(newArray)
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Cards className={"LegalNotices dark:bg-gray-600 bg-white"}>
            <Back className={"_backlk_"} url={"/"} />
            <Header  title={"Avisos legales"} />
            <div className="bg-slate-100 dark:bg-gray-500 inside_LegalNotices">
                {!loadingData ? (
                    <p>Cargando datos...</p>
                ):(
                    privacyText?.map((_, idx) => {
                        return(
                            <div key={idx} className='cnt_inside_'>
                                <p dangerouslySetInnerHTML={{__html: _.LegalNotices}}></p>
                            </div>
                        )
                    })
                )}
            </div>
        </Cards>
    )
}

export default LegalNotices