import logo from "assets/img/logo/jinx_logo_text.svg";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login, signup } from "./authFunctions";

class AuthForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleLogin = (event) => {
    event.preventDefault();
    login(this.state, this.props.app);
  };

  handleSignup = (event) => {
    event.preventDefault();
    signup(this.state, this.props.app);
  };

  render() {
    return (
      <Form onSubmit={this.handleLogin}>
        <div className="text-center pb-4">
          <img
            src={logo}
            className="rounded"
            style={{ width: 100, height: 100 }}
            alt="logo"
          />
        </div>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            placeholder="your@email.com"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            placeholder="your password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleLogin}
        >
          Login
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            <a href="#signup" onClick={this.handleSignup}>
              Signup
            </a>
          </h6>
        </div>
      </Form>
    );
  }
}

export default AuthForm;
