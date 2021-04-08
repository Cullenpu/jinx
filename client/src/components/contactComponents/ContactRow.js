import React from "react";
import { Button } from "reactstrap";
import "styles/dashboard.css";

class ContactRow extends React.Component {
  render() {
    const {
      avatar,
      name,
      email,
      userID,
      button,
      handleClick,
    } = this.props;

    const ProfileImage = ({ src }) => {
      return (
        <img
          src={src}
          alt="Avatar"
          style={{ borderRadius: "50%", width: "50px" }}
        />
      );
    };

    return (
      <tr>
        <td>
          <ProfileImage src={avatar} />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <Button
            onClick={() => {
              handleClick(userID);
              window.location.reload();
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
