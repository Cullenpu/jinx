import { getUsers } from "components/authComponents/authFunctions";
import {
  addConnection,
  getConnections,
  removeConnection,
} from "components/contactComponents/ContactFunctions";
import ContactTable from "components/contactComponents/ContactTable";
import Page from "components/Page";
import React from "react";
import { Col, Row } from "reactstrap";

class ContactsPage extends React.Component {
  state = {
    connections: [],
    nonConnections: [],
  };

  componentDidMount() {
    this.updateConnections();
  }

  async updateConnections() {
    const res = await getConnections();
    const connections = res.map((connection) => {
      return connection.followedId;
    });
    this.setState({ connections: connections });

    getUsers().then((res) => {
      const nonConnections = res.filter((connection) => {
        let connected = false;
        for (let i = 0; i < connections.length; i++) {
          if (connections[i]._id == connection._id) {
            connected = true;
            break;
          }
        }
        if (!connected && connection._id !== this.props.app.state.id) {
          return connection;
        }
      });
      this.setState({ nonConnections: nonConnections });
    });
  }

  render() {
    return (
      <Page
        className="ContactsPage"
        title="Contacts"
        breadcrumbs={[{ name: "Contacts", active: true }]}
      >
        <Row>
          <Col>
            <ContactTable
              history={this.props.history}
              title="Connections"
              users={this.state.connections}
              button="Remove"
              handleClick={removeConnection}
            />
            <br />
            <ContactTable
              history={this.props.history}
              title="Users"
              users={this.state.nonConnections}
              button="Connect"
              handleClick={addConnection}
            />
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ContactsPage;
