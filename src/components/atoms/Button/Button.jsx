import React from "react";

import "./Button.scss";

const Button = ({ title, onCLick, className }) => {
  return (
    <button className={`Button_ ${className}`} onClick={onCLick}>
        {title}
    </button>
  );
};

export default Button;
