import React, { useEffect, useState } from 'react'

//context
import { useStateContext } from '../../../contexts/ContextProvider'

import "./PreviousIssues.scss"
import Cards from '../../../components/atoms/Cards/Cards'
import { Skeleton } from 'primereact/skeleton'

const PreviousIssuesSkeleton = () => {

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

    return (
        <div className="dark:bg-gray-600 bg-white dark:text-white PreviousIssues">
            <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 10, marginBottom: 20}}>
                <Skeleton width='370px' height='30px'/>
                <Skeleton width='200px' height='20px'/>
            </div>
            <Cards className={"inside-previous"}>
                <section className="secct1-p">
                    <Skeleton width='200px' height='250px'/>
                <div className='description_p'>
                    <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 10}}>
                        {[...Array(10)].map((_, idx) => (
                            <Skeleton key={idx} width='700px' height='10px'/>
                        ))}
                    </div>
                </div>
                </section>
                <section className='list_article-p'>
                    <div style={{paddingLeft: 10}}>
                        <Skeleton width='150px' height='30px'/>
                    </div>
                    <div>
                        {[...Array(10)].map((_, idx) => {
                            const backgroundColor = isColor1 ? color1 : color2;
                            isColor1 = !isColor1;
                            return(
                                <div  key={idx} className='block_p' style={{background: backgroundColor, display: "flex", flexDirection: "column", gap: 10}}>
                                    <Skeleton width='500px' height='15px'/>
                                    <Skeleton width='250px' height='10px'/>
                                    <Skeleton width='300px' height='7px'/>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </Cards>
        </div>
  );
}

export default PreviousIssuesSkeleton