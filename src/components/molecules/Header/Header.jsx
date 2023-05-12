import React from 'react';
import Button from '../../atoms/Button/Button';
import './Header.scss'
import { Skeleton } from 'primereact/skeleton';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ category, day, month, year, title, button, onClick, skeleton, url = '#' }) => {
  return (
    <>
      {
        !skeleton ?
          <>
            <div className={`mb-10 p-3 ${button ? "headerflex" : ""}`}>
              <div>
                <h2 className="text-4xl lowercase first-letter:capitalize dark:text-gray-400">{category}</h2>
                <h1 className="mt-10 mb-2 centerText text-2xl font-extrabold tracking-tight dark:text-white text-black">
                  {title}
                </h1>
                <p className="font-bold">Publicado: {day} {month} {year} </p>
                <Link className="font-bold">DOI: https://doi.org/10.1093/icesjms/fsy035</Link>
              </div>
              <div>
                {
                  button ?
                    <>
                      <NavLink to={url}>
                        <Button className={"btn_primary buttonsize"} title={button} onClick={onClick} />
                      </NavLink>
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