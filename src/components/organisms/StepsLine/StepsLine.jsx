import React from 'react'
import { Steps } from 'primereact/steps';

import "./StepsLine.scss"

const StepsLine = ({estatus = 0}) => {
    const items = [
        { id: 0, label: 'Enviado' },
        { id: 1, label: 'En espera' },
        { id: 2, label: 'Revisando normas' },
        { id: 3, label: 'Aprobado' },
        { id: 4, label: 'Publicado' }
    ];

  return (
    <div className='Steps_'>
         <Steps model={items} activeIndex={estatus}/>
    </div>
  )
}

export default StepsLine