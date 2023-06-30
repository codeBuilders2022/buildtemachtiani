import React from "react";

import "./Button.scss";
import { Skeleton } from "primereact/skeleton";

const Button = ({ title, onClick, className, skeleton, style, type }) => {
  return (
    <>
      {
        !skeleton ?
          <>
            <button className={`Button_ ${className}`} onClick={onClick} style={style} type={type}>
              {title}
            </button>
          </> :
          <>
              <Skeleton className={`skeletonbutton`} height="48px"></Skeleton>
          </>
      }
    </>

  );
};

export default Button;
