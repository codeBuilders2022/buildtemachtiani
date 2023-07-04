import React from 'react'

import "./Cards.scss"

const Cards = ({children, className, id}) => {
  return (
    <div className={`dark:bg-gray-500 bg-slate-100 Cards_s ${className}`} id={id}>{children}</div>
  )
}

export default Cards