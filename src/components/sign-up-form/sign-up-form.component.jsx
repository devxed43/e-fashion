import React from "react";

const SignUpForm = () => {
  const submitHandler = () => {
    alert("User Created!");
  };
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Sign Up:</h1>
      <form onSubmit={submitHandler}>
        <label>
          Display Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
