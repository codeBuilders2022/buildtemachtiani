import React from 'react'

import "./Grid.scss"

const Grid = ({children, className}) => {
  return (
    <div className={`Grid_a ${className}`}>
        {children}
    </div>
  )
}

export default Grid