import React from 'react'

import "./Input.scss"

const Input = ({clasName, title, placeholder, onChange, id}) => {
  return (
    <div className={`cnt_input ${clasName}`}>
        {title && <label>{title}</label>}
        <input type="text" id={id} className='_input_' onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

export default Input