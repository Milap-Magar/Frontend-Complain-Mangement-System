import React from "react";
import "./formInput.css";

const FormInput = (props) => {
  return (
    <>
      <div className="formInput">
        <input
          placeholder={props.placeholder}
          name={props.name}
        />
      </div>
    </>
  );
};

export default FormInput;
