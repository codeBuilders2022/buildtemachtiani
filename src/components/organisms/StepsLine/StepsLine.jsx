import React from 'react'
import { Steps } from 'primereact/steps';

import "./StepsLine.scss"

const StepsLine = () => {
    const items = [
        { id: 1, label: 'Enviado' },
        { id: 2, label: 'En espera' },
        { id: 3, label: 'Revisando normas' },
        { id: 4, label: 'Aprobado' },
        { id: 5, label: 'Publicado' }
    ];

  return (
    <div className='Steps_'>
         <Steps model={items} />
    </div>
  )
}

export default StepsLine