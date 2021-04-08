import React from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

class UserModalBody extends React.Component {
  render() {
    const { email, password, name, phone, handleChange } = this.props;

    return (
      <Form>
        <FormGroup row>
          {/* <Label for="exampleName" sm={2}>
            Profile
          </Label>
          <Col sm={10}>
            <img
              src={null}
              alt="Avatar"
              style={{ borderRadius: "50%", width: "50px" }}
            />
          </Col> */}
        </FormGroup>
        <FormGroup row>
          <Label for="exampleName" sm={2}>
            Name*
          </Label>
          <Col sm={10}>
            <Input
              type="name"
              name="name"
              placeholder="First Last"
              value={name}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email*
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password*
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              placeholder="your password"
              value={password}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="phone" sm={2}>
            Phone
          </Label>
          <Col sm={10}>
            <Input
              type="phone"
              name="phone"
              placeholder="000-000-0000"
              value={phone}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="select" sm={2}>
            Role*
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="role"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="admin">Admin</option>
              <option value="applicant">Applicant</option>
            </Input>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default UserModalBody;
