//import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component() {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleNameChange}
          value={this.state.name}
          t
          ype="text"
          placeholder="Enter your name"
        />
        <input
          onChange={this.handleEmailChange}
          value={this.state.email}
          type="email"
          placeholder="Enter your Email"
        />
        <input type="submit" />
      </form>
    );
  }
}
export default App;
