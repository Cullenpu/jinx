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

  updateConnections() {
    getConnections().then((res) => this.setState({ connections: res }));
    getUsers().then((res) => this.setState({ nonConnections: res }));
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
              app={this.props.app}
              title="Connections"
              users={this.state.connections}
              button="Remove"
              handleClick={removeConnection}
            />
            <ContactTable
              app={this.props.app}
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
