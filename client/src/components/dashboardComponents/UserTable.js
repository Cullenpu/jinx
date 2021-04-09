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
import {removeUser, signup, getUsers, getCurrentUser} from "components/authComponents/authFunctions";
import UserModalBody from "./UserModalBody";
import UserRow from "./UserRow";
import Applicant from "./Applicant";

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
    users: [],

    curUser: "",
  };

  componentDidMount() {
    // Initialize the table
    getUsers().then((res) => this.setState({users: res}));
  }

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

  removeUser = (param) => (event) => {
    event.preventDefault();

    const result = removeUser(param);
    // Get result of the promise
    result.then((a) => {
      // Update the display again
      getUsers().then((res) => this.setState({users: res}));
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

    console.log(credentials)

    const result = signup(credentials);
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
        // Update the users table again
        getUsers().then((res) => this.setState({users: res}));
      }
    });
    this.props.history.go(0);
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
    if (this.props.app.state.role === "admin") {
      return (
        <div>
          <Applicant
            app={this.props.app}
            isAdmin={true}
          />
          <Card>
            <CardHeader>
              User Table{""}
              <small className="text-muted text-capitalize">2020-2021</small>
              <Button style={{float: "right"}} onClick={this.toggle()}>
                Add User
              </Button>
            </CardHeader>
            <Table striped>
              <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              {this.state.users.map((user) => {
                return (
                  <UserRow
                    key={user._id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    role={user.role}
                    userID={user._id}
                    app={this.props.app}
                    handleRemove={this.removeUser}
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
              <p style={{textAlign: "center"}}>{this.state.statusMsg}</p>
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
        </div>
      );
    }
    // Applicant, do not render admin table
    else {
      return (
        <Applicant
          app={this.props.app}
          isAdmin={false}
        />
      );
    }
  }
}

export default UserTable;
