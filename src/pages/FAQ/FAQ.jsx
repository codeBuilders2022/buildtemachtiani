import React, { useState, useEffect } from 'react'

import { Accordion, AccordionTab } from 'primereact/accordion';
import { useStateContext } from '../../contexts/ContextProvider'
import Cards from '../../components/atoms/Cards/Cards'
import { Header } from '../../components'
import Back from '../../components/atoms/Back/Back';
import { getAxiosData } from '../../Api/Committee/Committee';

import "./FAQ.scss"

const Faq = () => {
    const { currentMode } = useStateContext()
    const [loadingData, setLoadingData] = useState(false)
    const [color1, setColor1] = useState('#f1f5f9');
    const [color2, setColor2] = useState('#ffffff');
    const [faqq, setFaqq] = useState()

    useEffect(() => {
        if (currentMode === 'Dark') {
          setColor1('#6b7280');
          setColor2('#4b5563');
        } else {
          setColor1('#f1f5f9');
          setColor2('#ffffff');
        }
      }, [currentMode]);
    
    let isColor1 = true;

    useEffect(() => {
      getFaq()
    }, [])

    const getFaq = async () => {
        try {
            const response = await getAxiosData("/api/faqs")
            if(response && response.data){
                const newArray = response.data.map(({id, attributes: { question, answer}}) => {
                    return { id, question, answer }
                })
                setLoadingData(true)
                setFaqq(newArray)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Cards className='FAQ dark:bg-gray-600 bg-white'>
        <Back className={"_backlk_"} url={"/"}/>
        <Header category={"Preguntas"} title={"frecuentes"}/>
        <div className='bg-slate-100 dark:bg-gray-500 text-black dark:text-white inside_faq'>
           {!loadingData ? (
                <p>Cargando preguntas...</p>
           ):(

            faqq?.map((_, idx) => {
                const backgroundColor = isColor1 ? color1 : color2;
                isColor1 = !isColor1;
                return(
                    <div className='faq_q' style={{background: backgroundColor}} key={idx}>
                        <Accordion activeIndex={idx} className='ext_acc'>
                            <AccordionTab header={_.question} className='inside_acc'>
                                <p>{_.answer}</p>
                            </AccordionTab>
                        </Accordion>
 
                    </div>
                )
            })
           )}
        </div>
    </Cards>
  )
}

export default Faq