import React from "react";
import { Card, CardHeader, Table } from "reactstrap";
import ContactRow from "./ContactRow";

class ContactTable extends React.Component {
  render() {
    const { title, button, users, handleClick } = this.props;

    return (
      <div>
        <Card>
          <CardHeader>{title}</CardHeader>
          <Table striped>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>{button}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <ContactRow
                    key={user._id}
                    avatar={null}
                    name={user.name}
                    email={user.email}
                    userID={user._id}
                    button={button}
                    handleClick={handleClick}
                  />
                );
              })}
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default ContactTable;
