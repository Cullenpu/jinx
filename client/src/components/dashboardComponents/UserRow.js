import { edit } from "components/authComponents/authFunctions";
import Avatar from "components/Avatar";
import React from "react";
import { Button, Input } from "reactstrap";
import "styles/dashboard.css";

class UserRow extends React.Component {
  // Get states from props
  state = {
    name: this.props.name,
    email: this.props.email,
    phone: this.props.phone,
    role: this.props.role,
    userID: this.props.userID,

    // Update Messages
    nameMsg: "",
    emailMsg: "",
    roleMsg: "",
    phoneMsg: "",
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

  // Save edits to the db
  edit = (param) => (event) => {
    event.preventDefault();

    let value = null;
    if (param === "/name") {
      value = this.state.name;
    } else if (param === "/email") {
      value = this.state.email;
    } else if (param === "/phone") {
      value = this.state.phone;
    } else if (param === "/role") {
      value = this.state.role;
    }
    const result = edit(this.state.userID, "replace", param, value);
    // Get result of the promise
    result.then((a) => {
      if (!a) {
        if (param === "/name") {
          this.setState({
            nameMsg: "Please enter valid inputs!",
          });
        } else if (param === "/email") {
          this.setState({
            emailMsg: "Please enter valid inputs!",
          });
        } else if (param === "/phone") {
          this.setState({
            phoneMsg: "Please enter valid inputs!",
          });
        } else if (param === "/role") {
          this.setState({
            roleMsg: "Please enter valid inputs!",
          });
        }
      } else {
        if (param === "/name") {
          this.setState({
            nameMsg: "Successfully Updated!",
          });
        } else if (param === "/email") {
          this.setState({
            emailMsg: "Successfully Updated!",
          });
        } else if (param === "/phone") {
          this.setState({
            phoneMsg: "Successfully Updated!",
          });
        } else if (param === "/role") {
          this.setState({
            roleMsg: "Successfully Updated!",
          });
        }
      }
    });
  };

  render() {
    const { name, handleRemove } = this.props;

    return (
      <tr>
        <td>
          <Avatar name={name} />
        </td>
        <td>
          <Input
            type="name"
            name="name"
            className="inputText"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <Button className="editButton" onClick={this.edit("/name")}>
            Edit
          </Button>
          <div className="statusText">
            <p>{this.state.nameMsg}</p>
          </div>
        </td>
        <td>
          <Input
            type="email"
            name="email"
            className="inputText"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <Button className="editButton" onClick={this.edit("/email")}>
            Edit
          </Button>
          <div className="statusText">
            <p>{this.state.emailMsg}</p>
          </div>
        </td>
        <td>
          <Input
            type="phone"
            name="phone"
            className="inputText"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
          <Button className="editButton" onClick={this.edit("/phone")}>
            Edit
          </Button>
          <div className="statusText">
            <p>{this.state.phoneMsg}</p>
          </div>
        </td>
        <td>
          <select
            name="role"
            className="dropDownSelect"
            value={this.state.role}
            onChange={this.handleInputChange}
          >
            <option value="admin">admin</option>
            <option value="applicant">applicant</option>
          </select>
          <Button className="editButton" onClick={this.edit("/role")}>
            Edit
          </Button>
          <div className="statusText">
            <p>{this.state.roleMsg}</p>
          </div>
        </td>
        <td>
          <Button onClick={handleRemove(this.state.userID)}>Remove</Button>
        </td>
      </tr>
    );
  }
}

export default UserRow;
