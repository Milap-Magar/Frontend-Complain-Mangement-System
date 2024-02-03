import React from "react";

const FormAdmin = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    console.log(values);
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

export default FormAdmin;
