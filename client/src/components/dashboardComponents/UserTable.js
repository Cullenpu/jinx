import yitian from "assets/img/users/yitian.png";
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
import UserModalBody from "./UserModalBody";
import UserRow from "./UserRow";
import {signup} from "../authComponents/authFunctions";

const log = console.log

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
    statusMsg: ""
  };

  toggle = (modalType) => () => {
    // Remove status msg
    this.setState({
      statusMsg: ""
    })

    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  // Save the changes to the db
  saveChanges = (event) => {
    event.preventDefault()
    const credentials = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    }
    const result = signup(credentials, this.props.app)

    // Get result of the promise
    result.then((a) => {
      // -1 means not added sucessfully
      if (a === -1) {
        this.setState({
          statusMsg: "Please enter valid inputs!"
        })
      }
    })
  }

  // Handle input changes
  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          User Table{" "}
          <small className="text-muted text-capitalize">2020-2021</small>
          <Button style={{float: "right"}} onClick={this.toggle()}>
            Add User
          </Button>
        </CardHeader>
        <Table striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Edit</th>
          </tr>
          </thead>
          <tbody>
          <UserRow
            id={123}
            avatar={yitian}
            name="Yitian Bitian"
            email="yz@email.com"
            rating={10}
            onClick={this.toggle()}
          />
          <UserRow
            id={234}
            avatar={yitian}
            name="Yitian Bitian"
            email="yz@email.com"
            rating={10}
            onClick={this.toggle()}
          />
          <UserRow
            id={345}
            avatar={yitian}
            name="Yitian Bitian"
            email="yz@email.com"
            rating={10}
            onClick={this.toggle()}
          />
          <UserRow
            id={456}
            avatar={yitian}
            name="Yitian Bitian"
            email="yz@email.com"
            rating={10}
            onClick={this.toggle()}
          />
          <UserRow
            id={567}
            avatar={yitian}
            name="Yitian Bitian"
            email="yz@email.com"
            rating={10}
            onClick={this.toggle()}
          />
          <UserRow
            id={678}
            avatar={yitian}
            name="Yitian Bitian"
            email="yz@email.com"
            rating={10}
            onClick={this.toggle()}
          />
          </tbody>
        </Table>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle()}>User</ModalHeader>
          <ModalBody>
            <UserModalBody email={this.state.email} password={this.state.password} name={this.state.name}
                           handleChange={this.handleInputChange}/>
          </ModalBody>
          <h3 style={{color: "red", textAlign: "center"}}>{this.state.statusMsg}</h3>
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
