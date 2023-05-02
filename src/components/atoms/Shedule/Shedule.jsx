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
        selectRange={true}
        // onChange={(e) => setValue(e.value)}
        dateFormat="yy-mm-dd"
        placeholder={placeholder ? placeholder : "Seleccione una fecha"}
        className="calendar_"
        // dateFormat="dd/mm/yyyy"
      />
    </div>
  );
};

export default Shedule;
