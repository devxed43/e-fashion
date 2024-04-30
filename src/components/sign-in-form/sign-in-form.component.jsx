import React from "react";

const SignInForm = () => {
  const submitHandler = () => {
    alert("signed in!");
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "40px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Sign In:</h1>
      <form onSubmit={submitHandler}>
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
