import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import "./loginStyles.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAuthenticated: true };
  }

  handleClick = () => {
    if (this.state.userAuthenticated) {
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <div className="login-background">
        <Container className="login-container">
          <Row className="login-row">
            <Col>TODO: Insert logo</Col>
            <Col>
              <h2>User Login</h2>
              <Form className="login-form">
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="login-email"
                    className="login-form-input"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="login-password"
                    className="login-form-input"
                    placeholder="Password"
                  />
                </FormGroup>
                <Button onClick={this.handleClick}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
