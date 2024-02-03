import React from "react";
import React, { useRef, useState } from "react";
import { FormInput } from "../component";

const Form = () => {
  const [values, setValues] = useState({
    Symbol: "",
    Password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <FormInput name="symbol" placeholder="Symbol" />
        <FormInput name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
