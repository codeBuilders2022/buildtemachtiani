import React from 'react'

import "./PrivacyPolicies.scss"
import Cards from '../../components/atoms/Cards/Cards'
import { Header } from '../../components'
import Back from '../../components/atoms/Back/Back'
import { getAxiosData } from '../../Api/Committee/Committee'
import { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const PrivacyPolicies = () => {

    const [privacyText, setPrivacyText] = useState([])
    const [loadingData, setLoadingData] = useState(false)

    useEffect(() => {
        getPrivacy()
    }, [])

    const getPrivacy = async () => {
        try {
            const response = await getAxiosData("/api/privacy-policies")
            if(response && response.data){
                const newArray = response.data.map(({ id, attributes: { privacypolicy }}) => {
                    return { id, privacypolicy}
                })
                setLoadingData(true)
                setPrivacyText(newArray)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Revista Temachtiani | Políticas</title>
        </Helmet>
        <Cards className="PrivacyPolicies dark:bg-gray-600 bg-white">
            <Back className={"_backlk_"} url={"/"} />
            <Header category={"Políticas"} title={"Protección de datos personales"} />
            <div className="bg-slate-100 dark:bg-gray-500 inside_PrivacyPolicies">
                {!loadingData ? (
                    <p>Cargando datos...</p>
                ):(
                    privacyText?.map((_, idx) => {
                        return(
                            <div key={idx} className='cnt_inside_'>
                                <p dangerouslySetInnerHTML={{__html: _.privacypolicy}}></p>
                            </div>
                        )
                    })
                )}
            </div>
        </Cards>
    </>
  );
}

export default PrivacyPolicies