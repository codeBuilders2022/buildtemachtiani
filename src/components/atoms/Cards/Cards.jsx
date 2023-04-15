import React from 'react'

const Cards = ({children, className}) => {
  return (
    <div className={`dark:bg-gray-500 bg-slate-100 ${className}`}>{children}</div>
  )
}

export default Cards