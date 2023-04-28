import React, { useEffect } from 'react'

import "./Page404.scss"

//Assets
import Oops from '../../assets/images/img_404.png'
import { Button } from '../../components'
import { useNavigate } from 'react-router'

const Page404 = () => {

    // const navigate = useNavigate()

    // useEffect(() => {
    //   const remove = document.getElementById("nav_header1")
    //   remove.remove()
    //   const footer = document.getElementById("footer_foo1")
    //   footer.remove()
    // }, [])

    const sendHome = () => {
        window.location.replace('/');
    }
    

  return (
    <div className='Page404'>
        <div className="cnt_oops">
            <img src={Oops} alt="" className="img_oops" />
            <Button className={"btn_primary"} title={"Ir al inicio"} onClick={() => sendHome()}/>
        </div>
    </div>
  )
}

export default Page404