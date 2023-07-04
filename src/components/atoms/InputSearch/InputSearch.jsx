import React from "react";

import "./InputSearch.scss";

import { Skeleton } from "primereact/skeleton";

// assets
import Lupa from '../../../assets/images/magnifier.png'

const InputSearch = ({
  placeholder,
  id,
  value,
  className,
  disabled,
  width,
  skeleton,
  onBlur,
  onChange,
  onKeyDown,
  idDiv
}) => {
  return !skeleton ? (             
    <>
      <div className={`InputSearch ${className}`} id={idDiv}>
        <input
          id={id}
          value={value}
          disabled={disabled}
          type={"text"}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}

          // autoComplete={autoComplete}
        />

        <div className="cnt_lup">
          <img src={Lupa} className="img_lup"/>
        </div>
      </div>
    </>
  ) : (
    <Skeleton width={width || "100%"} className={className} height="34px" />
  );
};
export default InputSearch;
