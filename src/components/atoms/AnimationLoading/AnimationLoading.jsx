import React from 'react'

import "./AnimationLoading.scss"

const AnimationLoading = ({className}) => {
  return (
    <div className={`cnt_loading ${className}`}>
        <div className='AnimationLoading'></div>
    </div>
  )
}

export default AnimationLoading