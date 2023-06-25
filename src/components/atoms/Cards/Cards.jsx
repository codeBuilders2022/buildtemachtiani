import React from 'react'

import "./Cards.scss"

const Cards = ({children, className}) => {
  return (
    <div className={`dark:bg-gray-500 bg-slate-100 Cards_s ${className}`}>{children}</div>
  )
}

export default Cards