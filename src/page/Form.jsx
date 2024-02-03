import React, { useState } from "react";
import { FormInput } from "../component";
import "./index.css";

const Form = () => {
  // const [values, setValues] = useState({
  //   Symbol: "",
  //   Password: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
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
