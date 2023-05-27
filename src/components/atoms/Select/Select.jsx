import React from "react";
import { Dropdown } from "primereact/dropdown";

import "./Select.scss";

const Select = ({ title, placeholder, options, value, setValue, id, onChange, optionLabel = "value",className}) => {

  const defaultOptions = [
    { value: ""},
  ];

  return (
    <div className={`Select ${className}`}>
      {title && <label>{title}</label>}
      <Dropdown
        id={id}
        value={value}
        onChange={onChange}
        options={options ? options : defaultOptions}
        optionLabel={optionLabel}
        placeholder={placeholder ? placeholder : "Seleccione una opción"}
        className="select_drop"
        filter
      />
    </div>
  );
};

export default Select;
