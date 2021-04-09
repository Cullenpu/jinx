import Avatar from "components/Avatar";
import React from "react";
import { Button } from "reactstrap";
import "styles/dashboard.css";

class ContactRow extends React.Component {
  render() {
    const { history, name, email, userID, button, handleClick } = this.props;

    return (
      <tr>
        <td>
          <Avatar name={name} />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <Button
            onClick={() => {
              handleClick(userID);
              history.go(0);
            }}
          >
            {button}
          </Button>
        </td>
      </tr>
    );
  }
}

export default ContactRow;
