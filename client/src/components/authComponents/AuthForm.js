import logo from "assets/img/logo/jinx_logo_text.svg";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login, signup } from "./authFunctions";

class AuthForm extends React.Component {
  state = {
    signup: false,
    email: "",
    password: "",
    name: "",
  };

  handleLogin = (event) => {
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };
    login(credentials, this.props.app);
  };

  handleSignup = (event) => {
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    };
    signup(credentials, this.props.app);
  };

  render() {
    const signup = this.state.signup;

    return (
      <Form onSubmit={!signup ? this.handleLogin : this.handleSignup}>
        <div className="text-center pb-4">
          <img
            src={logo}
            className="rounded"
            style={{ width: 100, height: 100 }}
            alt="logo"
          />
        </div>
        {signup ? (
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input
              type="name"
              placeholder="your name"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </FormGroup>
        ) : null}
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
          onClick={!signup ? this.handleLogin : this.handleSignup}
        >
          {!signup ? "Login" : "Signup"}
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            <a
              href="#signup"
              onClick={() => this.setState({ signup: !signup })}
            >
              {signup ? "Login" : "Signup"}
            </a>
          </h6>
        </div>
      </Form>
    );
  }
}

export default AuthForm;
