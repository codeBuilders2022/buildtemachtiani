import React, { useState, useEffect } from 'react'

import "./FAQ.scss"

import { Accordion, AccordionTab } from 'primereact/accordion';
import { useStateContext } from '../../contexts/ContextProvider'
import Cards from '../../components/atoms/Cards/Cards'
import { Header } from '../../components'

//Assets
import ArrowDown from '../../assets/images/left-arrow.png'
import Back from '../../components/atoms/Back/Back';

const FAQ = () => {

    const { currentMode } = useStateContext()

    const [color1, setColor1] = useState('#f1f5f9');
    const [color2, setColor2] = useState('#ffffff');

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

    const faq = [
        {
            id: 1,
            question: "¿Como publicar en la revista RICET?",
            answer: "Respuesta 1"
        },
        {
            id: 2,
            question: "¿Como publicar en la revista RICET?",
            answer: "Respuesta 2"
        },
        {
            id: 3,
            question: "¿Como publicar en la revista RICET?",
            answer: "Respuesta 3"
        },
    ]

  return (
    <Cards className='FAQ dark:bg-gray-600 bg-white'>
        <Back className={"_backlk_"} url={"/"}/>
        <Header category={"Preguntas"} title={"frecuentes"}/>
        <div className='bg-slate-100 dark:bg-gray-500 inside_faq'>
            {faq?.map((_, idx) => {
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
            })}
        </div>
    </Cards>
  )
}

export default FAQ