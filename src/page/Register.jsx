import React, { useState } from "react";
import axios from "axios";
import "./style_register.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    axios
      .post("http://localhost:8080/register", values)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };
  //   const [Values, setValues] = useState({
  //     name: "",
  //     dob: "",
  //     symbol: "",
  //     password: "",
  //     address: "",
  //     email: "",
  //     registration_no: "",
  //   });
  // //   console.log(Values);

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="heading">Register Students </h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="date">Date of Birth:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="symbol">Symbol:</label>
        <input type="text" id="symbol" name="symbol" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
        {/* 
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required /> */}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="regstraion_no">Regstration_no:</label>
        <input type="number" id="regstraion_no" name="regstraion_no" required />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
