import React from 'react'

//Assets
import Left_arrow from '../../../assets/images/left-arrow.png'

//Styles
import "./Back.scss"
import { NavLink } from 'react-router-dom'

const Back = ({className, url}) => {
  return (
    <NavLink className={`Back ${className}`} to={url}>
        <img src={Left_arrow} alt="" className="img_back" />
    </NavLink>
  )
}

export default Back