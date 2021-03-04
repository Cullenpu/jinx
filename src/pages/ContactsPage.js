import Page from 'components/Page';
import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import ContactsTab from 'components/ContactsTab';

const ContactsPage = () => {

  return (
      <Page
        className="ContactsPage"
        title="Contacts"
        breadcrumbs={[{ name: 'Contacts', active: true }]}
      >
        <Col>
          <Row>
            <ContactsTab />
          </Row>
        </Col>
      </Page>
    );
};

export default ContactsPage;
