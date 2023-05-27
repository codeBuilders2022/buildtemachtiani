import React, { useEffect, useState } from 'react'
import { Steps } from 'primereact/steps';

import "./StepsLine.scss"

const StepsLine = ({estatus = 0}) => {

  const [labelStatus, setLabelStatus] = useState("---------")
  const [statusValue, setStatusValue] = useState(estatus)
  //Status ---> 
  useEffect(() => {
    if (estatus === 1 || estatus === 2) {
      setStatusValue(estatus);
    } else if(estatus === 3){
      setLabelStatus("Rechazado")
      setStatusValue(estatus)
    } else if (estatus === 4) {
      setLabelStatus("Aceptado con correcciones menores");
      setStatusValue(3);
    } else if (estatus === 5) {
      setLabelStatus("Aceptado con correcciones mayores");
      setStatusValue(3);
    } else if (estatus === 6) {
      setLabelStatus("Aceptado");
      setStatusValue(3);
    } else if (estatus === 7) {
      setStatusValue(4);
    }
  }, [estatus]);
  

    const items = [
        { id: 0, label: 'Pendiente' },
        { id: 1, label: 'Evaluando' },
        { id: 2, label: 'Dictaminado' },
        { id: 3, label: labelStatus },
        { id: 4, label: 'Publicado' }
    ];  


  return (
    <div className='Steps_'>
         <Steps model={items} activeIndex={statusValue}/>
    </div>
  )
}

export default StepsLine