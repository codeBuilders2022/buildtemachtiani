import React from 'react'

import "./MessageWarning.scss"

const MessageWarning = ({handle}) => {
    
  return (
    <div className="MessageWarning">
      ¡Estamos trabajando arduamente para mejorar tu experiencia! Con el objetivo de
      brindarte un mejor servicio. Apreciamos y agradecemos tu comprensión
      durante este proceso.
      <button className='btn-close' onClick={() => handle()}>x</button>
    </div>
  );
}

export default MessageWarning