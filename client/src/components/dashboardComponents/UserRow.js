import React from "react";
import { Button } from "reactstrap";

const UserRow = (props) => {
  const { avatar, name, email, rating, role, onClick } = props;

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
      <td>{rating}</td>
      <td>{role}</td>
      <td>
        <Button onClick={() => {onClick()}}>Edit</Button>
      </td>
    </tr>
  );
};

export default UserRow;
