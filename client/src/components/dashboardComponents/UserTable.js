import yitian from "assets/img/users/yitian.png";
import axios from "axios";
import ENV from "config.js";
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { signup } from "../authComponents/authFunctions";
import UserModalBody from "./UserModalBody";
import UserRow from "./UserRow";

class UserTable extends React.Component {
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true,

    email: "",
    password: "",
    name: "",
    phone: "",
    role: "",
    statusMsg: "",
  };

  getUsers = () => {
    const API_HOST = ENV.api_host;
    const app = this.props.app;
    return axios
      .get(`${API_HOST}/users/all`, { id: app.state.id })
      .then((res) => {
        return [];
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  toggle = (modalType) => () => {
    // Remove status msg
    this.setState({
      statusMsg: "",
    });

    if (!modalType) {
      this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  // Save the changes to the db
  saveChanges = (event) => {
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      role: this.state.role,
    };

    if (this.state.phone) {
      credentials.phone = this.state.phone;
    }

    const result = signup(credentials, this.props.app);
    // Get result of the promise
    result.then((a) => {
      if (!a) {
        this.setState({
          statusMsg: "Please enter valid inputs!",
        });
      } else {
        this.setState({
          statusMsg: "User created!",
        });
      }
    });
  };

  // Handle input changes
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const users = [];
    console.log(users);

    return (
      <Card>
        <CardHeader>
          User Table{" "}
          <small className="text-muted text-capitalize">2020-2021</small>
          <Button style={{ float: "right" }} onClick={this.toggle()}>
            Add User
          </Button>
        </CardHeader>
        <Table striped>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Role</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <UserRow
                  avatar={yitian}
                  name={user.name}
                  email={user.email}
                  rating={10}
                  onClick={this.toggle()}
                />
              );
            })}
          </tbody>
        </Table>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle()}>User</ModalHeader>
          <ModalBody>
            <UserModalBody
              email={this.state.email}
              password={this.state.password}
              name={this.state.name}
              phone={this.state.phone}
              handleChange={this.handleInputChange}
            />
          </ModalBody>
          <p style={{ textAlign: "center" }}>{this.state.statusMsg}</p>
          <ModalFooter>
            <Button color="primary" onClick={this.saveChanges}>
              Save Changes
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Card>
    );
  }
}

export default UserTable;
