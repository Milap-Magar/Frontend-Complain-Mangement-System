import React from "react";
import FormInput from "../../component/FormInput.component";

const FormUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
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

export default FormUser;
