import React from 'react'

import "./Input.scss"
import { Skeleton } from 'primereact/skeleton'

const Input = ({ className, title, placeholder, onChange, id, type = 'text', skeleton }) => {
  return (
    <div className={`cnt_input ${className}`}>
      {
        !skeleton ?
          <>
            {title && <label>{title}</label>}
            <input type={type} id={id} className={`_input_`} onChange={onChange} placeholder={placeholder} />
          </>:
          <>
            <Skeleton width="100px" height="23px"></Skeleton>
            <Skeleton width="100%" height="48px"></Skeleton>

          </>
      }
    </div>
  )
}

export default Input