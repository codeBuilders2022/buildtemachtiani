import React from 'react'
import { Steps } from 'primereact/steps';

import "./StepsLine.scss"

const StepsLine = ({estatus = 0}) => {
    const items = [
        { id: 0, label: 'Pendiente' },
        { id: 1, label: 'Evaluando' },
        { id: 2, label: 'Revisión' },
        { id: 3, label: 'Notificación' },
        { id: 4, label: 'Publicado' }
    ];

  return (
    <div className='Steps_'>
         <Steps model={items} activeIndex={estatus}/>
    </div>
  )
}

export default StepsLine