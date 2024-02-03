import React from "react";
import "./formInput.css";

const FormInput = ({ type, name, placeholder, icon1, icon2 }) => {
  return (
    <div className="formInputContainer">
      <div className="formInput">
        <input type={type} placeholder={placeholder} name={name} className="input" />
        {icon1 && <span className="icon">{icon1}</span>}
        {icon2 && <span className="icon">{icon2}</span>}
      </div>
    </div>
  );
};

export default FormInput;
