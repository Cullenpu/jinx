import AuthForm from "components/authComponents/AuthForm";
import React from "react";
import { Card, Col, Row } from "reactstrap";

class AuthPage extends React.Component {
  render() {
    return (
      <Row
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm app={this.props.app} />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AuthPage;
