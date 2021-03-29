import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';
import yitian from "assets/img/users/yitian.png";

const UserModalBody = () => {
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleName" sm={2}>
          Profile
        </Label>
        <Col sm={10}>
          <img
            src={yitian}
            alt="Avatar"
            style={{ borderRadius: "50%", width: "50px" }}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleName" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input
            type="name"
            name="name"
            placeholder="Yitian Bitian"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            placeholder="yz@email.com"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Password
        </Label>
        <Col sm={10}>
          <Input
            type="password"
            name="password"
            placeholder="Windsor is cool"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Bio
        </Label>
        <Col sm={10}>
          <Input type="textarea" name="text" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>
          Resume
        </Label>
        <Col sm={10}>
          <Input type="file" name="file" />
          <FormText color="muted">
            Add a new resume for this user.
          </FormText>
        </Col>
      </FormGroup>
    </Form>
  )
}

export default UserModalBody;