import React from "react";

const SignInForm = () => {
  const submitHandler = () => {
    alert("signed in!");
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
      <h1>Sign In:</h1>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="email"
          style={{ textAlign: "center" }}
        />

        <br />

        <input
          type="password"
          placeholder="password"
          style={{ textAlign: "center" }}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
