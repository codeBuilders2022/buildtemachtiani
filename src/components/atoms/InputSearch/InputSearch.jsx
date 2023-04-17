import React, { useEffect, useState } from "react";

import "./InputSearch.scss";

import { Skeleton } from "primereact/skeleton";

// assets
import Lupa from "../../../assets/images/magnifier.png";

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
}) => {
  return !skeleton ? (             
    <>
      <div className={`InputSearch ${className}`}>
        <input
          className={"bg-input-color-lig dark:bg-input-color-dark"}
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

        <div className="absolute w-6 h-6 flex justify-center items-center cursor-pointer right-3 top-[calc(50% - 8px)]">
          <img src={Lupa} className="w-full h-full object-cover"/>
        </div>
      </div>
    </>
  ) : (
    <Skeleton width={width || "100%"} className={className} height="34px" />
  );
};
export default InputSearch;
