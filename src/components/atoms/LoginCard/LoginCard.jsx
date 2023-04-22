import React from "react";
import './LoginCard.scss'
import logoIcon from '../../../assets/images/logo_dark.png'

const LoginCard = ({ children, title, subTitle,logo }) => {
    return (
        <>
            <div className="LoginCard">
                {
                    logo?
                        <>
                            <div className="logo-container">
                                <img className="logo" src={logoIcon} alt="" />
                            </div>
                        </> :
                        ""
                }
                <div className="title-card">{title}</div>
                <div className="sub-title-card">{subTitle}</div>
                {children}
            </div>
        </>
    )
}
export default LoginCard