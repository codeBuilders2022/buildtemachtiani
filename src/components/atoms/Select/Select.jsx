import React from "react";
import { Dropdown } from "primereact/dropdown";

import "./Select.scss";

const Select = ({ title, placeholder, options, value, setValue, id, onChange, optionLabel = "value"}) => {

  const defaultOptions = [
    { value: "", code: "" },
  ];

  return (
    <div className="Select">
      {title && <label>{title}</label>}
      <Dropdown
        id={id}
        value={value}
        onChange={onChange}
        // onChange={(e) => setValue(e.value)}
        options={options ? options : defaultOptions}
        optionLabel={optionLabel}
        placeholder={placeholder ? placeholder : "Seleccione una opción"}
        className="select_drop"
      />
    </div>
  );
};

export default Select;
