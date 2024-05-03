import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("wrong username or password");
      resetFormFields();
      return;
    }

    if (!displayName || !email || !password || !confirmPassword) {
      alert("empty input");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          placeholder="username"
          style={{ textAlign: "center" }}
        />

        <br />

        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="email"
          style={{ textAlign: "center" }}
        />

        <br />

        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          placeholder="password"
          style={{ textAlign: "center" }}
        />

        <br />

        <input
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          placeholder="confirm password"
          style={{ textAlign: "center" }}
          a
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
