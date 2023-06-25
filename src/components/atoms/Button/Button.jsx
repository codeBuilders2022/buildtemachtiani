import React from "react";

import "./Button.scss";
import { Skeleton } from "primereact/skeleton";

const Button = ({ title, onClick, className, skeleton, style }) => {
  return (
    <>
      {
        !skeleton ?
          <>
            <button className={`Button_ ${className}`} onClick={onClick} style={style}>
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
