import React from "react";
import Logo from "../assets/logo.png";
import { FormInput, Image } from "../component";
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
      <div className="main-wrapper">
        <div className="form-wrapper">
          <form action="" onSubmit={handleSubmit} className="form-container">
            <Image logo={Logo} className='logo-img' />
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
            <div className="checkbox">
              <input type="checkbox" />
              <h6>Remember Me</h6>
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
