import React from "react";
import { Dropdown } from "primereact/dropdown";

import "./Select.scss";

const Select = ({ title, placeholder, options, value, setValue }) => {

  const defaultOptions = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="Select">
      {title && <label>{title}</label>}
      <Dropdown
        value={value}
        onChange={(e) => setValue(e.value)}
        options={options ? options : defaultOptions}
        optionLabel="name"
        placeholder={placeholder ? placeholder : "Seleccione una opción"}
        className="select_drop"
      />
    </div>
  );
};

export default Select;
