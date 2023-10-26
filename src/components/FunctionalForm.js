import React, { useState } from "react";

const FunctionalForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const forName = (event) => {
    setName(event.target.value);
  };
  const forEmail = (event) => {
    setEmail(event.target.value);
  };
  const forPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <h1>Functional Forms</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={forName}
          value={name}
          placeholder="Enter your name"
          type="text"
        />
        <br /> <br />
        <input
          onChange={forEmail}
          value={email}
          placeholder="Enter your email"
          type="email"
        />
        <br />
        <br />
        <input
          onChange={forPassword}
          value={password}
          placeholder="password"
          type="password"
        />
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FunctionalForm;
