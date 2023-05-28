import React from 'react'

import "./AnimationLoading.scss"

const AnimationLoading = ({className}) => {
  return (
    <div className={`cnt_loading ${className}`}>
        <div className='AnimationLoading border-solid border-t-[2px] border-green-700 dark:border-white'></div>
    </div>
  )
}

export default AnimationLoading