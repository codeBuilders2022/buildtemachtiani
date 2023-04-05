import React, { useEffect, useState } from "react";

// import "./InputSearch.scss";

import { Skeleton } from "primereact/skeleton";

// assets
import Lupa from "../../assets/images/magnifier.png";

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
      <div className={`relative h-9 w-80 shadow-md dark:shadow-inner flex justify-center items-center bg-white rounded-xl ${className}`}>
        <input
          className={
            "h-full w-full shadow-inner text-black pl-4 pr-10 border-none outline-none rounded-xl placeholder-gray-600 placeholder:text-xs "
          }
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
