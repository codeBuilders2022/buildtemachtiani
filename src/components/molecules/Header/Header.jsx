import React from 'react';
import Button from '../../atoms/Button/Button';
import './Header.scss'
import { Skeleton } from 'primereact/skeleton';

const Header = ({ category, title, button, onClick, skeleton }) => {
  return (
    <>
      {
        !skeleton ?
          <>
            <div className={`mb-10 p-3 ${button ? "headerflex" : ""}`}>
              <div>
                <h2 className="text-4xl dark:text-gray-400">{category}</h2>
                <h1 className="centerText text-3xl font-extrabold tracking-tight dark:text-white text-black">
                  {title}
                </h1>
              </div>
              <div>
                {
                  button ?
                    <>
                      <Button className={"btn_primary buttonsize"} onCLick={onClick} title={button}></Button>
                    </> : ""
                }
              </div>
            </div>
          </>
          :
          <>
            <div className={`mb-10 p-3 ${button ? "headerflex" : ""}`}>
              <div>
                {/* <h2 className="text-4xl dark:text-gray-400">{category}</h2> */}
                <h1 className="centerText text-3xl font-extrabold tracking-tight dark:text-white text-black">
                <Skeleton width='250px' height='36px'></Skeleton>
                  {/* {title} */}
                </h1>
              </div>
              <div>
                {
                  button ?
                    <>
                      <Skeleton width='250px' height='36px'></Skeleton>
                    </> : ""
                }
              </div>
            </div>
          </>
      }
    </>
  )
}

export default Header;