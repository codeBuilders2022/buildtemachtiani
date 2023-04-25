import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

import "./Shedule.scss"

const Shedule = ({title, value, setValue, placeholder, id, onChange}) => {
  return (
    <div className="Shedule">
      {title && <label>{title}</label>}
      <Calendar
        value={value}
        id={id}
        onChange={onChange}
        // onChange={(e) => setValue(e.value)}
        dateFormat="dd/mm/yy"
        placeholder={placeholder ? placeholder : "Seleccione una fecha"}
        className="calendar_"
      />
    </div>
  );
};

export default Shedule;
