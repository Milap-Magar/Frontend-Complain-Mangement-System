import React from "react";
import { FormInput } from "../component";
import { SiSymbolab } from "react-icons/si";
import { RiLockPasswordFill } from "react-icons/ri";
import "./index.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <>
    <div className="form-wrapper">
      <form action="" onSubmit={handleSubmit} className="form-container">
        <FormInput
          type="number"
          name="symbol"
          placeholder="Symbol"
          icon1={<SiSymbolab />}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          icon2={<RiLockPasswordFill />}
        />
        <button type="submit" className="btn-login">Login</button>
      </form>
      </div>
    </>
  );
};

export default Form;
