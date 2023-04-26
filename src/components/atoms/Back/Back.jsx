import React from 'react'

//Assets
import Left_arrow from '../../../assets/images/left-arrow.png'

//Styles
import "./Back.scss"
import { NavLink } from 'react-router-dom'
import { Skeleton } from 'primereact/skeleton'

const Back = ({ className, url, skeleton }) => {
  return (
    <>
      {
        !skeleton ?
          <>
            <NavLink className={`Back ${className}`} to={url}>
              <img src={Left_arrow} alt="" className="img_back" />
            </NavLink>
          </> :
          <>
          <div className={`Back ${className}`}>
            <Skeleton shape="circle" size="2rem" className="img_back"></Skeleton>
          </div>
          </>
      }
    </>

  )
}

export default Back