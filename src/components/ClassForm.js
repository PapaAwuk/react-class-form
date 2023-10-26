import React, { Component } from "react";

class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleNamechange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailchange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePasswordchange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
  };
  render() {
    return (
      <div>
        <h1>Class Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleNamechange}
            value={this.state.name}
            placeholder="Enter your name"
          />
          <br /> <br />
          <input
            onChange={this.handleEmailchange}
            value={this.state.email}
            type="email"
            placeholder="Enter your email"
          />
          <br /> <br />
          <input
            onChange={this.handlePasswordchange}
            value={this.state.password}
            type="password"
            placeholder="Enter your password"
          />
          <br /> <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ClassForm;
